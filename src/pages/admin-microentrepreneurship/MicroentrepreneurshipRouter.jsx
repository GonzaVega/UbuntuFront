import { Route, Routes } from 'react-router-dom';
import EditMicroentrepreneurship from '@/pages/admin-microentrepreneurship/pages/edit/EditMicroentrepreneurship';
import LoadMicroentrepreneurship from '@/pages/admin-microentrepreneurship/pages/load/LoadMicroentrepreneurship';
import Microentrepreneurship from '@/pages/admin-microentrepreneurship/pages/root/Microentrepreneurship';
import MicroentrepreneurshipDetail from '@/pages/admin-microentrepreneurship/pages/detail/MicroentrepreneurshipDetail';

export default function MicroentrepreneurshipRouter() {
  return (
    <Routes>
      <Route path='/' element={<Microentrepreneurship />} />
      <Route path='/:id' element={<MicroentrepreneurshipDetail />} />
      <Route path='/load' element={<LoadMicroentrepreneurship />} />
      <Route path='/edit' element={<EditMicroentrepreneurship />} />
    </Routes>
  );
}
