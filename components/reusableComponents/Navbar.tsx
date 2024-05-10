"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useGlobalAuth } from "@/context/AuthProvider";
import  SideBar from './SideBar'
const Navbar: React.FC = () => {
  const { user, logoutUser, isAuthenticated } = useGlobalAuth();
  return (
    <nav className="bg-gray-900 p-4 sticky top-0 left-0 right-0 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">📙Books</div>

        <div className=" space-x-4 hidden lg:flex ">
          {isAuthenticated ? (
            <ul className="flex space-x-4 items-center">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
              >
                <Link className="text-xl" href={"/"}>
                  Home
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
              >
                <Link className="text-xl" href={"/user"}>
                  user
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
              >
                <Link className="text-xl" href={"/book"}>
                  Book
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
              >
                <Link className="text-xl" href={"/createBook"}>
                  Create Book
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
              >
                <button
                  type="button"
                  className="bg-red-700 text-white px-5 text-xl rounded-sm py-1"
                  onClick={() => logoutUser()}
                >
                  Logout
                </button>
              </motion.li>
            </ul>
          ) : (
            <ul className="flex space-x-4 items-center">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
              >
                <Link className="text-xl" href={"/login"}>
                  Login
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
              >
                <Link className="text-xl" href={"/register"}>
                  Register
                </Link>
              </motion.li>
            </ul>
          )}
        </div>
        <div className="lg:hidden">
          <SideBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
