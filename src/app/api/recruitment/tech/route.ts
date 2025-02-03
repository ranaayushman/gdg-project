import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const teachData = await req.json();

    // if (teachData) {
    //   console.log(teachData);
    //   return NextResponse.json(
    //     {
    //       message: "Tech Member Created Successfully",
    //       data: teachData,
    //     },
    //     { status: 200 }
    //   );
    // }

    return NextResponse.json(
      {
        success: true,
        message: "Tech Member Created Successfully",
        data: teachData,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
