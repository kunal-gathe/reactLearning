import React from "react";
import "/style.css";
import  ReactDOM  from "react-dom/client";
import Navbar from "./src/component/Header";
import Body from "./src/component/Body";
import Footer from './src/component/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)