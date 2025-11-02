import React, { useState, useMemo } from "react";
import "./Books.css";
import image1 from "../assets/image1.png";

const SAMPLE_BOOKS = [
  { id: 1, title: "The Power of Habit", author: "Charles Duhigg", price: 299, category: "Self-help", image: image1 },
  { id: 2, title: "Atomic Habits", author: "James Clear", price: 349, category: "Self-help", image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, title: "Think and Grow Rich", author: "Napoleon Hill", price: 279, category: "Motivation", image: "https://m.media-amazon.com/images/I/81H1KfRxtbL._AC_UF1000,1000_QL80_.jpg" },
  { id: 4, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", price: 320, category: "Finance", image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg" },
  { id: 5, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", price: 340, category: "Self-help", image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg" },
  { id: 6, title: "Deep Work", author: "Cal Newport", price: 310, category: "Productivity", image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg" },
  { id: 7, title: "Ikigai", author: "Héctor García", price: 290, category: "Philosophy", image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg" },
  { id: 8, title: "Can't Hurt Me", author: "David Goggins", price: 360, category: "Motivation", image: "https://m.media-amazon.com/images/I/71pZOPKQyoL._AC_UF1000,1000_QL80_.jpg" },
  { id: 9, title: "The 5 AM Club", author: "Robin Sharma", price: 330, category: "Self-help", image: "https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_UF1000,1000_QL80_.jpg" },
  { id: 10, title: "The Psychology of Money", author: "Morgan Housel", price: 350, category: "Finance", image: "https://m.media-amazon.com/images/I/81Lb75rUhLL._AC_UF1000,1000_QL80_.jpg" },
  { id: 11, title: "To Kill a Mockingbird", author: "Harper Lee", price: 280, category: "Fiction", image: "https://m.media-amazon.com/images/I/81OtwkiB5eL._AC_UF1000,1000_QL80_.jpg" },
  { id: 12, title: "1984", author: "George Orwell", price: 270, category: "Fiction", image: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg" },
  { id: 13, title: "The Alchemist", author: "Paulo Coelho", price: 260, category: "Fiction", image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg" },
  { id: 14, title: "Sapiens", author: "Yuval Noah Harari", price: 380, category: "History", image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg" },
  { id: 15, title: "Educated", author: "Tara Westover", price: 310, category: "Biography", image: "https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UF1000,1000_QL80_.jpg" },
  { id: 16, title: "The Silent Patient", author: "Alex Michaelides", price: 340, category: "Thriller", image: "https://m.media-amazon.com/images/I/81UwbTg5hDL._AC_UF1000,1000_QL80_.jpg" },
  { id: 17, title: "Becoming", author: "Michelle Obama", price: 370, category: "Biography", image: "https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg" },
  { id: 18, title: "The Lean Startup", author: "Eric Ries", price: 300, category: "Business", image: "https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UF1000,1000_QL80_.jpg" },
  { id: 19, title: "Start with Why", author: "Simon Sinek", price: 320, category: "Business", image: "https://m.media-amazon.com/images/I/71aG+xDKSYL._AC_UF1000,1000_QL80_.jpg" },
  { id: 20, title: "Cracking the Coding Interview", author: "Gayle Laakmann McDowell", price: 450, category: "Programming", image: "https://m.media-amazon.com/images/I/61kqk9t3O0L._AC_UF1000,1000_QL80_.jpg" },
];

export default function Books() {
  const [books] = useState(SAMPLE_BOOKS);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [buyNowBook, setBuyNowBook] = useState(null);
  const [buyQty, setBuyQty] = useState(1);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(books.map((b) => b.category)))],
    [books]
  );

  const filtered = useMemo(() => {
    let res = books.filter((b) =>
      (b.title + b.author).toLowerCase().includes(query.toLowerCase())
    );
    if (category !== "All") res = res.filter((b) => b.category === category);
    if (sortBy === "price-asc") res = res.slice().sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") res = res.slice().sort((a, b) => b.price - a.price);
    else if (sortBy === "title") res = res.slice().sort((a, b) => a.title.localeCompare(b.title));
    return res;
  }, [books, query, category, sortBy]);

  const cartCount = cart.reduce((s, it) => s + it.qty, 0);
  const cartTotal = cart.reduce((s, it) => s + it.qty * it.book.price, 0);

  const addToCart = (book) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === book.id);
      if (found) return prev.map((p) => (p.id === book.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { id: book.id, qty: 1, book }];
    });
  };

  const removeFromCart = (bookId) => setCart((prev) => prev.filter((p) => p.id !== bookId));
  const changeQty = (bookId, qty) => {
    if (qty <= 0) return removeFromCart(bookId);
    setCart((prev) => prev.map((p) => (p.id === bookId ? { ...p, qty } : p)));
  };

  const handleBuyNow = (book) => {
    setBuyNowBook(book);
    setBuyQty(1);
  };

  const confirmBuyNow = async () => {
    try {
      const userName = localStorage.getItem("userName") || "Guest User";
      const res = await fetch("https://bookstore-zxrx.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          bookName: buyNowBook.title,
          author: buyNowBook.author,
          price: buyNowBook.price,
          quantity: buyQty,
        }),
      });
      const data = await res.json();
      if (res.ok) alert(`✅ Purchased ${buyQty} "${buyNowBook.title}" successfully!`);
      else alert(`❌ Error: ${data.message}`);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while storing purchase!");
    }
    setBuyNowBook(null);
  };

  return (
    <div className="books-page">
      <header className="books-header">
        <div className="books-header-left">
          <h1>📚 Explore Books</h1>
          <p className="subtitle">Curated picks across categories — find your next great read.</p>
        </div>

        <div className="books-controls">
          <input className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select className="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="title">Sort: Title</option>
          </select>
          <button className="cart-btn" onClick={() => setShowCart(true)}>🛒 Cart <span className="cart-count">{cartCount}</span></button>
        </div>
      </header>

      <main className="books-grid">
        {filtered.map((book) => (
          <article className="book-card" key={book.id}>
            <div className="cover-wrap">
              <img className="cover" src={book.image} alt={book.title} />
            </div>
            <div className="book-info">
              <h2>{book.title}</h2>
              <p>by {book.author}</p>
              <p className="book-category">{book.category}</p>
              <div className="book-bottom">
                <div className="price">₹{book.price}</div>
                <div className="actions">
                  <button className="buy-now" onClick={() => handleBuyNow(book)}>Buy Now</button>
                  <button className="add-cart" onClick={() => addToCart(book)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </main>

      {showCart && (
        <div className="cart-drawer">
          <div className="cart-panel">
            <div className="cart-header">
              <h3>Your Cart</h3>
              <button className="close" onClick={() => setShowCart(false)}>×</button>
            </div>
            {cart.length === 0 ? (
              <div className="empty">Your cart is empty.</div>
            ) : (
              <>
                <ul className="cart-list">
                  {cart.map((it) => (
                    <li key={it.id} className="cart-item">
                      <img src={it.book.image} alt={it.book.title} />
                      <div className="meta">
                        <div className="m-title">{it.book.title}</div>
                        <div className="m-price">₹{it.book.price}</div>
                        <div className="qty-control">
                          <button onClick={() => changeQty(it.id, it.qty - 1)}>-</button>
                          <span>{it.qty}</span>
                          <button onClick={() => changeQty(it.id, it.qty + 1)}>+</button>
                        </div>
                      </div>
                      <button className="remove" onClick={() => removeFromCart(it.id)}>Remove</button>
                    </li>
                  ))}
                </ul>

                <div className="cart-footer">
                  <div className="total">Total: ₹{cartTotal}</div>
                  <button className="checkout" onClick={() => { alert(`Checked out! Total ₹${cartTotal}. Thank you!`); setCart([]); setShowCart(false); }}>Checkout</button>
                  <button className="close" onClick={() => setShowCart(false)}>Close</button>
                </div>
              </>
            )}
          </div>
          <div className="cart-backdrop" onClick={() => setShowCart(false)} />
        </div>
      )}

      {buyNowBook && (
        <div className="modal-wrap">
          <div className="modal">
            <h3>Buy Now</h3>
            <div className="modal-body">
              <img src={buyNowBook.image} alt={buyNowBook.title} />
              <div className="info">
                <h4>{buyNowBook.title}</h4>
                <p>by {buyNowBook.author}</p>
                <p className="price-lg">₹{buyNowBook.price}</p>
                <div className="qty-control">
                  <button onClick={() => setBuyQty(Math.max(1, buyQty - 1))}>-</button>
                  <span>{buyQty}</span>
                  <button onClick={() => setBuyQty(buyQty + 1)}>+</button>
                </div>
                <p>Total: ₹{buyNowBook.price * buyQty}</p>
              </div>
            </div>
            <div className="modal-actions">
              <button className="confirm" onClick={confirmBuyNow}>Confirm Purchase</button>
              <button className="close" onClick={() => setBuyNowBook(null)}>Cancel</button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setBuyNowBook(null)} />
        </div>
      )}
    </div>
  );
}
