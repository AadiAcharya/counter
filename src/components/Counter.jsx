import React, { useEffect, useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1)

  function handelChange(element) {
    console.log("element.target.value");
    setQuantity(Number(element.target.value))
  }


  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div className="flex flex-col bg-blue-500">
      <h2>Count : {count} </h2>
      {/* <div className='body'>
<button onClick={addButton}>[ + ]</button>
<button onClick={minusButton}>[ - ]</button>
<button onClick={reset}>[Reset]</button>
   </div> */}

      <div className="flex flex-col gap-4 items-center text-3xl text-white   ">
        <div className="flex gap-4">
          <button onClick={()=>  setCount(count+ quantity)}>[+]</button>
          <label htmlFor="quantity" className="bg-transparent ">
            <select
              name=""
              id="quantity"
              onChange={handelChange}
              className="bg-transparent"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
        </div>
        <div>
          <button onClick={() => setCount(count - 1)}>[-]</button>
        </div>

        <button onClick={() => setCount(0)}>[reset]</button>
      </div>
    </div>
  );
};

export default Counter;
