import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'   
import { toast } from 'react-toastify'

const Add = ({url}) => {


    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Cement",
    })

    const onChangeHandler=(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
    }

    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image) 
        const respose = await axios.post(`${url}/api/food/add`, formData);
        if(respose.data.success){
            setData({
        name:"",
        description:"",
        price:"",
        category:"Cement",
    })
    setImage(false)
    toast.success(respose.data.message)
        }else{

        }
    }


  return (
    <div className='add'>
        <form  className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' />
            </div>
            <div className="add-product-description flex-col">
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description"  rows="6" placeholder='Write Content' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} name="category">
                        <option value="Cement">Cement</option>
                        <option value="Iron Rods">Iron Rods</option>
                        <option value="Cement Sheets">Cement Sheets</option>
                        <option value="Iron Sheets">Iron Sheets</option>
                        <option value="Liquids">Liquids</option>
                        <option value="Pipes">Pipes</option>
                        <option value="Paints">Paints</option>
                        <option value="Light Weight Bricks">Light Weight Bricks</option>
                    </select>
                </div>
                <div className="app-price flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='Rs 200' />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
      
    </div>
  )
}

export default Add
