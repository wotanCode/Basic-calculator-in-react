import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="">Calculadora wotanMaxpro-3000</header>
      <main className="calculadora-body">
        <div>
          <input></input>
        </div>
        {/* Numeros de la calculadora */}
        <div className="containerButtons">
          <div>
            <button className="Buttons numeros">7</button>
            <button className="Buttons numeros">8</button>
            <button className="Buttons numeros">9</button>
            <button className="Buttons menues">C</button>
            <button className="Buttons numeros">4</button>
            <button className="Buttons numeros">5</button>
            <button className="Buttons numeros">6</button>
            <button className="Buttons menues">÷</button>
            <button className="Buttons numeros">1</button>
            <button className="Buttons numeros">2</button>
            <button className="Buttons numeros">3</button>
            <button className="Buttons menues">X</button>
            <button className="Buttons numeros">0</button>
            <button className="Buttons numeros">.</button>
            <button className="Buttons menues">+</button>
            <button className="Buttons menues">-</button>
            <button className="Buttons igual numpropiedades">=</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
