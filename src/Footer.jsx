import React from "react";

var currentDate = new Date();

function footer() {
  return (
    <footer>
      <p>©{currentDate.getFullYear()} Abhishek Rawat</p>
    </footer>
  );
}

export default footer;
