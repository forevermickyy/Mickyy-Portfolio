import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import Blog from './pages/Blog';

const themes = {
  light: "bg-slate-50 text-slate-900",
  dark: "bg-black text-purple-100",
  blue: "bg-blue-900 text-blue-50",
  pink: "bg-rose-900 text-rose-50",
  midnight: "bg-slate-950 text-slate-50",
  eyeSaving: "bg-[#fdf6e3] text-[#586e75]"
};

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Injecting the theme classes into the body for a full-screen "Liquid" transition
    const bodyClass = document.body.classList;
    Object.values(themes).forEach(t => {
      t.split(' ').forEach(cls => bodyClass.remove(cls));
    });
    themes[theme].split(' ').forEach(cls => bodyClass.add(cls));
    document.body.style.transition = "all 1000ms ease-in-out";
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar setTheme={setTheme} currentTheme={theme} />
        <main className="grow pt-24 pb-12 px-10 max-w-4xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

// Ensure this line is at the very bottom and by itself
export default App;