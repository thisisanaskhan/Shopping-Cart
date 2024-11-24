import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add,remove } from '../redux/Slices/CartSlice';

 const Product = ({post}) => {

    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();
    const addToCart=()=>{
        dispatch(add(post));
        toast.success("Item Added")
    }
    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.success("Item Removed Successfully")
    }

  return (
    <div>
        <div>
            <p>{post.title}</p>
        </div>
        <div>
            <p>{post.description}</p>
        </div>
        <div>
            <img src={post.image}/>
        </div>
        <div>
            <p>{post.price}</p>
        </div>

        {
            CartItem.some((p)=>p.id==post.id)?
            (<button onClick={removeFromCart}>Remove</button>):
            (<button onClick={addToCart}>Add to Cart</button>)


        }


    </div>
  );
};

export default Product;
