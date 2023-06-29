import React from "react";
import {IProduct} from "../interfaces/Products";
interface Props {
     handleSelectChange:(event: React.ChangeEvent<HTMLSelectElement>)=>void,
     products:IProduct[]
     returnChange:()=>void
}
export function SelectProduct({handleSelectChange,products,returnChange}:Props)     {

    return (
        <>
        <select onChange={handleSelectChange} className={"selectProduct"} id={"select"}>
            <option disabled
                    selected
                    >Выберите продукт
            </option>
            {products.map((product) => (
                <option value={product.name}>
                    {product.name}: {product.price} рублей
                </option>
            ))}
        </select>
            <button className={"returnChangeButton"} onClick={returnChange}>Вернуть сдачу</button>
            </>

    )
}
export default SelectProduct;


