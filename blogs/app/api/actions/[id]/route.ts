import { dbConnect, disconnect } from "@/app/lib/db";
import BlogModel from "@/app/models/BlogModel";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

interface Params {
	params: {
	  id: string;
	};
  }

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await dbConnect();
  await BlogModel.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "BlogModel updated" }, { status: 200 });
}

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = params;
  await dbConnect();
  const blog = await BlogModel.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}