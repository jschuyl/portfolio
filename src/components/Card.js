import React from 'react';

export default function Card(props){
    return(
        <div className="card gimmie-space">
            <div className="card__body">
                <img className="card__img resize" src={props.img} alt="screenshot from project"/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.describe}</p>
            </div>
            <a href={`${props.link}`} >
                <button className={`${props.linkBtn}`}>Link</button>
            </a>
            <br />
            <a href={`${props.github}`}>
                <button className="card__btn">Github</button>
            </a>
        </div>
    )
}