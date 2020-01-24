import React from "react";
import "./table.css";

export default function Table() {
  return (
    <table className="table">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>E-Mail</th>
        <th>Date of Birth</th>
      </tr>
      <tr>
        <td>Marc</td>
        <td>Rubio</td>
        <td>male</td>
        <td>marc.rubio@example.com</td>
        <td>9/30/1945</td>
      </tr>
    </table>
  );
}

// https://randomuser.me/api/?results=25&nat=gb,us&inc=gender,name,email,dob,picture
