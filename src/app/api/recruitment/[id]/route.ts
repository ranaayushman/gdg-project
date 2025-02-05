import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * GET: Fetch an applicant by ID
 */
export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { id: params.id },
      include: {
        techProfile: true,
        prProfile: true,
        videoProfile: true,
        contentProfile: true,
        designProfile: true,
        photographyProfile: true,
      },
    });

    if (!applicant) {
      return NextResponse.json({ success: false, message: "Applicant not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, applicant });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
