import React from 'react';
import {Link} from "react-router-dom";

function ListItems({items}) {
    return (
        items.map((item, index) =>
            <li className="nav-item" key={index}>
                <Link to={item.link} className="nav-link text-light d-flex align-items-center">{item.text}</Link>
            </li>
        )
    );
}

export default ListItems;