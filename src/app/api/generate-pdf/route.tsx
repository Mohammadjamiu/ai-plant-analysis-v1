// import { NextResponse } from "next/server";
// import PDFDocument from "pdfkit";

// export async function POST(request: Request) {
//   try {
//     const { analysis, image } = await request.json();

//     // Create a PDF document
//     const doc = new PDFDocument();
//     const buffers: Buffer[] = [];

//     // Collect PDF data chunks
//     doc.on("data", (buffer) => buffers.push(buffer));
//     doc.on("end", () => {
//       const pdfData = Buffer.concat(buffers);
//       return new NextResponse(pdfData, {
//         headers: {
//           "Content-Type": "application/pdf",
//           "Content-Disposition": "attachment; filename=plant-analysis.pdf",
//         },
//       });
//     });

//     // Add content to PDF
//     doc
//       .fontSize(25)
//       .text("Plant Analysis Report", { align: "center" })
//       .moveDown();

//     // Add the image
//     if (image) {
//       const imgBuffer = Buffer.from(image.split(",")[1], "base64");
//       doc
//         .image(imgBuffer, {
//           fit: [400, 300],
//           align: "center",
//         })
//         .moveDown();
//     }

//     // Add the analysis text
//     doc.fontSize(12).text(analysis);

//     doc.end();
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     return NextResponse.json(
//       { error: "Failed to generate PDF" },
//       { status: 500 }
//     );
//   }
// }
// import { NextResponse } from "next/server";
// import PDFDocument from "pdfkit";

// export async function POST(request: Request) {
//   try {
//     const { analysis, image } = await request.json();

//     return new Promise((resolve, reject) => {
//       // Create a PDF document
//       const doc = new PDFDocument();
//       const buffers: Buffer[] = [];

//       // Collect PDF data chunks
//       doc.on("data", (buffer) => buffers.push(buffer));
//       doc.on("end", () => {
//         const pdfData = Buffer.concat(buffers);
//         resolve(
//           new NextResponse(pdfData, {
//             headers: {
//               "Content-Type": "application/pdf",
//               "Content-Disposition": "attachment; filename=plant-analysis.pdf",
//             },
//           })
//         );
//       });

//       // Add title
//       doc
//         .fontSize(24)
//         .text("Plant Analysis Report", { align: "center" })
//         .moveDown(2);

//       // Add image if provided
//       if (image) {
//         const imgBuffer = Buffer.from(image.split(",")[1], "base64");
//         doc
//           .image(imgBuffer, {
//             fit: [400, 300],
//             align: "center",
//           })
//           .moveDown(2);
//       }

//       // Format and add analysis text
//       const sections = analysis.split("**");
//       sections.forEach((section) => {
//         if (section.trim()) {
//           if (
//             section.startsWith("1.") ||
//             section.startsWith("2.") ||
//             section.startsWith("3.") ||
//             section.startsWith("4.") ||
//             section.startsWith("5.")
//           ) {
//             doc
//               .fontSize(16)
//               .text(section.split(":")[0].trim(), { underline: true })
//               .moveDown(0.5)
//               .fontSize(12);

//             const content = section.split(":")[1]?.trim();
//             if (content) {
//               doc.text(content).moveDown();
//             }
//           } else {
//             doc.text(section.trim()).moveDown();
//           }
//         }
//       });

//       // Add disclaimer at the bottom
//       doc
//         .moveDown(2)
//         .fontSize(10)
//         .text(
//           "Disclaimer: This report is generated automatically and should be verified by a professional.",
//           {
//             align: "center",
//             color: "grey",
//           }
//         );

//       doc.end();
//     });
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     return NextResponse.json(
//       { error: "Failed to generate PDF" },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import PDFDocument from "pdfkit";
// import path from "path";
// import { promises as fs } from "fs";

// export async function POST(request: Request) {
//   try {
//     const { analysis, image } = await request.json();

//     return new Promise(async (resolve, reject) => {
//       try {
//         // Create a PDF document with explicit font paths
//         const doc = new PDFDocument({
//           font: path.join(
//             process.cwd(),
//             "public",
//             "fonts",
//             "Circular_Std_Book.ttf"
//             // "Roboto-Regular.ttf"
//           ),
//         });

//         const buffers: Buffer[] = [];

//         // Collect PDF data chunks
//         doc.on("data", (buffer) => buffers.push(buffer));

//         doc.on("end", () => {
//           const pdfData = Buffer.concat(buffers);
//           resolve(
//             new NextResponse(pdfData, {
//               headers: {
//                 "Content-Type": "application/pdf",
//                 "Content-Disposition":
//                   "attachment; filename=plant-analysis.pdf",
//               },
//             })
//           );
//         });

//         // Add title
//         doc
//           .fontSize(24)
//           .text("Plant Analysis Report", { align: "center" })
//           .moveDown(2);

//         // Add image if provided
//         if (image) {
//           const imgBuffer = Buffer.from(image.split(",")[1], "base64");
//           doc
//             .image(imgBuffer, {
//               fit: [400, 300],
//               align: "center",
//             })
//             .moveDown(2);
//         }

//         // Format and add analysis text with custom styling
//         const sections = analysis.split("**");
//         sections.forEach((section) => {
//           if (section.trim()) {
//             if (section.includes(":")) {
//               const [title, content] = section.split(":");
//               doc
//                 .fontSize(16)
//                 .text(title.trim())
//                 .moveDown(0.5)
//                 .fontSize(12)
//                 .text(content.trim())
//                 .moveDown(1);
//             } else {
//               doc.fontSize(12).text(section.trim()).moveDown(1);
//             }
//           }
//         });

//         // Add disclaimer
//         doc
//           .moveDown(2)
//           .fontSize(10)
//           .fillColor("grey")
//           .text(
//             "Disclaimer: This report is generated automatically and should be verified by a professional.",
//             {
//               align: "center",
//             }
//           );

//         // End the document
//         doc.end();
//       } catch (error) {
//         reject(error);
//       }
//     });
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     return NextResponse.json(
//       { error: "Failed to generate PDF" },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import PDFDocument from "pdfkit";
// import path from "path";

// export async function POST(request: Request) {
//   try {
//     const { analysis, image } = await request.json();

//     // Extract plant name from analysis
//     const plantName = extractPlantName(analysis) || "plant";
//     const fileName = `${plantName
//       .toLowerCase()
//       .replace(/\s+/g, "-")}-analysis.pdf`;

//     return new Promise(async (resolve, reject) => {
//       try {
//         const doc = new PDFDocument({
//           font: path.join(
//             process.cwd(),
//             "public",
//             "fonts",
//             "Circular_Std_Book.ttf"
//           ),
//           margins: { top: 50, bottom: 50, left: 50, right: 50 },
//         });

//         const buffers: Buffer[] = [];
//         doc.on("data", (buffer) => buffers.push(buffer));
//         doc.on("end", () => {
//           const pdfData = Buffer.concat(buffers);
//           resolve(
//             new NextResponse(pdfData, {
//               headers: {
//                 "Content-Type": "application/pdf",
//                 "Content-Disposition": `attachment; filename=${fileName}`,
//               },
//             })
//           );
//         });

//         // Title
//         doc
//           .fontSize(24)
//           .text("Plant Analysis Report", { align: "center" })
//           .moveDown(1);

//         // Add image if provided
//         if (image) {
//           const imgBuffer = Buffer.from(image.split(",")[1], "base64");
//           doc
//             .image(imgBuffer, {
//               fit: [400, 300],
//               align: "center",
//             })
//             .moveDown(2);
//         }

//         // Process and format analysis text
//         const sections = analysis
//           .split("**")
//           .filter((section) => section.trim());
//         let currentSection = "";

//         sections.forEach((section) => {
//           const trimmedSection = section.trim();

//           if (trimmedSection.match(/^\d\./)) {
//             // Main section headers
//             currentSection = trimmedSection.split(":")[0].trim();
//             doc
//               .fontSize(16)
//               .fillColor("#2E7D32") // Dark green for headers
//               .text(currentSection)
//               .moveDown(0.5);

//             const content = trimmedSection.split(":")[1]?.trim();
//             if (content) {
//               doc
//                 .fontSize(12)
//                 .fillColor("#000000")
//                 .text(content, {
//                   lineGap: 5,
//                   indent: 20,
//                 })
//                 .moveDown(1);
//             }
//           } else if (trimmedSection.startsWith("*")) {
//             // Bullet points
//             doc
//               .fontSize(12)
//               .fillColor("#000000")
//               .text(trimmedSection.replace(/^\*/, "•"), {
//                 indent: 20,
//                 lineGap: 5,
//               })
//               .moveDown(0.5);
//           } else {
//             // Regular text
//             doc
//               .fontSize(12)
//               .fillColor("#000000")
//               .text(trimmedSection, {
//                 lineGap: 5,
//               })
//               .moveDown(0.5);
//           }
//         });

//         // Add disclaimer with styling
//         doc
//           .moveDown(2)
//           .fontSize(10)
//           .fillColor("#666666")
//           .text(
//             "Disclaimer: This report is generated automatically and should be verified by a professional.",
//             {
//               align: "center",
//               lineGap: 5,
//             }
//           );

//         doc.end();
//       } catch (error) {
//         reject(error);
//       }
//     });
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     return NextResponse.json(
//       { error: "Failed to generate PDF" },
//       { status: 500 }
//     );
//   }
// }

// function extractPlantName(analysis: string): string {
//   // Try to find the common name from the analysis
//   const commonNameMatch = analysis.match(/Common Name[:\s]+([^\n*]+)/);
//   if (commonNameMatch && commonNameMatch[1]) {
//     return commonNameMatch[1].trim();
//   }

//   // Fallback to scientific name if common name isn't found
//   const scientificNameMatch = analysis.match(/Scientific Name[:\s]+([^\n*]+)/);
//   if (scientificNameMatch && scientificNameMatch[1]) {
//     return scientificNameMatch[1].trim().replace(/[*]/g, "");
//   }

//   return "plant";
// }
import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { PlantPDFTemplate } from "@/components/PlantAnalysisPDF";
export async function POST(request: Request) {
  try {
    const { analysis, image } = await request.json();

    // Extract plant name for filename
    const nameMatch = analysis.match(/Common Name: ([^\n]+)/);
    const plantName = nameMatch ? nameMatch[1].trim() : "plant";
    const fileName = `${plantName
      .toLowerCase()
      .replace(/\s+/g, "-")}-analysis.pdf`;

    // Generate PDF
    const pdfBuffer = await renderToBuffer(
      <PlantPDFTemplate analysis={analysis} image={image} />
    );

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${fileName}`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
