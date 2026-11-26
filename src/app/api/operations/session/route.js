import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    {
      message: "Demo staff session created",
    },
    {
      status: 201,
    }
  );

  response.cookies.set(
    "staff_session",
    "demo-authenticated",
    {
      httpOnly: true,
      sameSite: "lax",
      secure:
        process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 30,
    }
  );

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({
    message: "Demo staff session removed",
  });

  response.cookies.delete("staff_session");

  return response;
}