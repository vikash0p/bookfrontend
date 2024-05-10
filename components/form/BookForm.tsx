'use client'
import { useGlobalAuth } from "@/context/AuthProvider";
import axios from "axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {  useFormStatus } from "react-dom";
import SubmitButtton from "../reusableComponents/SubmitButtton";
import { ToastError, ToastSuccess } from "@/utils/React-Toastify";
import { useRouter } from "next/navigation";

const BookForm: React.FC = () => {
  const [pending, setPending] = useState(false);
  const router=useRouter();

  const{user}=useGlobalAuth();
  console.log("🚀 ~ file: BookForm.tsx:8 ~ user:", user?.user._id);

  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);
  console.log("🚀 ~ file: BookForm.tsx:14 ~ file:", file);

  const handleCoverImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverImage(e.target.files[0]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  setPending(true);
  e.preventDefault();
  if (!coverImage || !file) {
    console.error("Cover image or file is missing");
    return;
  }
  const formData = new FormData();
  formData.append('title', title);
  // formData.append("author", user?.user?._id || "");
  formData.append('genre', genre);
  formData.append('coverImage', coverImage);
  formData.append('file', file);

  // Ensure that 'file' field is set in FormData before sending the request
  if (!formData.get('file')) {
    console.error("File is missing in FormData");
    return;
  }

  try {
    const res = await axios.post(

        "https://bookbackend-vikashs-projects-f1acf06b.vercel.app/api/books/get",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const data = await res.data;

    if(data.success===true){
      ToastSuccess(data.message);
      router.refresh();
      setTitle(" ");
      setGenre(" ");
      setCoverImage(null);
      setFile(null);


    }
    console.log("🚀 ~ file: BookForm.tsx:39 ~ data:", data);
  } catch (error:any) {
    console.log("🚀 ~ file: BookForm.tsx:41 ~ error:", error);
    ToastError(error.response.data.message);



  }finally{
 setPending(false);
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded border border-violet-800 "
    >
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-violet-800 rounded-md bg-gray-900 text-white"
          placeholder="title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="genre" className="block mb-2">
          Genre:
        </label>
        <input
          type="text"
          name="genre"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full px-3 py-2 border border-violet-800 bg-gray-900 text-white rounded-md"
          placeholder="genre"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="coverImage" className="block mb-2">
          Cover Image:
        </label>
        <input
          type="file"
          name="coverImage"
          id="coverImage"
          onChange={handleCoverImageChange}
          className="w-full px-3 py-2 border border-violet-800 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="file" className="block mb-2">
          File:
        </label>
        <input
          type="file"
          name="file"
          id="file"
          onChange={handleFileChange}
          className="w-full px-3 py-2 border border-violet-800 rounded-md"
        />
      </div>
      <button
        disabled={pending}
        type="submit"
        className={`px-6 py-2 bg-violet-500 text-white rounded-md hover:bg-violet-600 ${
          pending ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {pending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default BookForm;
