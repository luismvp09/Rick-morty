import React from "react";

const Locationinfo = ({ rickandmorty }) => {
  //console.log(rickandmorty)
  return (
    <article className="location">
      <h2 className="titulo">{rickandmorty?.name}</h2>
      <ul className="description">
        <li className="list-location">
          <span className="list-decription">Tipe: </span>
          {rickandmorty?.type}
        </li>
        <li className="list-location">
          <span className="list-decription">Dimension: </span>
          {rickandmorty?.dimension}
        </li>
        <li className="list-location">
          <span className="list-decription">Population: </span>
          {rickandmorty?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default Locationinfo;
