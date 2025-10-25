import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import { News } from './pages/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [category, setCategory] = useState('general')

  return (
    <>
      <Navbar activeCategory={category} onCategoryChange={setCategory} />
      <h1 className="text-center">Welcome to News International</h1>
        <News key="general" category="general" country="us" pageSize="12" />
      
    <BrowserRouter>
      <Routes>
        <Route path="/general" element={<News key="general" category="general" country="us" pageSize="12" />} />
        <Route path="/business" element={<News key="business" category="business" country="us" pageSize="12" />} />
        <Route path="/entertainment" element={<News key="entertainment" category="entertainment" country="us" pageSize="12" />} />
        <Route path="/health" element={<News key="health" category="health" country="us" pageSize="12" />} />
        <Route path="/science" element={<News key="science" category="science" country="us" pageSize="12" />} />
        <Route path="/sports" element={<News key="sports" category="sports" country="us" pageSize="12" />} />
        <Route path="/technology" element={<News key="technology" category="technology" country="us" pageSize="12" />} />
      </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
