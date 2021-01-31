import React, { Fragment } from "react";
import loader from "./loader.gif";

const Loading = ({ type }) => {
  return (
    <Fragment>
      <img
        src={loader}
        alt='Loading...'
        style={{ width: "100px", margin: "auto", display: "block" }}
      />
      <p className='text-sm font-semibold text-center mt-3'>
        {`Fetching ${type} data`}
      </p>
    </Fragment>
  );
};

export default Loading;
