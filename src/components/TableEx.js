import React, { useState } from "react";

const TableEx = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const rows = [
    { name: "1", data: "data1" },
    { name: "2", data: "data2" },
    { name: "3", data: "data3" },
  ];

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  return (
    <div>
      <h1>행 클릭시 색 변화</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              onClick={() => handleRowClick(row)}
              style={{
                backgroundColor:
                  selectedRow?.name === row.name ? "#FFE7E0" : "white",
              }}
            >
              <td>{row.name}</td>
              <td>{row.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableEx;
