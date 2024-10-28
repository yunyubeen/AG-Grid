import React from "react";
import "./DataGrid.css";
import { useState } from "react";

const DataGrid = ({ columns, contents, selectedName, handleRowClick }) => {
  const [selectedRow, setSelectedRow] = useState(null);

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
              <th key={col.name}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredContents.map((content, index) => (
            <tr
              key={index}
              onClick={() => {
                setSelectedRow(content);
                handleRowClick(content);
              }}
              style={{
                backgroundColor: selectedRow === content ? "#FFE7E0" : "white",
              }}
            >
              {columns.map((col) => (
                <td key={col.name}>
                  {col.getter ? col.getter(content) : content[col.name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
