// app/api/pdf-to-images/route.js
import { NextResponse } from "next/server";
import { fromBuffer } from "pdf2pic";
import JSZip from "jszip";

export const POST = async (req) => {
  try {
    console.log("Starting PDF to images conversion...");
    
    const formData = await req.formData();
    const file = formData.get("file");

    console.log("File received:", {
      name: file?.name,
      type: file?.type,
      size: file?.size
    });

    if (!file) {
      console.error("No file provided in request");
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    if (!file.type || !file.type.includes("pdf")) {
      console.error("Invalid file type:", file.type);
      return NextResponse.json({ error: "Invalid file type. Please upload a PDF file." }, { status: 400 });
    }

    // Check file size (limit to 50MB)
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      console.error("File too large:", file.size);
      return NextResponse.json({ error: "File too large. Maximum size is 50MB." }, { status: 400 });
    }

    console.log("Converting file to buffer...");
    const arrayBuffer = await file.arrayBuffer();
    const pdfBuffer = Buffer.from(arrayBuffer);
    
    console.log("PDF buffer created, size:", pdfBuffer.length);

    // Configure the conversion options for pdf2pic
    const options = {
      density: 150, // A good balance of quality and file size
      saveFilename: "page", // The base name for the output files
      format: "jpg",
      width: 768, // Optional: set a fixed width for the images
      height: 1024, // Optional: set a fixed height for the images
    };

    console.log("Starting PDF conversion with options:", options);

    // fromBuffer returns a function that you can call to convert pages
    const convert = fromBuffer(pdfBuffer, options);
    
    // Use 'bulk' with -1 to convert all pages and get buffers in the response
    console.log("Converting PDF pages to images...");
    const imageBuffers = await convert.bulk(-1, { responseType: "buffer" });
    
    console.log("Conversion completed. Number of pages:", imageBuffers.length);

    if (!imageBuffers || imageBuffers.length === 0) {
      console.error("No images were generated from the PDF");
      return NextResponse.json({ error: "No images could be generated from this PDF. The file might be corrupted or password-protected." }, { status: 400 });
    }

    console.log("Creating ZIP file...");
    const zip = new JSZip();

    // Loop through the array of image buffer objects and add each to the zip file
    let addedFiles = 0;
    imageBuffers.forEach((imageOutput, index) => {
      // Ensure the buffer exists before adding it to the zip
      if (imageOutput && imageOutput.buffer) {
        // The file name inside the ZIP will be page-1.jpg, page-2.jpg, etc.
        zip.file(`page-${index + 1}.jpg`, imageOutput.buffer);
        addedFiles++;
        console.log(`Added page ${index + 1} to ZIP`);
      } else {
        console.warn(`Skipping page ${index + 1} - no buffer available`);
      }
    });

    if (addedFiles === 0) {
      console.error("No valid image buffers found");
      return NextResponse.json({ error: "Failed to process any pages from the PDF." }, { status: 500 });
    }

    console.log(`Generating ZIP file with ${addedFiles} images...`);

    // Generate the ZIP file as a Node.js buffer
    const zipBuffer = await zip.generateAsync({ 
      type: "nodebuffer",
      compression: "DEFLATE",
      compressionOptions: {
        level: 6
      }
    });

    console.log("ZIP file generated successfully, size:", zipBuffer.length);

    // Set the headers for the response to trigger a file download
    const headers = new Headers();
    headers.set("Content-Type", "application/zip");
    headers.set("Content-Disposition", `attachment; filename="converted-images.zip"`);
    headers.set("Content-Length", zipBuffer.length.toString());

    console.log("Sending ZIP file response...");
    return new Response(zipBuffer, { headers });

  } catch (error) {
    console.error("Detailed server error:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    // More specific error messages based on error type
    let errorMessage = "Server error: Failed to process the PDF.";
    
    if (error.message.includes("Invalid PDF")) {
      errorMessage = "Invalid PDF file. The file appears to be corrupted or is not a valid PDF.";
    } else if (error.message.includes("password") || error.message.includes("encrypted")) {
      errorMessage = "Password-protected PDFs are not supported. Please remove the password and try again.";
    } else if (error.message.includes("memory") || error.message.includes("heap")) {
      errorMessage = "PDF file is too large or complex to process. Please try with a smaller file.";
    } else if (error.code === 'ENOENT') {
      errorMessage = "Required system dependencies are missing on the server.";
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
};