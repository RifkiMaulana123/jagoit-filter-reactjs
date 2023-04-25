
import React, { useState } from "react";
import Data from "./component/Data";
import Card from "./component/Card";
import Buttons from "./component/Buttons";
import SearchBar from "./component/SearchBar"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [item, setItem] = useState(Data);
  
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (dataCategory) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === dataCategory;
    });
    setItem(newItem);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold" style={{color:"red"}}>Pinterest Color Filter</h1>
          <SearchBar 
          filterItem={filterItem}
          setItem={setItem}
          menuItems={menuItems}          
          />
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
        <Card
          item={item}/>
          </div>
      </div>
    </>
  );
};

export default App;