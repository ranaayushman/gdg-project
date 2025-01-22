import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Fetch all users (GET handler)
export async function GET() {
  try {
    // Fetch all users
    const users = await prisma.user.findMany();

    // If no users are found, respond with an empty array
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);

    // Handle any server errors
    return NextResponse.json(
      { message: "Error fetching users", error },
      { status: 500 }
    );
  }
}

// Handle POST requests to create or log data
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    console.log("Received Data:", data);

    // Respond with a success message
    return NextResponse.json(
      { message: "Data received successfully", data },
      { status: 200 }
    );
  } catch (error) {
    // Error handling
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Invalid request", details: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Unexpected error occurred" },
      { status: 500 }
    );
  }
}
