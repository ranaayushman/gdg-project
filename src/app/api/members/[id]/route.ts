//Here id is required to get the user and update it
//The updated data would be stored in the member table
//The promotions will be done by the admin only and members can update their info from here

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const member = await prisma.member.findUnique({
      where: {
        id: id,
      },
    });

    if (!member) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    return NextResponse.json(member);
  } catch (error) {
    console.error("Error fetching member:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();

    const updatedMember = await prisma.member.update({
      where: {
        id: id,
      },
      data: body,
    });

    return NextResponse.json(updatedMember);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    console.error("Error updating member:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    await prisma.member.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { message: "Member deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    console.error("Error deleting member:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
