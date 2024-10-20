import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Soins from '..//pages/Soins/Soins';
import Reservations from '../pages/Reservations/Reservations';
import Cadeaux from '../pages/Cadeaux/Cadeaux';
import MonSalon from '../pages/Salon/Salon';
import Contact from '../pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/soins" element={<Soins />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/cadeaux" element={<Cadeaux />} />
        <Route path="/mon-salon" element={<MonSalon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
