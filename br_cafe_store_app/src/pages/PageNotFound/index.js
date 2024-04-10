import React from "react";
import "./style.scss";

const PageNotFound = () => {
  return (
    <>
      <div className="container-error-page">
        <h1 className="title-error-page">Page Not Found</h1>
        <p className="text-error-page">
          <b>
            Oh no! It seems that this page does not exist. <br />
            Please verify the address.
          </b>
        </p>
      </div>
    </>
  );
};

export default PageNotFound;
