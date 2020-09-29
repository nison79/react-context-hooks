import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeProviderContext from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeProviderContext>
      <Navbar />
      <BookList />
      </ThemeProviderContext>
    </div>
  );
}

export default App;
