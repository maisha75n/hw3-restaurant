import { useState } from "react";
import menuData from "./data/menuData";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <span className="navbar-brand">Red Lantern</span>
        <div className="navbar-nav">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#menu">Menu</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="container mt-5">
        <h1 className="text-center mb-3">Welcome to Red Lantern</h1>
        <p className="text-center">
          Authentic Chinese cuisine made with fresh ingredients and traditional recipes.
        </p>
      </section>

      {/* Menu */}
      <section id="menu" className="container mt-5">
        <h2 className="mb-4">Menu</h2>
        <div className="row">
          {menuData.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.category}</p>
                  <p className="card-text">${item.price.toFixed(2)}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart */}
      <section className="container mt-5">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item.name} — ${item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p><strong>Total:</strong> ${total.toFixed(2)}</p>
            <button className="btn btn-danger" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </section>

      {/* About */}
      <section id="about" className="container mt-5">
        <h2>About Us</h2>
        <p>
          Red Lantern is a family-owned Chinese restaurant offering classic dishes
          inspired by traditional flavors. Our goal is to provide a warm dining
          experience with high-quality food.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="container mt-5 mb-5">
        <h2>Contact</h2>
        <p>📍 123 Mott Street, New York, NY</p>
        <p>📞 (212) 555-1234</p>
        <p>🕒 Open daily from 11:00 AM – 10:00 PM</p>
      </section>
    </div>
  );
}

export default App;
