import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Admin from "./components/Admin";
import "./assets/css/styles.css";

function InfiniteCarousel({ id, children }) {
  const trackRef = useRef(null);
  const currentRef = useRef(0);
  const childArray = Array.isArray(children) ? children : [children];
  const setCount = childArray.length;
  const CARD_WIDTH = 236; // 220px card + 16px gap
  const [activeIndex, setActiveIndex] = useState(0);

  // Triple the items for infinite illusion
  const loopedItems = [...childArray, ...childArray, ...childArray];

  const jumpTo = (track, pos, animate) => {
    track.style.scrollBehavior = animate ? "smooth" : "auto";
    track.scrollLeft = pos * CARD_WIDTH;
    currentRef.current = pos;
    setActiveIndex(((pos % setCount) + setCount) % setCount);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Start at the middle set instantly
    jumpTo(track, setCount, false);

    const interval = setInterval(() => {
      const next = currentRef.current + 1;
      jumpTo(track, next, true);

      // After animation, silently reset to middle set if needed
      setTimeout(() => {
        if (currentRef.current >= setCount * 2) {
          jumpTo(track, setCount + (currentRef.current % setCount), false);
        }
      }, 520);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;

    const next = currentRef.current + dir;
    jumpTo(track, next, true);

    setTimeout(() => {
      if (currentRef.current >= setCount * 2) {
        jumpTo(track, setCount + (currentRef.current % setCount), false);
      } else if (currentRef.current < setCount) {
        jumpTo(track, setCount + ((currentRef.current % setCount + setCount) % setCount), false);
      }
    }, 520);
  };

  return (
    <div className="carousel-wrapper-luxury">
      <button className="carousel-btn-luxury" onClick={() => scroll(-1)}>&#8249;</button>

      <div className="carousel-track-luxury" id={id} ref={trackRef}>
        {loopedItems.map((child, i) => {
          const realIndex = i % setCount;
          const isActive = realIndex === activeIndex;
          return (
            <div key={i} className={`luxury-card${isActive ? " luxury-card--active" : ""}`}>
              {child}
            </div>
          );
        })}
      </div>

      <button className="carousel-btn-luxury" onClick={() => scroll(1)}>&#8250;</button>

      <div className="carousel-dots">
        {childArray.map((_, i) => (
          <span key={i} className={`carousel-dot${i === activeIndex ? " carousel-dot--active" : ""}`} />
        ))}
      </div>
    </div>
  );
}

function LuxuryCard({ src, alt, title }) {
  return (
    <div className="lux-card-inner">
      <img src={src} alt={alt} />
      <div className="lux-card-overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <section className="hero">
        <h2>Explore Premium Crockery, Appliances & Gifts</h2>
        <p>Luxury for your kitchen. Essentials for every home. Gifts for every occasion.</p>
      </section>

      <section className="international-promo">
        <p>30 saal ka vishwaas aur quality! 🌟</p>
        <p>
          Bazpur se lekar Canada, UK, Australia, America aur Germany tak hamari
          crockery aur kitchenware ne har ghar mein apni khaas jagah banayi hai.
          💎 Ab humne apni services ko aur expand karte hue international
          shipping bhi shuru ki hai! ✈🌍
        </p>
        <p>Aur Bazpur ke 3 km ke radius mein hum laa rahe hain quick aur convenient home delivery service!</p>
      </section>

      <section className="festival-promo">
        <h2>Holi & Ramzaan Sale! ✨</h2>
        <ul>
          <li>Puraane chulhe/Old gas stove ke badle mein naye glass-top gas stove par heavy discount – nayi rasoi ke liye perfect upgrade.</li>
          <li>Special Holi and Ramzaan Gift Combo Sets available hain, price range: 400, 600, 800, 1000, 2000, 3000 – friends & family ke liye ready-made gifts.</li>
          <li>Garmion ke season mein purane cookers lane par branded naye cookers par bhari chhoot.</li>
          <li>Heavy discount on Water Coolers, Juicer Mixer Grinder, Food Processors, Kalsi Juice Machine and glasses.</li>
        </ul>
        <button onClick={() => window.open("https://wa.me/9412667937", "_blank", "noreferrer")}>
          Take Quotation
        </button>
      </section>

      <section className="promotion">
        <img src="/kitchen.jpg" alt="Kitchen Offer" />
        <div className="promotion-text">
          <span style={{ fontSize: "1.22em", color: "#d18625" }}>Big discount when building a new kitchen</span>
          <span style={{ fontSize: "1.1em", color: "#3d3515" }}>नई रसोई बनाने पर बड़ी छूट</span>
          <span style={{ fontSize: "1.08em", color: "#7a5200" }}>ਨਵਾਂ ਰਸੋਈ ਘਰ ਬਣਾਉਣ ਉੱਤੇ ਵੱਡੀ ਛੂਟ</span>
          <button className="avail-btn" onClick={() => window.open("https://wa.me/9412667937", "_blank", "noreferrer")}>
            Take quotation
          </button>
        </div>
      </section>

      <section id="featured" className="featured">
        <h2>Featured Products</h2>
        <Products />
      </section>

      <section id="categories" className="categories">
        <h2>Shop by Category</h2>
        <InfiniteCarousel id="cat-carousel">
          <LuxuryCard src="/water-purifier.jpg" alt="Water Purifiers" title="Water Purifiers" />
          <LuxuryCard src="/gasstove.jpg" alt="Gas Stoves" title="Gas Stoves" />
          <LuxuryCard src="/homeappliances.jpg" alt="Home Appliances" title="Home Appliances" />
          <LuxuryCard src="/giftitems.jpg" alt="Gift Items" title="Gift Items" />
          <LuxuryCard src="/ladiessuit.jpg" alt="Ladies Suits" title="Ladies Suits" />
        </InfiniteCarousel>
      </section>

      <section id="glass-range" className="categories">
        <h2>Glass Range</h2>
        <InfiniteCarousel id="glass-carousel">
          <LuxuryCard src="/wine-glass.jpg" alt="Wine Glass" title="Wine Glass" />
          <LuxuryCard src="/juice-glass.jpg" alt="Juice Glass" title="Juice Glass" />
          <LuxuryCard src="/beer-glass.jpg" alt="Beer Glass" title="Beer Glass" />
          <LuxuryCard src="/water-glass.jpg" alt="Water Glass" title="Water Glass" />
        </InfiniteCarousel>
      </section>

      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          "Main Manu Collection tohn 32-piece dinner set lita, quality bohot vadiya haigi aedi te design v bahut sohna aa. Ghar aunde mehman vi khush ho gaye, paisa vasool laggya ji" - Arjun Sandhu.
        </div>
        <div className="review">
          "Maine ek Phillips ka induction cooker liya tha jiski 24 hours mai service available ho gyi" - Riya Bisht.
        </div>
      </section>

      <section id="contact-form">
        <h2>Contact Us</h2>
        <p>For any product enquiry, bulk order, or festive offer details, reach us on:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "1em 0" }}>
          <li><strong>Phone / WhatsApp:</strong> 9412667937, 7055376261</li>
          <li><strong>Phone:</strong> 7055376261</li>
          <li><strong>Facebook:</strong> Manu Collections Bazpur</li>
          <li><strong>Instagram:</strong> manucollectionsbazpur</li>
          <li><strong>Store:</strong> Manu Collection Opp Adarsh Kanya Junior High School</li>
        </ul>
      </section>

      <section className="trust">
        <h2>Our Commitment to You</h2>
        <p>At Manu Collection, we value your trust above everything. We adhere to strict ethical standards and full transparency to ensure you shop with confidence and peace of mind.</p>
        <ul>
          <li>100% Authentic and Quality Products</li>
          <li>Transparent and Honest Business Practices</li>
          <li>Easy Returns and Warranty on Products</li>
          <li>Dedicated Customer Support Team</li>
        </ul>
        <p>Thank you for being a valued customer. Our reputation as Bazpur's oldest crockery shop is built on trust and exceptional service.</p>
      </section>

      <Footer />
    </>
  );
}
