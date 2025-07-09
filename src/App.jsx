
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from "./components/AppLayout";
import {Home} from './pages/Home';
import {About} from './pages/About';
import "./index.css"

export const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more pages here */}
      </Route>
    </Routes>
  );
};
