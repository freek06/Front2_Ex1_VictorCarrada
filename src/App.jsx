import { useState } from "react";
import Card from "./Card";

function App() {
  // Estados para manejar los valores de los inputs y la validación
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handlers para actualizar los estados de los inputs
  const handleInput1Change = (e) => setInput1(e.target.value);
  const handleInput2Change = (e) => setInput2(e.target.value);

  // Handler para el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del primer input: al menos 3 caracteres y no empezar con un espacio
    if (input1.length >= 3 && input1[0] !== ' ' && input2.length >= 6) {
      setError(false);
      setSubmitted(true);
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
    <div className="App">
      <h1>Sonido de los Animales de la Granja</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese el nombre de un animal"
          value={input1}
          onChange={handleInput1Change}
        />
        <input
          type="text"
          placeholder="Sonido del animal (min 6 caracteres)"
          value={input2}
          onChange={handleInput2Change}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error-message">Por favor chequea que la información sea correcta.</p>}
      {submitted && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;
