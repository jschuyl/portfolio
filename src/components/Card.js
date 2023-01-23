import React from 'react';

export default function Card(props){
    return(
        <div className="card">
            <div className="card__body">
                <img className="card__img" src={props.img} alt="test"/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.describe}</p>
            </div>
            <button href={props.link} className="card__btn hide">Link</button>
            <button hfref={props.github} className="card__btn">Github</button>
        </div>
    )
}