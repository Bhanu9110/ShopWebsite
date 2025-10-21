import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

  const{cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+"/images/"+image} alt=""/>

            

            {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
              :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
                </div>
            }

            {/*

            {!cartItems[id] ? (
  <img
    className="add"
    onClick={() => addToCart(id)}
    src={assets.add_icon_white}
    alt="add"
  />
) : (
  <div className="food-item-counter">
    <img
      onClick={() => removeFromCart(id)}
      src={assets.remove_icon_red}
      alt="remove"
    />
    <input
      type="number"
      min="0"
      value={cartItems[id]}
      onChange={(e) => {
        const value = parseInt(e.target.value, 10)
        if (!isNaN(value) && value >= 0) {
          if (value === 0) {
            removeFromCart(id, true) // optional "clear"
          } else {
            updateCartQuantity(id, value) // ✅ now works
          }
        }
      }}
      className="item-input"
    />
    <img
      onClick={() => addToCart(id)}
      src={assets.add_icon_green}
      alt="add"
    />
  </div>
)}

*/}



        </div>



        <div className="food-item-info">
            
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            
            <p className="food-item-price">Rs : {price}/-</p>

            <p className="food-item-desc">{description}</p>
            
        </div>
      
    </div>
  )
}

export default FoodItem
