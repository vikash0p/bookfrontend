import BookCard from "@/components/bookComponents/BookCard";
import { getAllBooks } from "@/utils/FetchData";

const BookContent = async () => {
  const books = await getAllBooks();
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-14  my-8">
      {books?.map((book) => {
        return <BookCard key={book._id} book={book} />;
      })}
    </div>
  );
};

export default BookContent;

  
export const BookContentOne = async () => {
  const books = await getAllBooks();
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-1 md:px-5 lg:px-14  my-8">
      {books?.slice(0,10).reverse().map((book) => {
        return <BookCard key={book._id} book={book} />;
      })}
    </div>
  );
};
