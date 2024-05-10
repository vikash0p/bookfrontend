import axios from "axios";
import { ToastError, ToastSuccess } from "./React-Toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
axios.defaults.withCredentials = true;


interface UserResponse {
  message: string;
  success: boolean;
  user: {
    name: string;
    email: string;
    password: string;
    _id: string;
    __v: number;
  };
}

interface User {
  message: string;
  success: boolean;
  user: {
    _id: string;
    name: string;
    email: string;
  };
}
interface BookResponse {
  message: string;
  bookLength: number;
  success:boolean;
  book:Book[]
}

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  coverImage: string;
  file: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const baseUrl: string ="https://bookbackend-vikashs-projects-f1acf06b.vercel.app/api/users"; ;
export const LoginData = async (email: string, password: string, router:any) => {

  try {
    const res = await axios.post(`${baseUrl}/login`, { email, password });
    const data = await res.data;

    console.log("🚀 ~ file: FetchData.tsx:8 ~ data:", data);
    if (data.success === true) {
      ToastSuccess(data.message);
      router.refresh();
      router.push("/user");
    }
    return data;
  } catch (error: any) {
    console.table("🚀 ~ file: FetchData.tsx:18 ~ error:", error.response.data.message);
    ToastError(error.response.data.message);
  }
};

export const RegisterApi = async (name:string,email:string, password:string,router:AppRouterInstance) => {
  try {
    const res = await axios.post(`${baseUrl}/register`, { name, email, password });
    const data: UserResponse = await res.data;

    if (data.success === true) {
      ToastSuccess(data.message);
      router.refresh();
      router.push("/login");
    }
    return data;

  } catch (error:any) {
  console.log("🚀 ~ file: FetchData.tsx:54 ~ any:", error);
      ToastError(error.response.data.message);


  }

}

export const getAllBooks = async () => {
  try {

    const res = await axios.get(

        "https://bookbackend-vikashs-projects-f1acf06b.vercel.app/api/books/getBook",
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data :BookResponse = await res.data;
    return data.book
    console.log("🚀 ~ file: FetchData.tsx:93 ~ data:", data);
  } catch (error) {
  console.log("🚀 ~ file: FetchData.tsx:95 ~ error:", error);

  }

}

