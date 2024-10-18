import React from "react";
import "./DataGrid.css";

const DataGrid = ({ columns, contents, selectedName }) => {
  // 필터링
  const filteredContents = selectedName
    ? contents.filter((contents) => contents.genre === selectedName)
    : contents;

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
          {filteredContents.map((content) => (
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
