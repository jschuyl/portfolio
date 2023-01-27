import React from 'react';

export default function Card(props){
    return(
        <div className="card gimmie-space">
            <div className="card__body">
                <img className="card__img" src={props.img} alt="screenshot from project"/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.describe}</p>
            </div>
            <button href={props.link} className={props.linkBtn}>Link</button>
            <button hfref={props.github} className="card__btn">Github</button>
        </div>
    )
}