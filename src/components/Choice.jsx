import React, { useEffect, useState } from 'react';
/* import data from './../data'; */
import axios from 'axios';

const Choice = () => {
    const url='https://bce6684c-da2d-473f-a498-ca64695933bd.mock.pstmn.io/products'
    const [products,setProducts] =useState([])
    useEffect(()=>{
        axios.get(url)
    .then((result)=>{
        const products=result.data.products;
        setProducts(products)
        
    }).catch((err)=>{
        console.log(err)
    })
    },[])
    
    return (
        <div className='choice'>
            <h2><span>생생하게 들리는 차이.</span>풍부한 고품질 사운드를 원한다면 필연적인 선택.</h2>
            <ul>
                {
                    products.map((product, i)=>{
                        return (
                            <li key={product.id}>
                                <img src={product.img} alt={product.title} />
                                <h5>{product.free} &nbsp;</h5>
                                <h3>{product.title}</h3>
                                <p className='price'>￦{product.price}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Choice;