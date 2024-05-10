import BookContent from "@/components/bookComponents/BookContent";
import BookGetData from "@/components/bookComponents/BookGetData";
import LoadingSkeleton from "@/components/reusableComponents/LoadingSkeleton";
import React, { Suspense } from "react";
const Book = () => {
  return (
    <>
      {/* <Suspense fallback={<LoadingSkeleton />}>
        <BookContent />
      </Suspense> */}

      <BookGetData />
    </>
  );
};

export default Book;
