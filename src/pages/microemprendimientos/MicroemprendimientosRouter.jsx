import { Routes, Route } from 'react-router-dom';
import Microemprendimientos from '@/pages/microemprendimientos/Microemprendimientos';
import CategoryDetails from '@/pages/microemprendimientos/components/CategoryDetails';

export default function MicroemprendimientosRouter() {
  return (
    <Routes>
      <Route path='/' element={<Microemprendimientos />} />
      <Route path='/:categoryId' element={<CategoryDetails />} />
    </Routes>
  );
}
