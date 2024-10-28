const arr = [
  { name: "1", label: "a" },
  { name: "2", label: "a" },
  { name: "3", label: "a" },
];

arr.filter((n) => n.name !== "2");

//const b =  arr.map( (item , index) => {   return  {id:index}  }     )
const b = arr.map((item, _index) => {
  return { ...item, _index };
});
console.log(b);

const c = Array.from(arr);
for (let i = 0; i < 3; i++) c[i]._index = i;
