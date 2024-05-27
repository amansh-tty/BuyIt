import React, { useState } from "react";
import ducati from "./images/ducati.jpeg";
import mustang from "./images/mustang.jpeg";
const Item = ({ name, value, pic, onIncrement, onDecrement }) => {
  return (
    <div className="flex flex-col items-center justify-center grid-cols-4 gap-4 ">
      <img src={pic} alt={name} />
      <p>{name}</p>
      <input type='text' placeholder={value} />
      <div className="flex flex-row space-x-2">
        <button onClick={onIncrement}>+</button>
        <span>{value}</span>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

const App = () => {
  const [worth, setWorth] = useState(100000);
  const [value,setValue]= useState(0)
  const handleIncrement = (itemValue) => {
    setValue(value+1)
    setWorth(worth + itemValue);
  };
  const handleDecrement = (itemValue) => {
    setValue(value-1)
    setWorth(worth - itemValue);
  };

  const items = [
    { name: "a", value: 10, img: ducati },
    { name: "b", value: 20, img: ducati },
    { name: "c", value: 30, img: ducati },
    { name: "b", value: 20, img: ducati },
    { name: "b", value: 20, img: mustang },
    { name: "b", value: 20, img: ducati },
    { name: "b", value: 20, img: ducati },
    { name: "b", value: 20, img: ducati },
    { name: "b", value: 20, img: ducati }
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-bold text-2xl">My Worth is : ${worth}</h1>
      <div className="flex flex-wrap ">
        {items.map((item, index) => (
          <div className="card m-2" style={{ cursor: "pointer" }} key={index}>
            <Item
              key={index}
              name={`${item.name}-item`}
              pic={item.img}
              value={item.value}
              onIncrement={() => handleIncrement(item.value)}
              onDecrement={() => handleDecrement(item.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
