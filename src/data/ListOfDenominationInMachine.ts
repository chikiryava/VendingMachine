import {IDenomination} from "../interfaces/Denomination";

export const listOfDenominationInMachine:IDenomination[] =[
    {
        denomination: "1 рубль",
        value: 1,
        quantity: Math.floor(Math.random() * (200) + 1)
    },
    {
        denomination: "5 рублей",
        value:5,
        quantity: Math.floor(Math.random() * (200) + 1)
    },
    {
        denomination: "10 рублей",
        value:10,
        quantity: Math.floor(Math.random() * (200) + 1)
    },
    {
        denomination: "50 рублей",
        value:50,
        quantity: Math.floor(Math.random() * (200) + 1)
    },
    {
        denomination: "100 рублей",
        value:100,
        quantity: Math.floor(Math.random() * (200) + 1)
    },
    {
        denomination: "500 рублей",
        value:500,
        quantity: Math.floor(Math.random() * (200) + 1)
    },
    {
        denomination: "1000 рублей",
        value:1000,
        quantity: Math.floor(Math.random() * (200) + 1)
    }
]
