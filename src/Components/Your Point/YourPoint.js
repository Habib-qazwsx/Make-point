import React from 'react';
import './YourPoint.css';

const YourPoint = (props) => {

    let total =0;

    for(const card of props.add){
        total = total + card.point;
    }
    const tempArray = [];
    props.add.forEach(element => {
        const pd = tempArray.find(scd => scd.key === element.key)
        if(pd === undefined){
            tempArray.push(element)
        }
    });

    return (
        <div>
            <h1>Your Point</h1>
            <h3>Total add {props.add.length}</h3>
            <h2>Total Point: {total}</h2>
            <div>
                {
                    tempArray.map(item => <div key={item.key} className="list">
                        <li>{item.Language} </li>
                    </div>)
                }
            </div>
        </div>
    );
};

export default YourPoint;