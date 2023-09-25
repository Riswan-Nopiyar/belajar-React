import { Fragment, useState } from "react";
import Button from "../components/elements/Button";
import CardProduct from "../components/fragments/Cardproduct";

const products = [
    {
        id: 1,
        name:"Nasi Goreng",
        price:12000,
        image:"/images/nasgor.jpg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Laboriosam sed blanditiis cumque iusto fugit odio commodi incidunt totam enim 
        reprehenderit, quo ratione vero fugiat, voluptates veniam? Ex quas magnam quia?`
    },
    {
        id: 2,
        name:"Mie Goreng",
        price:12000,
        image:"/images/mie.jpg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Laboriosam sed blanditiis cumque iusto fugit odio commodi incidunt totam enim 
        reprehenderit, quo ratione vero fugiat, voluptates veniam? Ex quas magnam quia?`
    },
    {
        id: 3,
        name:"Rendang",
        price:18000,
        image:"/images/rendang.jpg",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Laboriosam sed blanditiis cumque iusto fugit odio commodi incidunt totam enim 
        reprehenderit, quo ratione vero fugiat, voluptates veniam? Ex quas magnam quia?`
    },
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const [cart, setCart] = useState([
        {
            id: "1",
            qty: 1,
        },
    ]);

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href="/login";
    };

    const handleAddToCart = (id) => {
        setCart([
            ...cart,
            {
                id,
                qty: 1,
            },
        ]);
    };


    return (
       <Fragment>
        <div className="flex justify-end h-20 bg-black text-white items-center px-5">
            {email}
            <Button variant="ml-5 bg-red-700" onClick={handleLogout}>
                Logout</Button>
        </div>
         <div className="flex justify-center py-5">
            <div className="w-3/4 flex flex-w">
            {products.map ((product) => (
                <CardProduct key = {product.id}>
                <CardProduct.Header image={product.image}/>
                <CardProduct.Body name={product.name}>
                    {product.description} 
                </CardProduct.Body>
                <CardProduct.Footer 
                price={product.price}
                id={product.id} 
                HandleAddToCart={handleAddToCart}/>
                </CardProduct>
                ))}
            </div>
            <div className="w-1/4">
                <h1 className="text-3x1 font-bold text-blue-600">CART</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map ((item) => {
                            const product = products.find (
                                (product) => product.id === item.id
                                );
                            return (
                                <tr key={item.id}>
                                    <td>{product?.name}</td>
                                    <td>{product?.price}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.qty * product?.price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
       </Fragment>
    );
};

export default ProductsPage;