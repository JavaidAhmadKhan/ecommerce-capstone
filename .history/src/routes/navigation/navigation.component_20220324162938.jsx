import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <h1>this is navigation</h1>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
