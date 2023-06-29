import React from "react";
interface Props{
    balance:number,
    addBalance:()=>void
}
export function BalanceSettings({balance,addBalance}:Props){

    return(
        <>
            <p className={"pBalance"}>Баланс: {balance}</p>
            <select id={"denomination"} className={"selectDenomination"}>
                <option selected disabled >Пополнить на..</option>
                <option value={50}>50 рублей</option>
                <option value={100}>100 рублей</option>
                <option value={500}>500 рублей</option>
                <option value={1000}>1000 рублей</option>
            </select>
            <button className={"addBalanceButton"} onClick={addBalance}>Пополнить баланс</button>
        </>
    )
}
export default BalanceSettings