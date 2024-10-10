import React, { useState } from 'react'
import './App.css'

export default function App() {

  const [expression, setexpression] = useState('');

  const [result, setResult] = useState("");

  const [val, setvalue] = useState(1);

  const handleclick = (e) => {

    if(e.target.name === "√") 
    { 
      setvalue(2);
      console.log("hii we are in if")

    }

    setexpression(expression.concat(e.target.name))
  }



  const handleEqual = () => 
  {
    try {

      let exp = expression;
      if (val === 2)
       {
        exp = exp.replace('√', '');
        setvalue(1);
        setResult((Math.sqrt(Number(exp))).toString());

      }

      else 
      {
        console.log("I am running else wala part")
        setResult(eval(exp).toString());
      }

    }
    catch
     {
      setResult("ERROR");
     }
  }

    const handleClear = () => {
      setResult("")
      setexpression("")
    }

    return (
      <> <div className="wrapper">
        <div className="container">
          <form action="">
            <input type="text" value={result || expression} />
          </form>
          <div className="keypad">

            <div className="fc">
              {/* <button name="!" onClick={handleclick} className="btn">! </button> */}
              <button onClick={handleClear} id="clear" className="btn light-grey">clear</button>
              <button name="%" onClick={handleclick} className="btn light-grey">%</button>
              <button name="/" onClick={handleclick} className="btn orange">&divide;</button>
            </div>

            <div className="sc">
              <button name="7" onClick={handleclick} className="btn">7</button>
              <button name="8" onClick={handleclick} className="btn">8</button>
              <button name="9" onClick={handleclick} className="btn">9</button>
              <button name="*" onClick={handleclick} className="btn orange">&times;</button>
            </div>
            <div className="tc">
              <button name="4" onClick={handleclick} className="btn">4</button>
              <button name="5" onClick={handleclick} className="btn">5</button>
              <button name="6" onClick={handleclick} className="btn">6</button>
              <button name="-" onClick={handleclick} className="btn orange">&ndash;</button>
            </div>
            <div className="fourthc">

              <button name="1" onClick={handleclick} className="btn">1</button>
              <button name="2" onClick={handleclick} className="btn">2</button>
              <button name="3" onClick={handleclick} className="btn">3</button>
              <button name="+" onClick={handleclick} className="btn orange">+</button>
            </div>
            <div className="fifthc">
              <button name="0" onClick={handleclick} className='btn'>0</button>
              <button name="." onClick={handleclick} className="btn">.</button>
              <button name="=" onClick={handleEqual} className="btn ">=</button>
              <button name="√" onClick={handleclick} className="btn orange">√</button>
            </div>

          </div>
        </div>
      </div>


      </>

    )
  }
