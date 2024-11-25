import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add,remove } from '../redux/Slices/CartSlice';


 const Product = ({post}) => {

    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(add(post));
        toast.success("Item Added");
    }
    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.success("Item Removed Successfully");
    }

  return (
    
    <div className='flex justify-center items-center flex-col gap-y-6 hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 rounded-xl outline ml-4' >
        <div className='font-semi-bold' >
            <p>{post.title.split("").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='w-40 text-[13px] text-gray-400'>
            <p>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='h-36 mb-2'>
            <img src={post.image} className='h-full w-full'/>
        </div>
        <div className='flex gap-x-16'>
        <div className='text-green-600'>
            <p>${post.price}</p>
        </div>

        {
            cart.some ((p) => p.id === post.id) ?
            (<button onClick={removeFromCart} className=''>Remove</button>)
            :
            (<button onClick={addToCart} className='rounded-full outline py-1 px-2 hover:bg-black hover:text-white transition duration-300 ease-in'>Add to Cart</button>)


        }

    </div>
    </div>
    
  );
};

export default Product;
