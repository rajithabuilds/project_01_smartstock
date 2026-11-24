
import "./App.css";

function App() {
  return (
    <div className="container">

      <header className="header">
        <h1>SmartStock - Live Operation</h1>
        <p>Restaurant Inventory Management</p>
      </header>

      <section className="dashboard">

        <div className="card">
          <h3>Total Stock</h3>
          <h2>120</h2>
          <p>Units available</p>
        </div>

        <div className="card">
          <h3>Total Products</h3>
          <h2>7</h2>
          <p>Active products</p>
        </div>

        <div className="card">
          <h3>Total Sales</h3>
          <h2>52</h2>
          <p>Units sold today</p>
        </div>

      </section>

    </div>
  );
}

export default App;
