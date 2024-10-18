import React from "react";
import DataGrid from "./components/DataGrid";
import { useState } from "react";
import GroupButton2 from "./components/GroupButton2";

function App() {
  const names = [{ name: "액션" }, { name: "로맨스" }, { name: "판타지" }];
  const [selectedName, setSelectedName] = useState("");

  const handleClick = (name) => {
    setSelectedName(name);
  };

  const columns = [
    { name: "title", label: "title" },
    { name: "genre", label: "genre" },
    { name: "source", label: "source" },
    // {
    //   label: "actors",
    //   getter: (values) => {
    //     console.log(values);
    //     return "[" + values.actor + "]";
    //   },
    // },
    {
      label: "actors",
      getter: (values) => {
        return values.actor.split(", ").length > 2
          ? values.actor.split(", ").slice(0, 2).join(", ") +
              " 외 " +
              (values.actor.split(", ").length - 2) +
              "명"
          : values.actor;
      },
    },
  ];

  const contents = [
    {
      title: "베테랑2",
      source: "영화 이미지-베테랑",
      genre: "액션",
      actor: "황정민, 정해인, 장윤주, 진경",
    },
    {
      title: "노트북",
      source: "이미지2",
      genre: "로맨스",
      actor: "배우2",
    },
    {
      title: "해리포터-죽음의 성물",
      source: "해리포터 이미지",
      genre: "판타지",
      actor: "헤르미온느, 해리포터",
    },
  ];
  // 필터링 이 부분에 추가
  const filteredContents = selectedName
    ? contents.filter((contents) => contents.genre == selectedName)
    : contents;
  return (
    <div>
      <h1>필터링</h1>
      <GroupButton2 names={names} onButtonClick={handleClick}></GroupButton2>
      <p>선택된 버튼 : {selectedName}</p>
      <DataGrid columns={columns} contents={filteredContents}></DataGrid>
    </div>
  );
}

export default App;
