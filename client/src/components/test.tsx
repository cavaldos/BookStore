import React from "react";
import { useDispatch} from "react-redux";

import {increment} from "store";
const Component: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(increment());
  return (
    <>
      <h1 className=''>sddsafasdads</h1>

    </>
  );
};

export default Component;
