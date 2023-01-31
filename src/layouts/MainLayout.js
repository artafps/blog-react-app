
import { Fragment } from "react";

import Header from "./../components/Header";
import Footer from "../components/Footer";


function MainLayout(props) {
  return (
    <Fragment>
      <Header />
      <div className="myContainerMain">
        <div className={`myContainer${props.container ? props.container : ""}`}>
          {props.children}
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}
export default MainLayout;
