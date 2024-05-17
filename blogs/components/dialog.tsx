"use client";
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent, Dialog, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SVGProps } from "react"
import Link from "next/link"
import TextEditor from "./textEditor"
import { useEffect, useState } from "react"

export default function MyDialog() {

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-gray-900 text-gray-50 shadow transition-all duration-300 ease-in-out group-hover:bg-gray-800 group-hover:px-6 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
          href="#"
        >
          <PlusIcon/>
          <span>New Post</span>
        </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>New Blog Post</DialogTitle>
          <DialogDescription>
            Enter the title and content for your new blog post.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="blotTitle" className="text-left">
              Blog Title
            </Label>
            <Input
            onChange={(e) => setTitle(e.target.value)}
              id="blogTitle"
              className="col-span-3"
            />
          </div>
          <div className="flex-grow grid grid-cols-1 gap-4">
            <Label htmlFor="blogContent" className="text-left">
              Blog Content
            </Label>
            <TextEditor/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function PlusIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}