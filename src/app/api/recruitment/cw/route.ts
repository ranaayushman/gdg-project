import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Get form data from request body
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.rollNo) {
      return NextResponse.json(
        { error: "Name and Roll Number are required" },
        { status: 400 }
      );
    }

    // Process the data (e.g., save to database)
    // Example with Prisma:
    // const newRecruit = await prisma.recruit.create({ data });

    // For now, we'll just log and return the data
    console.log("Received form data:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
