import React, {useEffect, useState} from "react";
import {IProduct} from "../interfaces/Products";
import {IDenomination} from "../interfaces/Denomination";
import {productsInVendingMachine} from "../data/ProductsInVendingMachine";
import {listOfDenominationInMachine} from "../data/ListOfDenominationInMachine";


export function Hooks(){
    const [denominationList,setDenominationList]
        = useState<IDenomination[]>(listOfDenominationInMachine.sort((a, b)=>b.value-a.value)) //Номинал в аппарате

    const[productsList] =useState<IProduct[]>(productsInVendingMachine.sort((a, b)=>b.price-a.price)) //Продукты в аппарате

    const[balance,setBalance]= useState(0) // Баланс
    const [clicked,setClicked]=useState(false)
    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {  //Выбор продукта
        for(const i of productsList){
            if(event.target.value===i.name){
                buyProducts(event.target.selectedIndex-1)
                event.target.selectedIndex=0
                setClicked(true)
            }
        }
    }
    function buyProducts(productIndex:number) {                     //Покупка продукта
        if(productsList[productIndex].quantity<=0){
            alert("Выбранного продукта нет в наличии")
            return
        }
        if(productsList[productIndex].price>balance){
            alert("У вас не хватает средств")
            return
        }
        productsList[productIndex].quantity--
        setBalance(balance-productsList[productIndex].price)
        alert(`Вы купили продукт: ${productsList[productIndex].name}`)
    }
    function addBalance() {                                                                                         //Пополнение баланса
        const select = document.getElementById("denomination") as HTMLSelectElement
        for(const denomination of denominationList){
            if(denomination.value===Number(select.value)){
                setBalance(balance+denomination.value)
                denomination.quantity++
                setClicked(true)
                alert("Вы добавили "+ select.value+ " рублей")
            }
        }
    }
    function returnChange() {                                                   //Выдача сдачи
        let currientBalance = balance

        for (const denomination of denominationList) {

            if(denomination.value<=currientBalance&&denomination.value!==1000){
                let count = Math.floor(currientBalance/denomination.value)
                if(denomination.quantity<=count){
                    count=denomination.quantity
                }
                currientBalance-=denomination.value*count
                denomination.quantity-=count
            }
        }
        alert(`Ваша сдача: ${balance-currientBalance} рублей` )
        if(currientBalance===0) {
            setBalance(currientBalance)
            setClicked(true)
            return
        }
        returnProducts(currientBalance)


    }
    function returnProducts(currientBalance:number){                        //Выдача продуктов при отсутсвии возможности вернуть деньгами
        let benefit=-500000
        let productsCount= 0
        let productIndex = 0
        for(const prod of productsList){
            let count = Math.ceil(currientBalance/prod.price)
                if(prod.quantity<count)
                    continue
            let productPrice = currientBalance-count*prod.price

            if(benefit<productPrice) {
                benefit = productPrice
                productIndex = prod.id
                productsCount = count
            }
        }
        setBalance(0)
        for(const product of productsList){
            if(productIndex === product.id){
                alert(`Из-за нехватки сдачи вам выдано ${productsCount} продукта ${product.name}`)
                product.quantity-=productsCount
                break;
            }
        }
        setClicked(true)

    }
        useEffect(() => {
            setClicked(false)
        }, [clicked,balance])

        return {
            denomination: denominationList,
            setDenomination: setDenominationList,
            setClicked,
            balance,
            setBalance,
            products: productsList,
            handleSelectChange,
            addBalance,
            returnChange
        }
    }
