import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./Components/Home/Home";
import Abouts from "./Components/About/Abouts";
import Contact from "./Components/Contacts/Contact";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Servicepage from "./Components/Services/Servicepage.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import NanitalBlogs from "./Components/Blogs/Pages/NanitalBlogs.jsx";
import NanitalCar from "./Components/Services/Servicepages/Services/NanitalCar.jsx";
import MasuriBlogs from "./Components/Blogs/Pages/MasuriBlogs.jsx";
import KedarnathBlogs from "./Components/Blogs/Pages/KedarnathBlogs.jsx";
import DehradunBlogs from "./Components/Blogs/Pages/DehradunBlogs.jsx";
import CharDhamBlogs from "./Components/Blogs/Pages/CharDhamBlogs.jsx";
import ContactForm from "./Components/Services/Servicepages/ContactForm.jsx/ContactForm.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Abouts />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Servicepage />} />
      <Route path="services/nanitalcar" element={<NanitalCar />} />
      <Route path="from" element={<ContactForm />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="blogs/nanitalblogs" element={<NanitalBlogs />} />
      <Route path="blogs/masuriblogs" element={<MasuriBlogs />} />
      <Route path="blogs/kedarnathblogs" element={<KedarnathBlogs />} />
      <Route path="blogs/dehradunblogs" element={<DehradunBlogs />} />
      <Route path="blogs/chardhamblogs" element={<CharDhamBlogs />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
