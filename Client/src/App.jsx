import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

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
