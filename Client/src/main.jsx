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
import ContactForm from './Components/Tours/Services/ServicePage/ContactForm/ContactForm.jsx';
import Contextdata from "./context/Contextdata.jsx";
import Productinfo from "./Components/Tours/Productsinfo/Productinfo.jsx";
import CharDhamItinerary from "./Components/Tours/Itinerary/CharDhamItinerary.jsx";
import BlogsLists from "./Components/Blogs/BlogsLists.jsx";
import BlogsPages from "./Components/Blogs/Pages/BlogsPages.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Abouts />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Servicepage />} />
      {/* tours start  */}
      <Route path="/tours/:id" element={<NanitalCar />} />
      {/* end  */}
      <Route path="from" element={<ContactForm />} />
      {/* blogs routes start  */}
      <Route path="blogslist" element={<BlogsLists />} />
      <Route path="blogspages/:id" element={<BlogsPages />} />
      {/* end  */}
      {/* Itinarys start  */}
      <Route path="chardham_Itenary" element={<CharDhamItinerary />} />
      {/* end  */}
      <Route path="productinfo/:id" element={<Productinfo />} />
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
