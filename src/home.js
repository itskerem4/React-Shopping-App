import React from 'react'
import ItemCard from './Itemcard'
import Data from './data'
const home = () =>{
    return(
        <>
            <h1 className='text-center mt-3'>Shopping App</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {Data.productData.map((item,index)=>{
                        return(
                            <ItemCard 
                            img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price} 
                            item={item} 
                            key={index}
                            />
                        )
                    })}
                   
                </div>
            </section>
        </>
    );
};

export default home;