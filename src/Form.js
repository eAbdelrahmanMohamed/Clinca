import React, { useState, useEffect } from "react"
//import Treatments from "./Treatments"

export default function Form() {
    var [CData, setdata] = useState([{ name: "patiant 1", age: 60, phone: "01026712003", Address: "cairo, Egypt", blood_type: "B+", Case: "dyapities", treatments: "test" }]);
    var [Pataint, setPataint] = useState({ name: "", age: 0, phone: "", Address: "", blood_type: "" });
    return ( <
        div className = "FContanier" >
        <
        form >
        <
        label > Name < /label> <
        input type = "text"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.name = e.target.value);
                //console.log(Pataint)
            }
        }
        /> <
        h1 > { Pataint.name } < /h1>

        <
        label > Age < /label> <
        input type = "nubmer"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.age = e.target.value);
                //console.log(Pataint)
            }
        }
        /> <
        h1 > { Pataint.age } < /h1> <
        button type = "button"
        onClick = {
            () => {
                CData.push(Pataint);
                console.log(CData)
            }
        } > push < /button> < /
        form > <
        /div>

    )

}