import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/app/lib/db";
import BlogModel from "../../models/BlogModel";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST() {
  console.log("hit get post", new Date().getSeconds());
  try {
    await dbConnect();
    const post = await BlogModel.create({ title: "post double render" });
    return new NextResponse("Posted");
  } catch (error) {
    console.log("error from route", error);
    return new NextResponse("Error");
  }
}