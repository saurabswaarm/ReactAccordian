import { useState } from "react";

const AccordianBar = function (props) {
  let [open, setOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setOpen(!open);
    console.log("click registered");
  }

  return (
    <>
      <div className="acc-container">
        <div className="acc-title">Test</div>
        <div className="acc-sign" onClick={handleClick}>
          {" "}
          +{" "}
        </div>
      </div>
      {open && (
        <div className="acc-body">
          {" "}
          This is some lorem ipsum meow meow to fill the void you feel in your
          heart.
        </div>
      )}
    </>
  );
};

export default AccordianBar;
