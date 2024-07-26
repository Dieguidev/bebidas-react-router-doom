import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "./views/IndexPage";
// import { FavoritesPage } from './views/FavoritesPage';
import { Layout } from "./layouts/Layout";
import { lazy, Suspense } from "react";

const FavoritesPage = lazy(() => import('./views/FavoritesPage').then(module => ({ default: module.FavoritesPage })));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/favoritos" element={
            <Suspense fallback='Cargando...'>
              <FavoritesPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
