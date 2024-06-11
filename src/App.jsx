import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Catalog } from "./Pages/Catalog/Catalog";
import { Favorites } from "./Pages/Favorites/Favorites";
// import { CamperFeatures } from "./components/CamperFeatures/CamperFeatures";
// import { CamperReviews } from "./components/CamperReviews/CamperReviews";
import { Layout } from "./components/Layout/Layout";
// import { ModalDetailsPage } from "./components/modal/ModalDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/reviews" element={<Favorites />} />
        <Route path="/contacts" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
