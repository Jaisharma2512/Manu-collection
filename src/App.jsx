// src/App.jsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/css/styles.css";

export default function App() {
  return (
    <>
      <Header />

      <nav>
        <a href="#categories">Categories</a>
        <a href="#featured">Featured</a>
        <a href="#gift">Gift Corner</a>
        <a href="#about">About Us</a>
        <a href="#glass-range">Glass Range</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <h2>Explore Premium Crockery, Appliances &amp; Gifts</h2>
        <p>
          Luxury for your kitchen. Essentials for every home. Gifts for every
          occasion.
        </p>
      </section>

      <section className="international-promo">
        <p>30 saal ka vishwaas aur quality! 🌟</p>
        <p>
          Bazpur se lekar Canada, UK, Australia, America aur Germany tak hamari
          crockery aur kitchenware ne har ghar mein apni khaas jagah banayi hai.
          💎 Ab humne apni services ko aur expand karte hue international
          shipping bhi shuru ki hai! ✈🌍
        </p>
        <p>
          Aur Bazpur ke 3 km ke radius mein hum laa rahe hain quick aur
          convenient home delivery service!
        </p>
      </section>

      <section className="diwali-promo">
        <h2>Diwali Dhamaka Sale! 🪔</h2>
        <ul>
          <li>
            Old gas stove ke badle mein naye gas stove par heavy discount.
          </li>
          <li>
            Special Gift Items combo sets available hain, under price range:
            400, 600, 800, 1000, 2000, 3000 aur bhi bahut kuch.
          </li>
          <li>
            Festival season mai purane cookers lane par naye cookers par bhari
            chhoot.
          </li>
        </ul>
        <button
          onClick={() =>
            window.open("https://wa.me/9412667937", "_blank", "noreferrer")
          }
        >
          Take quotation
        </button>
      </section>

      <section className="promotion">
        <img src="/kitchen.jpg" alt="Kitchen Offer" />
        <div className="promotion-text">
          <span style={{ fontSize: "1.22em", color: "#d18625" }}>
            Big discount when building a new kitchen
          </span>
          <span style={{ fontSize: "1.1em", color: "#3d3515" }}>
            नई रसोई बनाने पर बड़ी छूट
          </span>
          <span style={{ fontSize: "1.08em", color: "#7a5200" }}>
            ਨਵਾਂ ਰਸੋਈ ਘਰ ਬਣਾਉਣ ਉੱਤੇ ਵੱਡੀ ਛੂਟ
          </span>
          <button
            className="avail-btn"
            onClick={() =>
              window.open("https://wa.me/9412667937", "_blank", "noreferrer")
            }
          >
            Take quotation
          </button>
        </div>
      </section>

      <section id="categories" className="categories">
        <h2>Shop by Category</h2>
        <div className="grid">
          <div className="product-card">
            <img src="/water-purifier.jpg" alt="Water Purifiers" />
            <h3>Water Purifiers</h3>
          </div>
          <div className="product-card">
            <img src="/gasstove.jpg" alt="Gas Stoves" />
            <h3>Gas Stoves</h3>
          </div>
          <div className="product-card">
            <img src="/homeappliances.jpg" alt="Home Appliances" />
            <h3>Home Appliances</h3>
          </div>
          <div className="product-card">
            <img src="/giftitems.jpg" alt="Gift Items" />
            <h3>Gift Items</h3>
          </div>
          <div className="product-card">
            <img src="/ladiessuit.jpg" alt="Ladies Suits" />
            <h3>Ladies Suits</h3>
          </div>
        </div>
      </section>

      <section id="featured" className="featured">
        <h2>Featured Products</h2>
        <div className="grid">
          <div className="product-card">
            <img src="/ladiessuit.jpg" alt="Ladies Suits" />
            <h3>Ladies Suits</h3>
            <p>Stylish, designer suits for special occasions.</p>
            <a
              href="https://chat.whatsapp.com/L5I4kbAogir7YlVWCR6dij?mode=ems_share_t"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Take quotation
            </a>
          </div>
          <div className="product-card">
            <img src="/water-purifier.jpg" alt="Water Purifiers" />
            <h3>Water Purifiers</h3>
            <p>Safe, clean water for your home.</p>
            <a
              href="https://wa.me/9412667937"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Take quotation
            </a>
          </div>
          <div className="product-card">
            <img src="/Chimney.jpg" alt="Chimneys" />
            <h3>Chimneys</h3>
            <p>High-quality kitchen chimneys for a cleaner cooking environment.</p>
            <a
              href="https://wa.me/9412667937"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Take quotation
            </a>
          </div>
        </div>
      </section>

      {/* NEW Glass Range section */}
      <section id="glass-range" className="categories">
        <h2>Glass Range</h2>
        <div className="grid">
          <div className="product-card">
            <img src="/wine-glass.jpg" alt="Wine Glass" />
            <h3>Wine Glass</h3>
          </div>
          <div className="product-card">
            <img src="/juice-glass.jpg" alt="Juice Glass" />
            <h3>Juice Glass</h3>
          </div>
          <div className="product-card">
            <img src="/beer-glass.jpg" alt="Beer Glass" />
            <h3>Beer Glass</h3>
          </div>
          <div className="product-card">
            <img src="/water-glass.jpg" alt="Water Glass" />
            <h3>Water Glass</h3>
          </div>
        </div>
      </section>

      <section id="gift" className="gift">
        <h2>Gift Corner</h2>
        <p>
          Discover unique gifts for your loved ones: curated crockery sets,
          festive hampers, and exclusive home accessories!
        </p>
      </section>

      <section id="about" className="about">
        <h2>About Manu Collection</h2>
        <p>
          Situated in the heart of Bazpur, Manu Collection is the oldest
          crockery shop in town. We have proudly served our community for
          decades, offering quality crockery, essential home appliances, and
          beautiful gift items with unmatched customer care.
        </p>
      </section>

      <section className="why">
        <h2>Why Shop With Us?</h2>
        <ul>
          <li>Wide range of trusted brands</li>
          <li>Premium quality products</li>
          <li>Best price guarantee</li>
          <li>Expert customer care</li>
          <li>Fast shipping &amp; easy returns</li>
        </ul>
      </section>

      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          "Excellent variety and quick delivery. Bought a dinner set and water
          purifier—couldn't be happier!" - Riya S.
        </div>
        <div className="review">
          "Beautiful gift packaging. Will shop again!" - Arjun T.
        </div>
      </section>

      <section id="contact-form">
        <h2>Contact Us</h2>
        <form
          action="mailto:info@manucollection.com"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea id="message" name="message" rows="4" required />
          <br />
          <button type="submit">Send</button>
        </form>
      </section>

      <section className="trust">
        <h2>Our Commitment to You</h2>
        <p>
          At Manu Collection, we value your trust above everything. We adhere to
          strict ethical standards and full transparency to ensure you shop with
          confidence and peace of mind.
        </p>
        <ul>
          <li>100% Authentic and Quality Products</li>
          <li>Transparent and Honest Business Practices</li>
          <li>Easy Returns and Warranty on Products</li>
          <li>Dedicated Customer Support Team</li>
        </ul>
        <p>
          Thank you for being a valued customer. Our reputation as Bazpur&apos;s
          oldest crockery shop is built on trust and exceptional service.
        </p>
      </section>

      <Footer />
    </>
  );
}
