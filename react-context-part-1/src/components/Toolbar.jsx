import { useState } from "react";
import Deeper from "./Deeper";
import ThemedButton from "./ThemedButton";

const Toolbar = () => {
  return (
    <>
      <ThemedButton />
      <ThemedButton />
      <Deeper />
    </>
  );
};

export default Toolbar;
