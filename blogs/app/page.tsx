import BlogCards from "@/components/blogCards";
import Navbar from "@/components/navbar";
import { PostsProvider } from '../context/postContext';
import SearchBar from "@/components/searchBar";

export default function Home() {
  return(
    <PostsProvider>
      <div className="flex flex-col items-center gap-5">
        <Navbar></Navbar>
        <SearchBar/>
        <BlogCards/>
      </div>
    </PostsProvider>
  );
}
