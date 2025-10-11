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

    // Configure the conversion options for pdf2pic
    const options = {
      density: 150, // A good balance of quality and file size
      saveFilename: "page", // The base name for the output files
      format: "jpg",
      width: 768, // Optional: set a fixed width for the images
      height: 1024, // Optional: set a fixed height for the images
    };

    // fromBuffer returns a function that you can call to convert pages
    const convert = fromBuffer(pdfBuffer, options);
    
    // Use 'bulk' with -1 to convert all pages and get buffers in the response
    const imageBuffers = await convert.bulk(-1, { responseType: "buffer" });

    const zip = new JSZip();

    // Loop through the array of image buffer objects and add each to the zip file
    imageBuffers.forEach((imageOutput, index) => {
      // Ensure the buffer exists before adding it to the zip
      if (imageOutput && imageOutput.buffer) {
        // The file name inside the ZIP will be page-1.jpg, page-2.jpg, etc.
        zip.file(`page-${index + 1}.jpg`, imageOutput.buffer);
      }
    });

    // Generate the ZIP file as a Node.js buffer
    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    // Set the headers for the response to trigger a file download
    const headers = new Headers();
    headers.set("Content-Type", "application/zip");
    headers.set(
      "Content-Disposition",
      `attachment; filename="converted-images.zip"`
    );

    return new Response(zipBuffer, { headers });

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Server error: Failed to process the PDF." },
      { status: 500 }
    );
  }
};