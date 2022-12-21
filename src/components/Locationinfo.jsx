import React from "react";

const Locationinfo = ({ rickandmorty }) => {
  //console.log(rickandmorty)
  return (
    <article className="location">
      <h2>{rickandmorty?.name}</h2>
      <ul className="description">
        <li>
          <span>Tipe: </span>
          {rickandmorty?.type}
        </li>
        <li>
          <span>Dimension </span>
          {rickandmorty?.dimension}
        </li>
        <li>
          <span>Population: </span>
          {rickandmorty?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default Locationinfo;
