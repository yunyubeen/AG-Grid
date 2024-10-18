import React, { useState } from "react";

const FilterList = () => {
  //리스트와 검색어를 관리하는 상태
  const [searchTerm, setSearchTerm] = useState("");
  const items = ["사과", "바나나", "오렌지", "나나초코"];

  //검색어에 따라 리스트 필터링
  const filteredItems = items.filter((item) => item.includes(searchTerm));

  return (
    <div>
      <h1>과일 리스트</h1>
      <input
        type="text"
        placeholder="검색어 입력하세뇽"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
