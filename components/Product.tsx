import Image from 'next/image';
import React from 'react';
interface Props {
    product: IProduct,
    handleBuyProduct: Function
    balance: Ibalance}

const Product = ({ product, handleBuyProduct, balance }: Props) => {
    return (
        <div className="box-border p-2 border-2 ">
            <ul className="list-none">
                <li>
                    <Image src={product.image} alt={product.image} layout="responsive" height="100%" width="100%" />
                </li>
                <li className="font-semibold">Name : {product.name}</li>
                <li className="font-semibold">Quantity : {product.quantity}</li>
                <li className="font-semibold">Price : {product.price}</li>
                    <li className="font-semibold">
                        {balance.amount >= product.price ? (
                        <button onClick={() => handleBuyProduct(product)} className=" transition delay-150 duration-300 ease-in-out bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                            >
                                Buy
                            </button>
                    ) : (<><button disabled={true} className="disabled:opacity-50  bg-red-500 text-white  font-bold uppercase text-sm px-6 py-2 rounded shadow" type="button"
                        >
                            Buy
                        </button></>)}
                    </li>
            </ul>
        </div>
    )
}

export default Product
