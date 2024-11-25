import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

 const Home = () => {

    const API_URL="https://fakestoreapi.com/products";
    const[loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([])

    async function fetchProductData() {
        setLoading(true);

        try{
            const res = await fetch(API_URL);
            const data= await res.json();

            setPosts(data);
        }
        catch(error){
            alert("unable to load");
            setPosts([]);

        }

        setLoading(false);
        
    }

    useEffect(()=>{
        fetchProductData();
    },[])


  return (
    <div >
        
      {
        loading?<Spinner/>:
        posts.length > 0 ?
        (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto'>
           {
             posts.map((post)=>(
                <Product key={posts.id} post={post}/>
            ))
            
           }
        </div>):
        <div>
        <p>No Data Found</p>
        </div>
      }
        
        
          

        
    </div>
  );
};

export default Home;
