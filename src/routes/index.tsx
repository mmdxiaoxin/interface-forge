import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layout";
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
