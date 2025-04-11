import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx";
import Abouts from "./Components/About/Abouts";
import Contact from "./Components/Contacts/Contact";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Servicepage from "./Components/Tours/Services/Servicepage.jsx";
import NanitalCar from './Components/Tours/Services/ServicePage/Services/NanitalCar.jsx';
import Blogs from "./Components/Blogs/Blogs.jsx";
import NanitalBlogs from "./Components/Blogs/Pages/NanitalBlogs.jsx";
import MasuriBlogs from "./Components/Blogs/Pages/MasuriBlogs.jsx";
import KedarnathBlogs from "./Components/Blogs/Pages/KedarnathBlogs.jsx";
import DehradunBlogs from "./Components/Blogs/Pages/DehradunBlogs.jsx";
import CharDhamBlogs from "./Components/Blogs/Pages/CharDhamBlogs.jsx";
import ContactForm from './Components/Tours/Services/ServicePage/ContactForm/ContactForm.jsx';
import Contextdata from "./context/Contextdata.jsx";
import Productinfo from "./Components/Tours/Productsinfo/Productinfo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Abouts />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Servicepage />} />
      <Route path="nanitalcar" element={<NanitalCar />} />
      <Route path="from" element={<ContactForm />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="blogs/nanitalblogs" element={<NanitalBlogs />} />
      <Route path="blogs/masuriblogs" element={<MasuriBlogs />} />
      <Route path="blogs/kedarnathblogs" element={<KedarnathBlogs />} />
      <Route path="blogs/dehradunblogs" element={<DehradunBlogs />} />
      <Route path="chardhamblogs" element={<CharDhamBlogs />} />
      <Route path="productinfo" element={<Productinfo />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Contextdata>
      <RouterProvider router={router} />
    </Contextdata>
  </StrictMode>
);
