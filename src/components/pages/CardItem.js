import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
        <li className="cards__item">
            <Link className="cards__item__link" to={{pathname: props.path}} target="_blank">
                <figure className="cards__item__pic-wrap">
                    <img src={props.src} alt="Project Image" className="cards__item__img"/>
                    <video src={props.src} autoPlay loop muted className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                    <div className="cards__item__desc">{props.description}</div>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem
