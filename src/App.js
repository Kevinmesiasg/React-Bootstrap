import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-12">
            <h2>Pagina de calculo de remuneraciones</h2>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-6">
            <h3>Datos sueldo bruto</h3>
          </div>
          <div className="col-lg-6">
            <h3>Resultados</h3>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-6">
            <label htmlfor="exampleFormControlInput1" class="form-label">INGRESE SUELDO BRUTO</label>
            <input type="email" class="form-control" placeholder="Sueldo Bruto"></input>
          </div>
          <div className="col-lg-6">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;

