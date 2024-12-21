import Input from '@/components/input/Input';
import React, { useEffect } from 'react'

export default function UpdateQty({ setData = () => { }, product }) {

    const onUpdate = (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const qty = Object.fromEntries(fd);
        console.log(qty);
    }
    return (
        <div>
            <table className="w-full">
                <tbody>

                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Product</td>
                        <td className=" inline-block px-2 py-1 rounded-md mt-4">{product.product}</td>
                    </tr>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Price</td>
                        <td className=" inline-block px-2 py-1 rounded-md mt-4">{product?.productId.price}</td>
                    </tr>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">Quantity</td>
                        <td className=" inline-block px-2 py-1 rounded-md mt-2">
                            <form onSubmit={onUpdate}>
                                <Input type="number" name="qty" defaultValue={product.qty} />
                            </form>
                        </td>
                    </tr>
                    <tr className="border border-x-0 border-t-0">
                        <td className="py-5 px-2">total price</td>
                        <td className=" inline-block px-2 py-1 rounded-md mt-4">{product.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
