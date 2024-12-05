import { Header } from "./pages/Header.js";
import { Home } from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail.jsx";
import { Contact } from "./components/Contact.jsx";

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
