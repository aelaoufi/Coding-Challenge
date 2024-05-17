import { dbConnect } from "@/app/lib/db";
import BlogModel from "@/app/models/BlogModel";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { title, content }: { title: string; content: string } = await request.json();
    await dbConnect();
    await BlogModel.create({ title, content });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error creating topic" }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  const topics = await BlogModel.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  try {
    await dbConnect();
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting topic" }, { status: 500 });
  }
}