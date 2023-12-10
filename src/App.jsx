import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import CatalogPage from '../src/pages/CatalogPage/CatalogPage';
import FavoritesPage from '../src/pages/FavoritesPage/FavoritesPage';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
export default App;
