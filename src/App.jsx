import React, { useState } from 'react'
import BookList from './components/BookList'
import BookForm from './components/BookForm'

const App = () => {
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleEdit = (book) => {
    setBookToEdit(book)
  }
  const handleCancleEdit = (book) => {
    setBookToEdit(null)
  }
  return (
    <div className='App'>
      <BookForm bookToEdit={bookToEdit} onCancel={handleCancleEdit} />
      <BookList onHandleEdit={handleEdit} />
    </div>
  )
}

export default App