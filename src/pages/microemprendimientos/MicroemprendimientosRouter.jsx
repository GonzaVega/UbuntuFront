import { Routes, Route } from 'react-router-dom';
import Microemprendimientos from '@/pages/microemprendimientos/Microemprendimientos';
import CategoryDetails from '@/pages/microemprendimientos/components/categories/CategoryDetails';
import { USER_ROUTES } from '@/constants/routes';
import EmprendimientoContact from '@/pages/microemprendimientos/components/emprendimientos/EmprendimientoContact';

export default function MicroemprendimientosRouter() {
  return (
    <Routes>
      <Route path={USER_ROUTES.MICROENTREPRENEURSHIPS.ROOT} element={<Microemprendimientos />} />
      <Route path={USER_ROUTES.MICROENTREPRENEURSHIPS.BY_CATEGORY} element={<CategoryDetails />} />
      <Route
        path={USER_ROUTES.MICROENTREPRENEURSHIPS.CONTACT}
        element={<EmprendimientoContact />}
      />
    </Routes>
  );
}
