import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./component/navBar/NavBar";
import Header from "./component/header/Header";
import MailList from "../src/component/mailList/MailList";
import Footer from "../src/component/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <MailList />
      <Footer />
    </>
  );
}

export default App;
