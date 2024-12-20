import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { userId, newRole } = body;

    // Validate input
    if (!userId || !newRole) {
      return NextResponse.json(
        {
          message: "userId and newRole are required",
          error: "Bad request",
        },
        { status: 400 }
      );
    }

    // Fetch the user data
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
          error: "Not Found",
        },
        { status: 404 }
      );
    }

    // Transfer user data to the Member table
    const memberData = {
      name: user.name ?? "",
      email: user.email ?? "",
      role: newRole,
      department: "", // You might want to specify or fetch this value
      joinDate: new Date(),
    };

    const member = await prisma.member.create({
      data: memberData,
    });

    // Optionally: Update the user's role in the User table
    // await prisma.user.update({
    //   where: { id: userId },
    //   data: { role: newRole },
    // });

    return NextResponse.json(
      {
        message:
          "User role updated and data transferred to Member table successfully",
        data: member,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user role and transferring data:", error);

    return NextResponse.json(
      {
        message: "Error updating user role and transferring data",
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
