/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((item) => {
    console.log(item);
  })
}

function PrintDeveloperbyForEach() {
  arr.forEach(element => {
    console.log(element);
  });
}

function addData() {
  arr.push( {id:4,name:"susan",age:"20",profession:"intern"} )
  arr.map((item) => {
    console.log(item);
  })
}

function removeAdmin() {
  arr = arr.filter((item)=>{
    return  item.profession != "admin"
  })

  arr.map((item) => {
    console.log(item);
  })

}

function concatenateArray() {
  arr = arr.concat({ id: 4, name: "jefrey", age: "18", profession: "intern" },
  { id: 5, name: "kevin", age: "20", profession:"developer"},
  { id: 6, name: "sunny", age: "19", profession:"intern" }) 
  arr.map((item) => {
    console.log(item);
  })
}
