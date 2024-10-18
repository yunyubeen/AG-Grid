import React from "react";
import "./DataGrid.css";

const DataGrid = ({ columns, contents }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr>
              {columns.map((col) => (
                <td>{col.getter ? col.getter(content) : content[col.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
