import "./App.css";
import React, { useState } from "react";

function App() {
  const [pantalla, setPantalla] = useState("0");
  const [sumar, setSumar] = useState(false);
  const [restar, setRestar] = useState(false);
  const [dividir, setDividir] = useState(false);
  const [multiplicar, setMultiplicar] = useState(false);
  const [resultado, setResultado] = useState("0");

  // Operadores aritmeticos
  const sumarfunc = () => {
    if (pantalla !== 0 && sumar === false) {
      setResultado(resultado + pantalla);
      setSumar(true);
      setPantalla("0");
    } else if (pantalla !== 0 && sumar === true) {
      funcResultado();
    }
  };

  //Resultado
  const funcResultado = () => {
    setPantalla(resultado);
    setSumar(false);
  };

  // Reinicar pantalla
  const reiniciar = () => {
    setPantalla("0");
  };

  //Los numeros que estan en pantalla se cambian
  const handlerpantalla = (e) => {
    setPantalla(e.target.value);
  };

  // Cargar numeros a la pantalla
  const num0 = () => {
    if (pantalla !== "0") setPantalla(pantalla + "0");
  };
  const num7 = () => {
    if (pantalla === "0") setPantalla(7);
    else setPantalla(pantalla + "7");
  };
  const num8 = () => {
    if (pantalla === "0") setPantalla(8);
    else setPantalla(pantalla + "8");
  };
  const num9 = () => {
    if (pantalla === "0") setPantalla(9);
    else setPantalla(pantalla + "9");
  };
  const num4 = () => {
    if (pantalla === "0") setPantalla(4);
    else setPantalla(pantalla + "4");
  };
  const num5 = () => {
    if (pantalla === "0") setPantalla(5);
    else setPantalla(pantalla + "5");
  };
  const num6 = () => {
    if (pantalla === "0") setPantalla(6);
    else setPantalla(pantalla + "6");
  };
  const num1 = () => {
    if (pantalla === "0") setPantalla(1);
    else setPantalla(pantalla + "1");
  };
  const num2 = () => {
    if (pantalla === "0") setPantalla(2);
    else setPantalla(pantalla + "2");
  };
  const num3 = () => {
    if (pantalla === "0") setPantalla(3);
    else setPantalla(pantalla + "3");
  };

  return (
    <div className="App">
      <header className="">Calculadora wotanMaxpro-3000</header>
      <main className="calculadora-body">
        {/* pantalla de la calculadora */}
        <div>
          <input
            onChange={(e) => {
              handlerpantalla(e);
            }}
            value={pantalla}
          />
        </div>

        {/* Botones de la calculadora */}
        <div className="containerButtons">
          <div>
            <button
              onClick={() => {
                num7();
              }}
              className="Buttons numeros"
            >
              7
            </button>
            <button
              onClick={() => {
                num8();
              }}
              className="Buttons numeros"
            >
              8
            </button>
            <button
              onClick={() => {
                num9();
              }}
              className="Buttons numeros"
            >
              9
            </button>
            <button
              onClick={() => {
                reiniciar();
              }}
              className="Buttons menues"
            >
              C
            </button>
            <button
              onClick={() => {
                num4();
              }}
              className="Buttons numeros"
            >
              4
            </button>
            <button
              onClick={() => {
                num5();
              }}
              className="Buttons numeros"
            >
              5
            </button>
            <button
              onClick={() => {
                num6();
              }}
              className="Buttons numeros"
            >
              6
            </button>
            <button className="Buttons menues">÷</button>
            <button
              onClick={() => {
                num1();
              }}
              className="Buttons numeros"
            >
              1
            </button>
            <button
              onClick={() => {
                num2();
              }}
              className="Buttons numeros"
            >
              2
            </button>
            <button
              onClick={() => {
                num3();
              }}
              className="Buttons numeros"
            >
              3
            </button>
            <button className="Buttons menues">X</button>
            <button
              onClick={() => {
                num0();
              }}
              className="Buttons numeros"
            >
              0
            </button>
            <button className="Buttons numeros">.</button>
            <button
              onClick={() => {
                sumarfunc();
              }}
              className="Buttons menues"
            >
              +
            </button>
            <button className="Buttons menues">-</button>
            <button
              onClick={() => {
                funcResultado();
              }}
              className="Buttons igual"
            >
              =
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
