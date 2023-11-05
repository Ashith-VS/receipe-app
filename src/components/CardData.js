import React from 'react'

function CardData(props) {


    return (
        <li>
            <a onClick={()=>props.showPopupHandler(props.item.strMeal)}>
            <img src={props.item.strMealThumb} alt="" className='br-10px'/>
            <h5>{props.item.strMeal}</h5>
            </a>
        </li>
    )
}

export default CardData