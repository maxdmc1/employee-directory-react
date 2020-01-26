import React from "react";
import "./table.css";

export default function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <button onClick={() => props.sortBy("first")}>First Name</button>
          </th>
          <th>
            <button onClick={() => props.sortBy("first")}>Last Name</button>
          </th>
          <th>Gender</th>
          <th>E-Mail</th>
          <th>
            <button onClick={() => props.sortBy("age")}>Age</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(row => (
          <tr>
            <td>{row.name.first}</td>
            <td>{row.name.last}</td>
            <td>{row.email}</td>
            <td>{row.gender}</td>
            <td>{row.dob.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// https://randomuser.me/api/?results=25&nat=gb,us&inc=gender,name,email,dob,picture
