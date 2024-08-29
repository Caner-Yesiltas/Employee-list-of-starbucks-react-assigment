import React from "react";

const List = ({ employeeData }) => {
  return (
    <>
      {employeeData.map(({ image, name, age, email }) => (
        <article key={email} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
