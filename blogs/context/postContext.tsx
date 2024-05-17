"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import axios from 'axios';

interface Post {
  _id: string;
  title: string;
  content: string;
  __v: number;
}

interface NewPost {
  title: string;
  content: string;
}

interface PostsContextType {
  posts: Post[];
  addPost: (post: NewPost) => void;
  deletePost: (id: string) => void;
  editPost: (id: string, post: NewPost) => void;
  fetchPostById: (id: string) => Promise<Post | undefined>;
  fetchPosts: () => void;
  searchPosts: (query: string) => void;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/actions', {
        headers: { 'Cache-Control': 'no-store' }
      });
      if (res.status === 200) {
        setPosts(res.data.topics);
      } else {
        throw new Error("Failed to fetch topics");
      }
    } catch (error) {
      console.error("Error loading topics: ", error);
    }
  }, []);

  const fetchPostById = async (id: string): Promise<Post | undefined> => {
    try {
      const res = await axios.get(`http://localhost:3000/api/actions?id=${id}`);
      if (res.status === 200) {
        return res.data.blog;
      } else {
        throw new Error("Failed to fetch post");
      }
    } catch (error) {
      console.error("Error fetching post: ", error);
    }
  };

  const addPost = async (post: NewPost) => {
    try {
      const res = await axios.post('http://localhost:3000/api/actions', post, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.status !== 201) {
        throw new Error("Failed to create post");
      }
      fetchPosts();
    } catch (error) {
      console.error("Error creating post: ", error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/actions?id=${id}`);
      if (res.status !== 200) {
        throw new Error("Failed to delete post");
      }
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  const editPost = async (id: string, post: NewPost) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/actions/${id}`, post, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (res.status !== 200) {
        throw new Error("Failed to update post");
      }
      fetchPosts();
    } catch (error) {
      console.error("Error updating post: ", error);
    }
  };

  const searchPosts = async (query: string) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/actions/[id]?search=${query}`);
      if (res.status === 200) {
        setPosts(res.data.blogs);
      } else {
        throw new Error("Failed to search posts");
      }
    } catch (error) {
      console.error("Error searching posts: ", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostsContext.Provider value={{ posts, addPost, deletePost, editPost, fetchPostById, fetchPosts, searchPosts  }}>
      {children}
    </PostsContext.Provider>
  );
};
