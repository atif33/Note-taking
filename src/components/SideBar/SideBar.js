import React from "react";
import { notes_icon } from "../../utils/images";
import "./SidBar.scss";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsPatchPlusFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";


const SideBar = () => {
    const location = useLocation();
    const pathName = location.pathname.replace("/", "");

    return (
        <div className="app-sidebar">
            <div className="sidebar-content py-3 flex flex-column">
                <Link to="/" className="app-brand flex align center justify-start">
                    <img src={notes_icon} alt="" />
                </Link>
                <ul className="links my-4">
                    <Link to="/home" className={`text-white flex justify-center align-center link-item ${pathName === 'home' ? 'active-link' : ''}`}>
                        <span className="flex align-center justify-content"><AiFillHome size={20} /></span>
                        <span className="icon-text">Accueil</span>
                    </Link>
                    <Link to="/add" className={`text-white flex justify-center align-center link-item ${pathName === 'add' ? 'active-link' : ''}`}>
                        <span className="flex align-center justify-content"><BsPatchPlusFill size={20} /></span>
                        <span className="icon-text">Ajouter</span>
                    </Link>
                    <Link to="/" className={`text-white flex justify-center align-center link-item ${pathName === '' ? 'active-link' : ''}`}>
                        <span className="flex align-center justify-content"><GiNotebook size={20} /></span>
                        <span className="icon-text">Notes</span>
                    </Link>
                </ul>
            </div>

        </div>
    );
}

export default SideBar;