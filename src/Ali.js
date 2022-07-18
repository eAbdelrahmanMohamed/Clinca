import Form from "./Form"
import { useState } from "react"
import { Turn, CData } from "./clients"
export default function Ali() {
    var [Stored_Pataint, Update] = useState(JSON.parse(localStorage.getItem("pataints")))
    return ( <
        div > {
            CData.map((e) =>




                <
                div className = "Docs" >

                <
                img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uaJwmRNexTmBZjyl3DF6cwHaHa%26pid%3DApi&f=1"
                alt = "" / >
                <
                div className = "txt" >
                <
                p > pataint name: { e.name } < /p>  <
                p > Number In Line: { e.NIL } < /p> < /
                div > < /div > 
            )
        }

        <
        /
        div >
    )

}