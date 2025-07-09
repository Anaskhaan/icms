
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
import { Academic } from './pages/more/Academic';
import { Extracurricular } from './pages/more/Extracurricular';
import { DevelopmentPlans } from './pages/more/DevelopmentPlans';
import { Careers } from './pages/more/Careers';
import { HomeLearning } from './pages/more/HomeLearning';
import { Achievements } from './pages/more/Achievements';
import { CounselingDept } from './pages/more/CounselingDept';
import { Alumni } from './pages/more/Alumni';


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
        <Route path="/more/academic" element={<Academic />} />
        <Route path="/more/extracurricular" element={<Extracurricular />} />
        <Route path="/more/development-plans" element={<DevelopmentPlans />} />
        <Route path="/more/careers" element={<Careers />} />
        <Route path="/more/home-learning" element={<HomeLearning />} />
        <Route path="/more/achievements" element={<Achievements />} />
        <Route path="/more/counseling-dept" element={<CounselingDept />} />
        <Route path="/more/alumni" element={<Alumni />} />
        
        {/* Add more pages here */}
      </Route>
    </Routes>
    </>
  );
};
