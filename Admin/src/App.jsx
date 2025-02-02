import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Slider from "./Components/Navbar/Slider";
import AddService from "./Components/AddService/AddService";
import ListService from "./Components/ListService/ListService";
import CustomerReviewList from "./Components/CustomerReviewList/CustomerReviewList";
import UserRegistration from "./Components/User/UserRagistration";
import UserLogin from "./Components/User/UserLogin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Slider />}>
          <Route path="addservice" element={<AddService />} />
          <Route path="list" element={<ListService />} />
          <Route path="customer_reviews" element={<CustomerReviewList />} />
        </Route>
        <Route path="registration" element={<UserRegistration />} />
        <Route path="login" element={<UserLogin />} />
      </Routes> 
    </BrowserRouter>
  );
}
export default App;