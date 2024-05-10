"use client";
import Footer from "@/components/reusableComponents/Footer";
import Navbar from "@/components/reusableComponents/Navbar";
import AuthProvider from "@/context/AuthProvider";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface GlobalLayoutProps {
  children: React.ReactNode;
}


const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-800">
      <AuthProvider>
        <Navbar />
        <main className="bg-black">{children} </main>
        <Footer />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};

export default GlobalLayout;
