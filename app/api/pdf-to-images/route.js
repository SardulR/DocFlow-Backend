// app/api/pdf-to-images/route.js
import { NextResponse } from "next/server";
import { fromBuffer } from "pdf2pic";
import JSZip from "jszip";

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const pdfBuffer = Buffer.from(arrayBuffer);

    // Use pdf2pic to convert the PDF buffer to a list of image buffers
    const convert = fromBuffer(pdfBuffer, {
      density: 100, // Image quality (higher is better)
      saveFilename: "page",
      format: "jpg",
      width: 2000,
      height: 2000,
    });

    // FIXED: Added await here - bulk returns a Promise
    const pages = await convert.bulk(-1, { responseType: "buffer" });
    
    const zip = new JSZip();

    // Loop through each page and add it to the zip file
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      
      // FIXED: Check for page.buffer (not imageBuffer.buffer)
      if (page && page.buffer) {
        zip.file(`page-${i + 1}.jpg`, page.buffer);
      }
    }

    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    // Return the zip file as a download
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
    return NextResponse.json(
      { 
        error: "Server error: Failed to process PDF.",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
};