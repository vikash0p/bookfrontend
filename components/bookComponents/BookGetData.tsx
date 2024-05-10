'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
function BookGetData() {
    const [items, setItems] = useState([]);
    console.log("🚀 ~ file: BookGetData.tsx:7 ~ items:", items);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
     const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
          try {
              const response = await axios.get(
                `https://bookbackend-ecru.vercel.app/api/books/getBook?page=${page}&limit=${limit}`
              );
            setItems(response.data.book);
             if (response.data) {
               setTotalPages(page + 1);
             } else {
               setTotalPages(page);
             }
            console.log("🚀 ~ file: BookGetData.tsx:14 ~ response:", response.data.book);
          } catch (error:any) {
          console.log("🚀 ~ file: BookGetData.tsx:19 ~ error:", error.message);

          }
        };
        fetchData();
    }, [page, limit]);
const goToPage = (pageNumber:any) => {
  setPage(pageNumber);
};
    return (
     <>
     <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 md:px-5 lg:px-14  my-8">
      {items?.slice(0,10).reverse().map((book) => {
        return <BookCard key={book} book={book} />;
      })}
    </div>
    {/* <div className='flex flex-row justify-center items-center gap-4 py-5'>
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className='text-white bg-violet-600 px-8 py-2 rounded' >Previous</button>
        <button onClick={() => setPage(page + 1)} className='text-white bg-violet-600 px-8 py-2 rounded' >Next</button>
    </div> */}
    <div className='flex flex-row gap-4 justify-center items-center py-4 flex-wrap'>
                <button disabled={page === 1} onClick={() => goToPage(page - 1)} className='text-white bg-violet-600 px-8 py-2 rounded'>Previous</button>
                {/* {page > 1 && <button onClick={() => goToPage(1)} className='text-white bg-violet-600 px-8 py-2 rounded' >1</button>} */}
                {page > 2 && <button onClick={() => goToPage(page - 2)} className='text-white bg-violet-600 px-8 py-2 rounded'>{page - 2}</button>}
                {page > 1 && <button onClick={() => goToPage(page - 1)} className='text-white bg-violet-600 px-8 py-2 rounded'>{page - 1}</button>}
                <button disabled className='text-white bg-violet-600 px-8 py-2 rounded'>{page}</button>
                {totalPages > page && <button onClick={() => goToPage(page + 1)} className='text-white bg-violet-600 px-8 py-2 rounded'>{page + 1}</button>}
                {totalPages > page + 1 && <button onClick={() => goToPage(page + 2)}className='text-white bg-violet-600 px-8 py-2 rounded'>{page + 2}</button>}
                <button disabled={page === totalPages} onClick={() => goToPage(page + 1)} className='text-white bg-violet-600 px-8 py-2 rounded'>Next</button>
            </div>
     </>
    );
}

export default BookGetData;
