import {IDenomination} from "../interfaces/Denomination";
import {IProduct} from "../interfaces/Products";

interface Props{
    denominationList:IDenomination[],
    productsList:IProduct[]
}
function ProductsAndDenomination({denominationList,productsList}:Props){

    return(
        <div className={"machineInfo"}>
            <p>Средства в аппарате</p>
            {denominationList.map((denomination)=>
                <p>{denomination.denomination}: {denomination.quantity}</p>)}
            <p>Продукты в аппарате</p>
            {productsList.map((product) =>(
                <p>{product.name}: {product.quantity} шт.</p>
            ))}
        </div>
    )


}

export default ProductsAndDenomination