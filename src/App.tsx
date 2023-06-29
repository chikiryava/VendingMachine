import React from 'react';
import {SelectProduct} from "./components/SelectProduct";
import Balance from "./components/Balance";
import ProductsAndDenomination from "./components/ProductsAndDenomination";
import {Hooks} from "./hooks/hooks";

function App() {
   const {balance,denomination,products,handleSelectChange,addBalance,returnChange}=Hooks()
  return (
      <>
        <header>Vending machine</header>
          <ProductsAndDenomination denominationList={denomination} productsList={products}></ProductsAndDenomination>
          <div className={"block"}>
              <Balance balance={balance} addBalance={addBalance}></Balance>
              <SelectProduct products={products} handleSelectChange={handleSelectChange} returnChange={returnChange}></SelectProduct>
          </div>
      </>
  )
}

export default App;
