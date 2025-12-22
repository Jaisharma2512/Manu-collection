import ProductCard from "../components/ProductCard";
import kitchen from "../assets/img/promo/kitchen.jpg";
import waterPurifier from "../assets/img/categories/water-purifier.jpg";
// ...import others

export default function Home() {
  return (
    <>
      <section className="hero">
        <h2>Explore Premium Crockery, Appliances &amp; Gifts</h2>
        <p>Luxury for your kitchen. Essentials for every home. Gifts for every occasion.</p>
      </section>

      <section className="international-promo">
        {/* same content as your HTML, converted to JSX */}
      </section>

      {/* promotion, categories, featured, etc. using <ProductCard /> */}
      <section id="categories" className="categories">
        <h2>Shop by Category</h2>
        <div className="grid">
          <ProductCard img={waterPurifier} alt="Water Purifiers" title="Water Purifiers" />
          {/* other cards */}
        </div>
      </section>
    </>
  );
}
