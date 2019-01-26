import React from 'react'
import PizzaImage from '../../assets/pizza.jpg'
import * as classes from './PizzaImage.css'

const pizzaImage = props => (
  <div className={classes.PizzaImage}>
    <img src={PizzaImage} classes={classes.PizzaImg} />
  </div>
)

export default pizzaImage
