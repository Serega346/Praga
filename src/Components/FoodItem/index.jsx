import React from "react"

import itemStyle from "./style.module.css"

const FoodItem = () => {
    return (
        <div className={`${itemStyle.foodCard} col-sm-6 col-6`}>
            <div className={itemStyle.foodImg}>
                <img src={`${process.env.PUBLIC_URL}/img/fries.png`} alt="food"/>
                <div className={itemStyle.foodTitle}>title</div>
            </div>
            <div className={itemStyle.foodCaption}>
                <span className={itemStyle.foodWeight}/>
                <span className={itemStyle.foodCost}/>
            </div>
        </div>
    )
}

export default FoodItem
