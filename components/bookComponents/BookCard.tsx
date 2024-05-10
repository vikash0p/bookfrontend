'use client'
import Image from 'next/image';
import React from 'react'


interface book {
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
const BookCard:React.FC<{book:book}> = ({book}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 border text-white border-violet-800">
      <Image
        className="w-full h-80 object-cover "
        src={book.coverImage}
        alt={book.title}
        width={300}
        height={250}
      />
      <div className="px-6 py-4">
        <div className="font-bold  mb-2">{book.title}</div>
        <button
          type="button"
          onClick={() => window.open(book.file, "_blank")}
          className="bg-violet-800 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
        >
          Read Book
        </button>
      </div>
    </div>
  );
}

export default BookCard
