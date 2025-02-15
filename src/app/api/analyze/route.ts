// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// // Make sure you have GEMINI_API_KEY in your .env.local file
// const apiKey = process.env.GEMINI_API_KEY;
// if (!apiKey) {
//   throw new Error("GEMINI_API_KEY is not set in environment variables");
// }

// const genAI = new GoogleGenerativeAI(apiKey);

// export async function POST(request: Request) {
//   try {
//     const { image } = await request.json();

//     if (!image) {
//       return NextResponse.json({ error: "No image provided" }, { status: 400 });
//     }

//     // Convert base64 to bytes
//     const imageBytes = Buffer.from(image.split(",")[1], "base64");

//     // Initialize the model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//     const prompt = `Analyze this plant image and provide the following information:
//     1. Detailed identification (common name, scientific name, family, African names if available)
//     2. Description of the plant
//     3. Medicinal properties and use cases
//     4. Other vital information
//     5. Suggest 3 research topics related to this plant

//     Format the response in a structured way that can be easily parsed.`;

//     const result = await model.generateContent([
//       prompt,
//       {
//         inlineData: {
//           mimeType: "image/jpeg",
//           data: imageBytes,
//         },
//       },
//     ]);

//     const response = await result.response;
//     const text = response.text();

//     return NextResponse.json({ analysis: text });
//   } catch (error) {
//     console.error("Error analyzing plant:", error);
//     return NextResponse.json(
//       { error: "Failed to analyze plant image" },
//       { status: 500 }
//     );
//   }
// }import { GoogleGenerativeAI } from "@google/generative-ai"
import { formatAnalysisText } from "@/lib/utils";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}
// console.log(apiKey);

const genAI = new GoogleGenerativeAI(apiKey);

// export async function POST(request: Request) {
//   try {
//     const { image } = await request.json();

//     if (!image) {
//       return NextResponse.json({ error: "No image provided" }, { status: 400 });
//     }

//     // Convert base64 to bytes
//     const imageBytes = Buffer.from(image.split(",")[1], "base64");

//     // Initialize the model
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     // const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//     const prompt = `Analyze this plant image and provide the following information:
//     1. Detailed identification (common name, scientific name, family, African names if available)
//     2. Description of the plant
//     3. Medicinal properties and use cases
//     4. Other vital information
//     5. Suggest 3 research topics related to this plant

//     Format the response in a structured way that can be easily parsed.`;

//     const result = await model.generateContent([
//       prompt,
//       {
//         inlineData: {
//           mimeType: "image/jpeg",
//           data: imageBytes,
//         },
//       },
//     ]);

//     const response = await result.response;
//     const text = response.text();

//     return NextResponse.json({ analysis: text });
//   } catch (error) {
//     console.error("Error analyzing plant:", error);
//     return NextResponse.json(
//       { error: "Failed to analyze plant image" },
//       { status: 500 }
//     );
//   }
// }
// export async function POST(request: Request) {
//   try {
//     const { image } = await request.json();

//     if (!image) {
//       return NextResponse.json({ error: "No image provided" }, { status: 400 });
//     }

//     // Convert base64 to bytes
//     const imageBytes = Buffer.from(image.split(",")[1], "base64");

//     // Initialize the model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//     const prompt = `Analyze this plant image and provide the following information:
//     1. Detailed identification (common name, scientific name, family, African names if available)
//     2. Description of the plant
//     3. Medicinal properties and use cases
//     4. Other vital information
//     5. Suggest 3 research topics related to this plant

//     Format the response in a structured way that can be easily parsed.`;

//     // Correct format for the Gemini API
//     const result = await model.generateContent({
//       contents: [
//         {
//           parts: [
//             { text: prompt },
//             {
//               inline_data: {
//                 mime_type: "image/jpeg",
//                 data: image.split(",")[1],
//               },
//             },
//           ],
//         },
//       ],
//     });

//     const response = await result.response;
//     const text = response.text();

//     return NextResponse.json({ analysis: text });
//   } catch (error) {
//     console.error("Error analyzing plant:", error);
//     return NextResponse.json(
//       { error: "Failed to analyze plant image" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Please analyze this plant image and format the response in clean markdown structure:

# Plant Analysis Report

## 1. Identification Details
- Common Name: [provide name]
- Scientific Name: [provide name]
- Family: [provide family]
- African Names: [list known names by region]

## 2. Plant Description
- Height/Size: [specify]
- Physical Characteristics: [describe leaves, flowers, etc.]
- Growth Pattern: [describe how it grows]
- Notable Features: [any distinctive characteristics]

## 3. Medicinal Properties
- Traditional Uses: [list uses]
- Active Compounds: [if known]
- Health Benefits: [list verified benefits]
- Usage Precautions: [list any warnings]

## 4. Additional Information
- Growing Requirements: [soil, water, climate]
- Economic Importance: [describe value]
- Cultural Significance: [describe importance]
- Conservation Status: [if applicable]

## 5. Research Topics
1. [First research topic with brief explanation]
2. [Second research topic with brief explanation]
3. [Third research topic with brief explanation]

Format this exactly as shown, maintaining markdown structure.`;

    // const result = await model.generateContent({
    //   contents: [
    //     {
    //       parts: [
    //         { text: prompt },
    //         {
    //           inline_data: {
    //             mime_type: "image/jpeg",
    //             data: image.split(",")[1],
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // });
    // Updated API call format
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: image.split(",")[1],
              },
            },
          ],
        },
      ],
    });
    const response = await result.response;
    const text = response.text();
    const formattedText = formatAnalysisText(text);

    return NextResponse.json({ analysis: formattedText });
  } catch (error) {
    console.error("Error analyzing plant:", error);
    return NextResponse.json(
      { error: "Failed to analyze plant image" },
      { status: 500 }
    );
  }
}
