import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import { News } from './pages/News';

function App() {
  const [category, setCategory] = useState('general')

  return (
    <>
      <Navbar activeCategory={category} onCategoryChange={setCategory} />
      <h1 className="text-center">Welcome to News International</h1>
      <News category={category} />
    </>
  );
}

export default App;
