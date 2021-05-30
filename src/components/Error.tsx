import React from "react";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => {
  return <p className="red darken-4 error">{message}</p>;
};

export default Error;
