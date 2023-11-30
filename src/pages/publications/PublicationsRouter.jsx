import { Routes, Route } from 'react-router-dom';
import Publications from '@/pages/publications/Publications';

export default function PublicationsRouter() {
  return (
    <Routes>
      <Route path='/' element={<Publications />} />
      {/* <Route path='/:categoryId' element={<CategoryDetails />} /> */}
    </Routes>
  );
}
