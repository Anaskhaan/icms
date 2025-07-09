
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from "./components/AppLayout";
import {Home} from './pages/Home';
import {About} from './pages/About';
import "./index.css"
import { Curriculum } from './pages/Curriculum';
import { Contact } from './pages/Contact';
import { Admission } from './pages/Admission';
import { Apply } from './pages/Apply';
import { ScrollToTop } from './components/ScrollToTop';

export const App = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        {/* Add more pages here */}
      </Route>
    </Routes>
    </>
  );
};
