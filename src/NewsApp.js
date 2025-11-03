/* The code snippet you provided is from a React application's main component file `App.js`. Let's
break down the imports: */
import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import { News } from './pages/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


function App() {
  const [category, setCategory] = useState('general');
  const [progress, setProgress] = useState(0);
  const apiKey= process.env.REACT_APP_NEWS_API_KEY;
  // setProgress(100);
  return (
    <>
    <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
      />
      <Navbar activeCategory={category} onCategoryChange={setCategory} />
      <h1 className="text-center">News Anish- {category}</h1>
      <Routes>
        <Route path="/" element={<News setCategory={setCategory} setProgress={setProgress} apiKey={apiKey} key="general" category="general" country="us" pageSize={20} />} />
        <Route path="/general" element={<News setCategory={setCategory} setProgress={setProgress} apiKey={apiKey} key="general" category="general" country="us" pageSize={20} />} />
        <Route path="/business" element={<News setCategory={setCategory} setProgress={setProgress} apiKey={apiKey} key="business" category="business" country="us" pageSize={20} />} />
        <Route path="/entertainment" element={<News setCategory={setCategory} setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" country="us" pageSize={20} />} />
        <Route path="/health" element={<News setCategory={setCategory} setProgress={setProgress} apiKey={apiKey} key="health" category="health" country="us" pageSize={20} />} />
        <Route path="/science" element={<News setCategory={setCategory} setProgress={setProgress} apiKey={apiKey} key="science" category="science" country="us" pageSize={20} />} />
        <Route path="/sports" element={<News setCategory={setCategory} setProgress={setProgress} apiKey={apiKey} key="sports" category="sports" country="us" pageSize={20} />} />
        <Route path="/technology" element={<News setCategory={setCategory} setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" country="us" pageSize={20} />} />
      </Routes>


    </>
  );
}

export default App;
