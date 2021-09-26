import React, { useState } from 'react';
import { data } from '../../Data/fakeData';
import CardDetails from '../Card Details/CardDetails';
import YourPoint from '../Your Point/YourPoint';

import './Card.css';

const Card = () => {
    const [items, setItems] = useState(data);
    const [add, setAdd] = useState([]);

    const addPoint = (newItem) => {
        const totalAdd = [...add, newItem];
        setAdd(totalAdd);
        const temLan = [...items];
        const index = items.indexOf(newItem);
        const temItem = temLan[index];
        temItem.isSelected=true;
        setItems(temLan);
    }
    return (
        <div className="catContainer">
            <div className="cart">
            {
                items.map(item => 
                <CardDetails
                key={item.key} 
                item={item}
                addPoint={addPoint}></CardDetails>)
            }
            </div>
            <div className="yourPoint">
            <YourPoint add={add}></YourPoint>
            </div>
        </div>
        
    );
};

export default Card;