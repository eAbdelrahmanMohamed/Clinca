import doctors from "./Doctors"
export default function Ophthalmology() {
    console.log(doctors[0].major.map((e) => console.log(e.name)))
    return ( <
        div >
        <
        p > hello from Ophthalmology < /p>    {
        doctors.map((e) => {

                return <div className = "Doctors" >
                    <
                    img src = "https://www.masrdoctors.com/includes/lib/thumb.php?src=https://www.masrdoctors.com/templates/default/ar/images/nopic.png&w=250&h=250&zc=0"
                alt = "" / >
                    <
                    div className = "txt" >
                    <
                    p > Doctor 's name :{e.name}</p> <
                p > Doctor 's address :{e.address}</p> {
                e.major.map((m) => {
                    return <ul >
                        <
                        li > { m.name } < /li> < /
                    ul >
                })
            } <
            p > Details: { e.Details } < /p>

            <
            /div>  <
            button type = "button"
            onClick = {
                () => console.log("works")
            } > Reserve < /button> < /
            div >
        }


    )
} <
/div>

)
}