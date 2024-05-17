import BlogCards from "@/components/blogCards";
import MyDialog from "@/components/dialog";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return(
    <div className="flex flex-col items-center gap-5">
      <Navbar></Navbar>
      <BlogCards/>
      
    </div>
  );
}
