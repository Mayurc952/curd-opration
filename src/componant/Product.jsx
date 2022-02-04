import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios

      .get("https://jsonplaceholder.typicode.com/todos")

      .then((res) => {
        setState(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>helloe</h1>
    </div>
  );
};

export default Product;
