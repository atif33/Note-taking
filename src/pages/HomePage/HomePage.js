import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom"
import SideBar from '../../components/SideBar/SideBar';
import "./HomePage.scss"

const HomePage = () => {
    const [greetText, setGreetText] = useState("");
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString('default', { weekday: 'long' });
    const month = currentDate.toLocaleDateString('default', { month: 'long' });
    const date = `${day} ${currentDate.getDate()}, ${month}  ${currentDate.getFullYear()}`;
    useEffect(() => {
        let currentHour = currentDate.getHours();
        (currentHour < 14) ? setGreetText("Bonjour!!") :
            (currentDate > 14) ? setGreetText("Bon après midi!!") : setGreetText("Bonne Soiré!!")

    }, []);
    return (
        <div className='app flex'>
            <SideBar />
            <div className='app-main'>
                <header className='header w-100 flex align-center'>
                    <div className='container w-100'>
                        <div className='header-content flex align-center justify-between text-white py-3'>
                            <div className='greetings'>
                                <h3 className='fw-6'>{greetText}</h3>
                            </div>
                            <div className='date'>
                                <span className='text-uppercase fs-13 fw-4'>{date}</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='notes-wrapper py-4 px-4'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
}

export default HomePage;