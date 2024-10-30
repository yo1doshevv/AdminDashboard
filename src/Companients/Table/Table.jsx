import React, { useState } from "react";
import "./Table.scss";

const AddTable = () => {

    const [Catigories, setCatigories] = useState([]);

    //get catigories api
    function GetCatigoriesApi(){
        
    }

  return (
    <div className="table">
      <div className="table_wrapper">
        <div className="table_hed">
          <h1>Catigories</h1>
          <button className="btn">Add Catigories</button>
        </div>
        <div className="table_body">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name (en)</th>
                <th>Name (ru)</th>
                <th>status</th>
                <th>image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ism (en)</td>
                <td>Ism (ru)</td>
                <td>Ok</td>
                <td>Img</td>
                <td>Action</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddTable;
