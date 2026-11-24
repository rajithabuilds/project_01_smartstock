
import { useState } from "react";
import "./App.css";
import DashboardCard from "./components/DashboardCard";

function App() {
  const [totalSales, setTotalSales] = useState(52);
  const [totalStock, setTotalStock] = useState(105);

  function handleStockUpdate() {
    setTotalStock(prev => prev - 1);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>SmartStock</h1>
        <p>Restaurant Inventory Management</p>
      </header>

      <section className="dashboard">
        <DashboardCard
          title="Total Stock"
          value={totalStock}
          description="Units available"
        />

        <DashboardCard
          title="Total Products"
          value={6}
          description="Active products"
        />

        <DashboardCard
          title="Total Sales"
          value={totalSales}
          description="Units sold today"
        />

        <DashboardCard
          title="Low Stock Items"
          value={2}
          description="Products need attention"
        />
      </section>

      <button onClick={() => setTotalSales(totalSales + 1)}>
        Record 1 Sale
      </button>
      <button onClick={handleStockUpdate}>
        Record 1 stock
      </button>
    </div>
  );
}

export default App;
