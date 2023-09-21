import React, { useState } from 'react'
import "./Products.css"
import Plane from "../../assets/plane.png"
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
    const [parent] = useAutoAnimate()
    const [MenuProducts, setMenuProducts] = useState(ProductsData)
    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product) => product.type === type))
    }
    return (
        <div className="container">
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>
            <div className="products">
                <ul className="menu">
                    <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                    <li onClick={() => filter("skin care")}>Skine Care</li>
                    <li onClick={() => filter("conditioner")}>Conditioners</li>
                    <li onClick={() => filter("foundation")}>Foundations</li>
                </ul>
                <div className="list" ref={parent}>
                    {MenuProducts.map((product, index) => (
                        <div className="product">
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                    <span>{product.price}$</span>
                                    <div>Show Now</div>
                                </div>
                                <img src={product.img} alt="" className='img-p' />
                            </div>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Products