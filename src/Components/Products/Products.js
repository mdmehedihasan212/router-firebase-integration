import React from 'react';
import './Products.css';
import useProducts from '../../Hooks/useProducts';

const Products = () => {
    const [products] = useProducts();
    return (
        <div className='main-container'>
            {
                products?.map(product =>
                    <div className="product-container">
                        <img src={product.img} alt="" />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button>Buy Now</button>
                    </div>
                )
            }
        </div>
    );
};

export default Products;