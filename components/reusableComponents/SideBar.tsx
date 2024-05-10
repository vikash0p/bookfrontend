'use client'
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGlobalAuth } from "@/context/AuthProvider";
import { motion } from "framer-motion";
import Link from "next/link";
export default function SideBar() {
    const { user, logoutUser, isAuthenticated } = useGlobalAuth();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"lg"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div>
          <SheetHeader>
            <SheetTitle className="text-2xl">Book</SheetTitle>
            <SheetClose />
          </SheetHeader>
          <div className=" ">
            {isAuthenticated ? (
              <ul className="flex flex-col gap-3  ">
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
              <ul className="flex flex-col gap-y-4">
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

        </div>
      </SheetContent>
    </Sheet>
  );
}
