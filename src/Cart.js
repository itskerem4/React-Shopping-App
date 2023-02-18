import React from 'react'
import { useCart } from 'react-use-cart';

const Cart = () =>{
    const {isEmpty,totalItems,items,totalUniqueItems,cartTotal,updateItemQuantity,removeItem,emptyCart} = useCart ();
    if (isEmpty) return <h1 className='text-center h1'>Your Cart İs Empty</h1>
    return(
       <section className='py-4 container'>
        <div className='row justify-contect-center'>
            <div className='col-12'>
                <h5>Cart ({totalItems}) Total Items : ({totalItems})</h5>
                <table className='table table-light table-hover m-0'>
                    {items.map((item,index)=>{
                        return(
                    <tr key={index}>
                        <td><img src={item.img} style={{height:'6rem'}}/></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>Quanity ({item.quantity})</td>
                        <td>
                            <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity - 1)}>-</button>
                            <button className='btn btn-primary text-dark ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}>+</button>
                            <button className='btn btn-danger text-dark ms-2' onClick={()=>removeItem(item.id)}>Remove All</button>
                        </td>
                    </tr> 
                    )})}
                </table>
            </div>
            <div className='col-auto ms-auto'>
                <h2>Total Price: ({cartTotal})$</h2>
            </div>
            <div className='col-auto'>
                <button className='btn btn-danger m-2' onClick={()=>emptyCart()}>Clear </button>
                <button className='btn btn-primary m-2' onClick={() => alert('Enjoy your meal')}>Buy</button>
            </div>
        </div>
        </section>
    );
};

export default Cart;