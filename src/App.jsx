import React from "react";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Whatchatgpt,
} from "./container";
import { Navbar, CTA, Brand } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <div className="APP">
        <div className="gradiant_bg">
          <Navbar></Navbar>
          <Header></Header>
        </div>
        <Brand></Brand>
        <Whatchatgpt></Whatchatgpt>
        <Features></Features>
        <Possibility></Possibility>
        <CTA></CTA>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
