import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../features/booksSlice';

const BookList = ({onHandleEdit}) => {
    const books = useSelector((state) => state.books.books);

    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }
    const handleEdit = (book) => {
      onHandleEdit(book)
    }
  return (
    <div>
        <h2>list of books</h2>
       {books && books.length > 0 ? (
         <ul>
         {books.map((book) => {
            return (
                <li key={book.id}>
                        {book.title} by {book.author} - $
                        {book.price} - {book.quantity} pcs
                        <button onClick={() => handleEdit(book)}>Edit Book</button>
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
               </li>
            )
         })}
     </ul>
       ) : (<p>No Book Exist</p>)}
    </div>
  )
}

export default BookList