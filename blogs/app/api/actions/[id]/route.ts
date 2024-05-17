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
	const { title, content } = await request.json();
	await dbConnect();
	await BlogModel.findByIdAndUpdate(id, { title, content });
	return NextResponse.json({ message: "BlogModel updated" }, { status: 200 });
  }

  export async function GET(request: NextRequest, { params }: Params) {
	const { id } = params;
	const search = request.nextUrl.searchParams.get("search");
  
	await dbConnect();
  
	if (search) {
	  const regex = new RegExp(search, "i"); // i for case insensitive
	  const blogs = await BlogModel.find({
		$or: [{ title: regex }, { content: regex }],
	  });
	  return NextResponse.json({ blogs }, { status: 200 });
	} else {
	  const blog = await BlogModel.findOne({ _id: id });
	  return NextResponse.json({ blog }, { status: 200 });
	}
  }