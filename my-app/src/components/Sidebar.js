import React from "react";
import css from './css/Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={css.sidebar}>
            <a>My Photos</a>
            <a>My Ilustrations</a>
            <a>My Paintings</a>
        </div>
    );
}

export default Sidebar