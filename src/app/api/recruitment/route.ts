import { NextResponse } from "next/server";

// Define the expected body type
interface RequestBody {
  fullName: string;
  email: string;
  phoneNumber: number;
  branch: string;
  year: string;
  domain: string[];
  suggestion: string;
  gdgStand: string;
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validate required fields
    if (
      !data.fullName ||
      !data.email ||
      typeof !data.phoneNumber == "number" ||
      !data.branch ||
      !data.year
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid request body. Required: fullName, email, phoneNumber, branch, year, domain (array of strings).",
        },
        { status: 400 }
      );
    }

    const filteredData: RequestBody = {
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      branch: data.branch,
      year: data.year,
      domain: data.domain,
      suggestion: data.suggestion,
      gdgStand: data.gdgStand,
    };

    return NextResponse.json(
      {
        success: true,
        message: "Data received successfully",
        data: filteredData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
