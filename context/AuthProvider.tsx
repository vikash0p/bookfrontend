"use client";
import { ToastError, ToastSuccess } from "@/utils/React-Toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

axios.defaults.withCredentials = true;

interface User {
  message: string;
  success: boolean;
  user: {
    _id: string;
    name: string;
    email: string;
  };
}

interface AuthProviderProps {
  children: React.ReactNode;
}
interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  getUserData: () => void;
  logoutUser: () => void;
}

const AuthContext = createContext<null | AuthContextProps>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<null | User>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  const getUserData = async () => {
    try {
      const res = await axios.get<User>(
        "http://localhost:5000/api/users/user",
        {
          withCredentials: true,
        }
      );
      const data = res.data;
      console.log("🚀 ~ file: AuthProvider.tsx:44 ~ data:", res);

      if (res.status === 200 && res.statusText === "OK") {
        setUser(data);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error: any) {
      console.error("Error fetching user data:", error.message);
    }
  };

  const logoutUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users/logout");
      const data = res.data;
      if (res.status === 200 && data.success) {
        // alert(data.message);
        ToastSuccess(data.message);
        setUser(null);
        setIsAuthenticated(false);

        router.refresh();
        router.push("/login");
      }
    } catch (error:any) {
      console.log("🚀 ~ file: AuthProvider.tsx:70 ~ error:", error);
      ToastError(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, getUserData, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useGlobalAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
