import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface RequestBody {
  fullName: string;
  email: string;
  phoneNumber: string;
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
      !data.phoneNumber ||
      !data.year ||
      !Array.isArray(data.domain)
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid request body. Required: fullName, email, phoneNumber, year, domain (array of strings).",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Phone number validation (allows international formats)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(data.phoneNumber)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid phone number format",
        },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const existingRecruitment = await prisma.recruitment.findFirst({
      where: {
        email: data.email,
      },
    });

    if (existingRecruitment) {
      return NextResponse.json(
        {
          success: false,
          message: "This email has already been registered for recruitment",
        },
        { status: 400 }
      );
    }

    // Create new recruitment entry
    const newRecruitment = await prisma.recruitment.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        year: data.year,
        domain: data.domain,
        suggestion: data.suggestion || "",
        gdgStand: data.gdgStand || "",
        userId: "temp-user-id", // You'll need to update this with actual user ID
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        data: newRecruitment,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);

    // Check for Prisma-specific errors
    if (error instanceof Error) {
      if (error.message.includes("Prisma")) {
        return NextResponse.json(
          {
            success: false,
            message: "Database error occurred",
            error:
              process.env.NODE_ENV === "development"
                ? error.message
                : undefined,
          },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
