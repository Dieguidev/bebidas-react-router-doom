import { BrowserRouter, Route, Routes } from "react-router-dom"
import { IndexPage } from "./views/IndexPage"
import { FavoritesPage } from "./views/FavoritesPage"



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/favoritos" element={<FavoritesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
