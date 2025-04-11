import Navbar from "./Pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
      </>
    </>
  );
}

export default App;
