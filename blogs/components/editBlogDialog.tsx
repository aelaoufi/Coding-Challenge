import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {Dialog, DialogTrigger, DialogTitle, DialogHeader, DialogFooter, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { usePosts } from '../context/postContext';
import TextEditor from "./textEditor"; // Adjust the import path based on your project structure

interface EditPostDialogProps {
  id: string;
}

function EditPostDialog({ id }: EditPostDialogProps) {
  const { editPost, fetchPostById } = usePosts();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const post = await fetchPostById(id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    };

    fetchPost();
  }, [id, fetchPostById]);

  const handleEdit = async () => {
    if (title.trim() === '' || content.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    editPost(id, { title, content });
	setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="absolute m-[22px] w-10 h-10 right-0 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
          <EditIcon className="absolute right-2 top-2" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Edit Blog Post</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="blogTitle" className="text-left">
              Blog Title
            </Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="blogTitle"
              className="col-span-3"
            />
          </div>
          <div className="flex-grow grid grid-cols-1 gap-4">
            <Label htmlFor="blogContent" className="text-left">
              Blog Content
            </Label>
            <TextEditor
              _content={content}
              onChange={handleContentChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleEdit}>Edit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
      <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
        <g transform="scale(8,8)">
          <path d="M23.90625,3.96875c-1.04687,0 -2.09375,0.40625 -2.90625,1.21875l-15.8125,15.8125l-0.0625,0.3125l-1.09375,5.5l-0.3125,1.46875l1.46875,-0.3125l5.5,-1.09375l0.3125,-0.0625l15.8125,-15.8125c1.625,-1.625 1.625,-4.1875 0,-5.8125c-0.8125,-0.8125 -1.85937,-1.21875 -2.90625,-1.21875zM23.90625,5.875c0.50391,0 1.01172,0.23047 1.5,0.71875c0.97266,0.97266 0.97266,2.02734 0,3l-0.71875,0.6875l-2.96875,-2.96875l0.6875,-0.71875c0.48828,-0.48828 0.99609,-0.71875 1.5,-0.71875zM20.3125,8.71875l2.96875,2.96875l-12.09375,12.09375c-0.65625,-1.28125 -1.6875,-2.3125 -2.96875,-2.96875zM6.9375,22.4375c1.19922,0.48438 2.14063,1.42578 2.625,2.625l-3.28125,0.65625z"></path>
        </g>
      </g>
    </svg>
  );
}

export default EditPostDialog;
