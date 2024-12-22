import React from "react";

function page({ params }) {
  return (
    <div>
      <p>this id: {params.id}</p>
    </div>
  );
}

export default page;
