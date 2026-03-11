import { useEffect, useRef, useState, useCallback } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Admin from "./components/Admin";
import "./assets/css/styles.css";

function getCardWidth() {
  if (window.innerWidth <= 400) return 120 + 16;
  if (window.innerWidth <= 768) return 140 + 16;
  return 220 + 16;
}

function InfiniteCarousel({ id, children }) {
  const childArray = Array.isArray(children) ? children : [children];
  const setCount = childArray.length;
  const loopedItems = [...childArray, ...childArray, ...childArray];

  const indexRef = useRef(setCount);
  const isAnimatingRef = useRef(false);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const cardWidthRef = useRef(getCardWidth());

  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((newIndex, animate) => {
    const track = trackRef.current;
    if (!track) return;
    const CARD_WIDTH = cardWidthRef.current;

    if (animate) {
      track.style.transition = "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      isAnimatingRef.current = true;
    } else {
      track.style.transition = "none";
    }

    track.style.transform = `translateX(-${newIndex * CARD_WIDTH}px)`;
    indexRef.current = newIndex;
    setActiveIndex(((newIndex % setCount) + setCount) % setCount);
  }, [setCount]);

  const handleTransitionEnd = useCallback(() => {
    isAnimatingRef.current = false;
    const cur = indexRef.current;
    if (cur >= setCount * 2) {
      goTo(cur - setCount, false);
    } else if (cur < setCount) {
      goTo(cur + setCount, false);
    }
  }, [setCount, goTo]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleResize = () => {
      cardWidthRef.current = getCardWidth();
      goTo(indexRef.current, false);
    };
    window.addEventListener("resize", handleResize);

    goTo(setCount, false);
    track.addEventListener("transitionend", handleTransitionEnd);

    intervalRef.current = setInterval(() => {
      if (!isAnimatingRef.current) {
        goTo(indexRef.current + 1, true);
      }
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
      track.removeEventListener("transitionend", handleTransitionEnd);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scroll = (dir) => {
    if (isAnimatingRef.current) return;
    goTo(indexRef.current + dir, true);
  };

  return (
    <div className="carousel-wrapper-luxury">
      <button className="carousel-btn-luxury" onClick={() => scroll(-1)}>&#8249;</button>

      <div className="carousel-clip" id={id}>
        <div className="carousel-track-luxury" ref={trackRef}>
          {loopedItems.map((child, i) => {
            const isActive = i === indexRef.current;
            return (
              <div key={i} className={`luxury-card${isActive ? " luxury-card--active" : ""}`}>
                {child}
              </div>
            );
          })}
        </div>
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
