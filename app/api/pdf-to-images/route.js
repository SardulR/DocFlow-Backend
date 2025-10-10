// app/api/pdf-to-images/route.js
import { NextResponse } from "next/server";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import JSZip from "jszip";
import { createCanvas } from "canvas";

// Disable worker for server-side rendering
pdfjsLib.GlobalWorkerOptions.workerSrc = null;

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Load the PDF document
    const loadingTask = pdfjsLib.getDocument({
      data: uint8Array,
      useSystemFonts: true,
    });
    
    const pdfDocument = await loadingTask.promise;
    const numPages = pdfDocument.numPages;

    console.log(`Processing PDF with ${numPages} pages`);

    const zip = new JSZip();

    // Process each page
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdfDocument.getPage(pageNum);
      
      // Get viewport with scale for better quality
      const scale = 2.0; // Higher scale = better quality
      const viewport = page.getViewport({ scale });

      // Create canvas
      const canvas = createCanvas(viewport.width, viewport.height);
      const context = canvas.getContext("2d");

      // Render PDF page to canvas
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;

      // Convert canvas to buffer (PNG format)
      const imageBuffer = canvas.toBuffer("image/png");

      // Add to zip
      zip.file(`page-${pageNum}.png`, imageBuffer);

      console.log(`Processed page ${pageNum}/${numPages}`);
    }

    // Generate zip file
    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    // Return the zip file
    const headers = new Headers();
    headers.set("Content-Type", "application/zip");
    headers.set(
      "Content-Disposition",
      `attachment; filename="converted-images.zip"`
    );

    return new Response(zipBuffer, { headers });
  } catch (error) {
    console.error("Server error:", error);
    console.error("Error details:", error instanceof Error ? error.message : String(error));
    console.error("Stack trace:", error instanceof Error ? error.stack : "");
    
    return NextResponse.json(
      { 
        error: "Server error: Failed to process PDF.",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
};