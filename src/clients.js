var Turn = 1;
var CData = [{ name: "patiant 1", age: 60, phone: "01026712003", Address: "cairo, Egypt", blood_type: "B+", Case: "dyapities", treatments: "test", NIL: Turn }];
localStorage.setItem("pataints", JSON.stringify(CData))
export { Turn, CData }