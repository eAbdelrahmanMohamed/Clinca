import React, { useState, useEffect } from "react"
//import Treatments from "./Treatments"
import { Turn, CData } from "./clients";
export default function Form(props) {
    //var [CData, setdata] = useState();
    var [turn, setTurn] = useState(Turn)
    var [Pataint, setPataint] = useState({ name: "", age: 0, phone: "", Address: "", blood_type: "", History: false, NIL: Turn });
    var [Class, setClass] = useState("show");
    //useEffect(
    //    () => {
    //        setTurn((turn) => turn++)

    //    }, [turn])

    localStorage.setItem("pataints", JSON.stringify(CData))
    return ( <
        div >
        <
        button type = "button"
        onClick = {
            () => setClass((Class) => Class === "show" ? "hide" : "show")
        } >
        show < /button>

        <
        div className = { Class === "show" ? "hide" : "show" } >
        <
        button type = "button"
        onClick = {
            () => setClass((Class) => Class === "show" ? "hide" : "show")
        }
        id = "Close" > X < /button> <
        form className = "Form" >
        <
        label > Name < /label> <
        input type = "text"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.name = e.target.value);
                //console.log(Pataint)
            }
        }
        /> 

        <
        label > Age < /label>  <
        input type = "nubmer"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.age = e.target.value);
                //console.log(Pataint)
            }
        }
        /> <
        label > Phone < /label>  <
        input type = "nubmer"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.phone = e.target.value);
                //console.log(Pataint)
            }
        }
        /> <
        label > Address < /label>  <
        input type = "nubmer"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.Address = e.target.value);
                //console.log(Pataint)
            }
        }
        />

        <
        label > Bloode type < /label>  <
        input type = "text"

        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.blood_type = e.target.value);
                //console.log(Pataint)
            }
        }
        /> 

        <
        label > have an experiance with us < /label>  <
        div >

        <
        label > yes < /label>  <
        input type = "radio"
        name = "history"
        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.History = true);
                //console.log(Pataint)
            }
        }
        />  <
        label > No < /label>  <
        input type = "radio"
        name = "history"
        onChange = {
            (e) => {
                setPataint(Pataint, Pataint.History = false);
                //console.log(Pataint)
            }
        }
        />   < /
        div > <
        button type = "button"
        onClick = {
            () => {
                setTurn((turn) => turn++)
                Pataint.NIL = turn;
                CData.push(Pataint);
                localStorage.setItem("pataints", JSON.stringify(CData))
                    //Turn++;
                window.location.href = "/Ali"
                console.log(CData, Turn)
            }
        } > Reserve < /button> < /
        form > <
        /div> < /
        div >


    )

}