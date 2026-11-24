
import "./App.css";
import DashboardCard from "./components/DashboardCard";

function App() {
  return (
    <div className="container">

      <header className="header">
        <h1>SmartStock - Live Operation</h1>
        <p>Restaurant Inventory Management</p>
      </header>

      <section className="dashboard">

        <DashboardCard
          title="Total Stock"
          value={105}
          description="Units available"
        />

        <DashboardCard
          title="Total Products"
          value={6}
          description="Active products"
        />

        <DashboardCard
          title="Total Sales"
          value={52}
          description="Units sold today"
        />

        <DashboardCard
          title="Low Stock Items"
          value={2}
          description="Products need attention"
        />

      </section>

    </div >
  );
}

export default App;
