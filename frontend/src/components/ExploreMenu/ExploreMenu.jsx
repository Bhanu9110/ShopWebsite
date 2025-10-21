import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore your Products</h1>
        <p className='explore-menu-text'>our commitment to product quality is our top priority. We meticulously select and source only the finest iron rods, iron and cement sheets, and cement from trusted manufacturers. Every item in our inventory is rigorously inspected to meet the highest industry standards for strength, durability, and reliability. We ensure that our materials will provide a solid and lasting foundation for all your construction needs, giving you peace of mind with every purchase.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>

                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
