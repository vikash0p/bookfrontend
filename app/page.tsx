import Achivements from "@/components/HomeComponents/Achivements";
import Author from "@/components/HomeComponents/Author";
import BookContent, {
  BookContentOne,
} from "@/components/bookComponents/BookContent";
import BookSwiper from "@/components/bookComponents/BookSwiper";
import LoadingSkeleton from "@/components/reusableComponents/LoadingSkeleton";
import React, { Suspense } from "react";

const Home = () => {
  return (
    <div className=" px-1 md:px-4 lg:px-12">
      <BookSwiper />
      <Achivements />
      <h2 className="text-5xl text-white font-serif font-semibold ps-0 lg:ps-14">Popular Book</h2>
      <Suspense fallback={<LoadingSkeleton />}>
        <BookContentOne />
      </Suspense>
      <Author />
    </div>
  );
};

export default Home;
