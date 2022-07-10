import { getFirestore, collection, getDocs, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import departments from './Departments';
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ophthalmology from './Ophthalmology';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const firebaseConfig = {
        apiKey: "AIzaSyD65fv_oL7GxQle0DZf20gArXrNALbv_Y4",
        authDomain: "clinica-6605e.firebaseapp.com",
        databaseURL: "https://clinica-6605e-default-rtdb.firebaseio.com",
        projectId: "clinica-6605e",
        storageBucket: "clinica-6605e.appspot.com",
        messagingSenderId: "429290259040",
        appId: "1:429290259040:web:08fbf3fdbc9ef6ad68b905",
        measurementId: "G-B4NRH3RKV1"
    };
    initializeApp(firebaseConfig);

    const db = getFirestore();
    const Departments_ref = collection(db, 'Departments');

    //console.log(departments)
    //useEffect(() =>
    //getDocs(Departments_ref).then((snaoshot) => {
    //    //departments = [];
    //    GetDepartments(() => {
    //        snaoshot.docs.map((doc) => {
    //            //departments = [];
    //            departments.push(doc.data())
    //            console.log(departments)

    //        })
    //    })

    //    console.log(departments)
    //}).catch(err => { console.log(err) });
    //onSnapshot(Departments_ref, (snaoshot) => {
    //        //GetDepartments(() => {
    //        snaoshot.docs.map((doc) => {
    //                var [departments, GetDepartments] = useState(["test"])
    //                    //departments = [];
    //                departments.push(doc.data())
    //                console.log(doc.data())
    //                console.log(departments)

    //            })
    //            //console.log(departments)
    //            //})

    //    })
    //[departments])

    //console.log(departments)
    return ( <
        div >
        <
        div className = 'Section-one' >
        <
        img src = 'https://clinika.modeltheme.com/wp-content/uploads/2020/06/home_img_wrap.png' / >
        <
        div >
        <
        h2 > Clinika - Best Medical Clinic,
        Thousands of specialities
        for any type diagnostic. < /h2> <
        p > Aenean volutpat, sem sit amet ullamcoer gravida, molestie risus enim nulla.Pellentesqu velit faucibus kodale dolor rhoncu.Curabituring laciniam efficitur porttitor.Predefined chuniks. < /p> <
        button type = "button" > Browse through diagnostic < /button> < /
        div > <
        /div> <
        div className = 'Section-two' >
        <
        div >
        <
        h2 > Specialized medical checkup tailored to the patient < /h2> <
        div >
        <
        img src = 'https://clinika.modeltheme.com/wp-content/uploads/2020/09/Clinka-service-1.png' / >
        <
        h3 > All medical facility < /h3> <
        p > Entreaties unpleasant sufficient few pianoforte discovered. < /p> <
        /div> <
        /div> <
        div className = 'Bc' >
        <
        div className = 'Sc' > < /div> <
        /div> <
        /div>

        {
            departments.map((e) => {
                return (

                    <
                    div className = 'Body' >

                    <
                    div className = 'dContanier'
                    key = { e.name }
                    onClick = {
                        () => {
                            window.location.href = "/Ophthalmology"
                        }
                    } >

                    <
                    img src = { e.image }
                    alt = "" / >
                    <
                    p className = "cat" > { e.name } < /p>  < /
                    div >
                    <
                    /
                    div >
                )
            })
        } <
        /div> )
    }