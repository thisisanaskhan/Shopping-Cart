import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';  

const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();
  const removeCart=()=>{ 
    dispatch(remove(item.id));
    toast.success("Item removed")
  }
  return (
    <div>
      <div>
        <div>
            <img src={item.img}/>
        </div>
        <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <div>
            <h1>{item.price}</h1>
            
        
        <div onClick={removeCart}>
        <MdDelete />
        </div>
        </div>
       </div>
      </div>
    </div>
  )
};



export default CartItem;