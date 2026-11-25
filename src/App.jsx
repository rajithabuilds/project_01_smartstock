
import { useState } from "react";
import "./App.css";
import DashboardCard from "./components/DashboardCard";

function App() {
  const [totalSales, setTotalSales] = useState(52);
  const [totalStock, setTotalStock] = useState(105);
  const [products, setProducts] = useState([
    { id: 1, name: "Orginal Chicken", stock: 30 },
    { id: 2, name: "Wicked Wings", stock: 20 },
    { id: 3, name: "Boneless", stock: 15 },
    { id: 4, name: "Tenders", stock: 18 },
    { id: 5, name: "Zingers", stock: 12 },
    { id: 6, name: "Original Fillets", stock: 10 }
  ])
  const totalProducts = products.length;
  const [newProductName, setNewProductName] = useState("");
  const [newProductStock, setNewProductStock] = useState("");

  function handleStockUpdate(productId) {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? {
            ...product,
            stock: Math.max(0, product.stock - 1)
          }
          : product
      )
    );
  }

  function handleRestock(productId) {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? { ...product, stock: product.stock + 1 }
          : product
      )
    );
  }
  function handleAddProduct() {
    if (newProductName.trim() === "") {
      alert("Please enter a product name");
      setNewProductName("");
      setNewProductStock("");
      return;
    }

    if (newProductStock === "" || Number(newProductStock) < 0) {
      alert("Please enter a valid stock quantity");
      setNewProductName("");
      setNewProductStock("");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: newProductName.trim(),
      stock: Number(newProductStock)
    };

    setProducts(prevProducts => [...prevProducts, newProduct]);

    setNewProductName("");
    setNewProductStock("");
  }



  // function handleAddProduct() {
  //   setTotalProducts(prev => prev + 1);
  // }

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
          value={totalProducts}
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
      <button onClick={handleAddProduct}>
        Add New Product
      </button>

      <section className="add-product-section">
        <h2>Add New Product</h2>

        <input
          type="text"
          placeholder="Enter product name"
          value={newProductName}
          onChange={(event) => setNewProductName(event.target.value)}
        />

        <input
          type="number"
          placeholder="Enter initial stock"
          value={newProductStock}
          onChange={(event) => setNewProductStock(event.target.value)}
        />

        <button onClick={handleAddProduct}>
          Add Product
        </button>
      </section>

      <section className="inventory-section">
        <div className="section-header">
          <h2>Product Inventory</h2>
          <p>Monitor your restaurant stock levels</p>
        </div>

        <div className="inventory-table">
          <div className="inventory-row inventory-heading">
            <span>Product Name</span>
            <span>Available Stock</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {products.map(product => (
            <div className="inventory-row" key={product.id}>
              <span className="product-name">{product.name}</span>

              <span className="stock-value">
                {product.stock} units
              </span>

              <span className={
                product.stock <= 12 ? "stock-low" : "stock-good"
              }>
                {product.stock <= 12 ? "Low Stock" : "In Stock"}
              </span>

              <div className="action-buttons">
                <button
                  className="use-stock-btn"
                  onClick={() => handleStockUpdate(product.id)}
                  disabled={product.stock === 0}
                >
                  Use 1
                </button>

                <button
                  className="restock-btn"
                  onClick={() => handleRestock(product.id)}
                >
                  Restock +1
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;
