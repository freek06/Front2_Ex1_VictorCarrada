function Card({ input1, input2 }) {
    return (
      <div className="card">
        <h2>Información Ingresada</h2>
        <p>El animal es un/una: {input1}</p>
        <p>y hace: {input2}</p>
      </div>
    );
  }
  
  export default Card;
  