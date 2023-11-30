import { Routes, Route } from 'react-router-dom';
import Microemprendimientos from '@/pages/microemprendimientos/Microemprendimientos';
import CategoryDetails from '@/pages/microemprendimientos/components/CategoryDetails';
import { USER_ROUTES } from '@/constants/routes';

export default function MicroemprendimientosRouter() {
  return (
    <Routes>
      <Route path={USER_ROUTES.MICROENTREPRENEURSHIPS.ROOT} element={<Microemprendimientos />} />
      <Route path={USER_ROUTES.MICROENTREPRENEURSHIPS.BY_CATEGORY} element={<CategoryDetails />} />
    </Routes>
  );
}
