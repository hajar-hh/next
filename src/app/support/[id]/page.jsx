import React from "react";

const page = ({ params }) => {
  return <p>{`id: ${params.id}`}</p>;
};

export default page;
