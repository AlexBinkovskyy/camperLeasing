import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Catalog } from "./Pages/Catalog/Catalog";
import { Favorites } from "./Pages/Favorites/Favorites";
import { Layout } from "./components/Layout/Layout";
import { Reviews } from "./Pages/Reviews/Reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
