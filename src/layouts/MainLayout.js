
import Header from "./../components/Header";
import { Fragment } from "react";
function MainLayout(props) {
  return (
    <Fragment>
      <Header />
      <div className="myContainerMain">
        <div className={`myContainer${props.container ? props.container : ""}`}>
          {props.children}
        </div>
      </div>
    </Fragment>
  );
}
export default MainLayout;
