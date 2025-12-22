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
        <a href="#contact-form">Contact</a>
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

      {/* UPDATED: Christmas / New Year promo */}
      <section className="christmas-promo">
        <h2>Christmas &amp; New Year Sale! 🎄✨</h2>
        <ul>
          <li>
            Old gas stove ke badle mein naye glass-top gas stove par heavy
            discount – nayi rasoi ke liye perfect upgrade.
          </li>
          <li>
            Special Christmas Gift Combo Sets available hain, price range: 400,
            600, 800, 1000, 2000, 3000 – friends &amp; family ke liye ready-made
            gifts.
          </li>
          <li>
            Winter / New Year season mein purane cookers lane par branded naye
            cookers par bhari chhoot.
          </li>
          <li>
          Heavy discount on Induction Cookers and Electric Kettles
          </li>
        </ul>
        <button
          onClick={() =>
            window.open("https://wa.me/9412667937", "_blank", "noreferrer")
          }
        >
          Take Quotation
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

      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          "Main Manu Collection tohn 32-piece dinner set lita, quality bohot vadiya haigi aedi te design v bahut sohna aa. Ghar aunde mehman vi khush ho gaye, paisa vasool laggya ji" - Arjun Sandhu.
        </div>
         <div className="review">
          "Maine ek Phillips ka induction cooker liya tha jiski 24 hours mai service available ho gyi " - Riya Bisht.
        </div>
      </section>



<section id="contact-form">
  <h2>Contact Us</h2>
  <p>
    For any product enquiry, bulk order, or festive offer details, reach us on:
  </p>
  <ul style={{ listStyle: "none", padding: 0, margin: "1em 0" }}>
    <li>
      <strong>Phone / WhatsApp:</strong> 9412667937, 7055376261
    </li>
    <li>
      <strong>Phone:</strong> 7055376261
    </li>
    <li>
      <strong>Facebook:</strong> Manu Collections Bazpur
    </li>
        <li>
      <strong>Instagram:</strong> manucollectionsbazpur
    </li>
    <li>
      <strong>Store:</strong> Manu Collection Opp Adarsh Kanya Junior High School
    </li>
  </ul>
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
