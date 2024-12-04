import { Header } from "./pages/Header.js";
import { Home } from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
