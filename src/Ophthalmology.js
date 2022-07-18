import doctors from "./Doctors"
import Ali from "./Ali"
export default function Ophthalmology() {
    return ( < div > {
                doctors.map((e) => {
                        return <a href = "/Ali" >
                            <
                            div className = "Docs" >

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
                    p > Details: { e.Details } < /p> <
                    p > Appointments: { e.Appointments } < /p> < /
                    div > < /div >< /a >

                })
        } <
        /div>

)

}