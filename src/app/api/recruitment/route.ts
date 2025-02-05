import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * GET: Fetch all applicants
 */
export async function GET() {
  try {
    const applicants = await prisma.applicant.findMany({
      include: {
        techProfile: true,
        prProfile: true,
        videoProfile: true,
        contentProfile: true,
        designProfile: true,
        photographyProfile: true,
      },
    });
    return NextResponse.json({ success: true, applicants });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

/**
 * POST: Create a new applicant
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Create the applicant
    const newApplicant = await prisma.applicant.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        linkedIn: data.linkedIn,
        githubPortfolio: data.githubPortfolio,
        branchYear: data.branchYear,
        positions: data.positions, // This must be an array of ENUM Position[]
        otherClubs: data.otherClubs,
        weeklyCommitment: data.weeklyCommitment,
        motivation: data.motivation,
        gdgPerspective: data.gdgPerspective,
        eventIdeas: data.eventIdeas,
        contributions: data.contributions,
        additionalSkills: data.additionalSkills,
        comments: data.comments,

        // Optional: If a user ID is provided, link it
        user: data.userId ? { connect: { id: data.userId } } : undefined,

        // Role-Specific Profiles
        techProfile: data.techProfile ? { create: data.techProfile } : undefined,
        prProfile: data.prProfile ? { create: data.prProfile } : undefined,
        videoProfile: data.videoProfile ? { create: data.videoProfile } : undefined,
        contentProfile: data.contentProfile ? { create: data.contentProfile } : undefined,
        designProfile: data.designProfile ? { create: data.designProfile } : undefined,
        photographyProfile: data.photographyProfile ? { create: data.photographyProfile } : undefined,
      },
    });

    return NextResponse.json({ success: true, applicant: newApplicant }, { status: 201 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
