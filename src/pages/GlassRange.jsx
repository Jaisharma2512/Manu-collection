import ProductCard from "../components/ProductCard";
import wineGlass from "../assets/img/products/wine-glass.jpg";
import juiceGlass from "../assets/img/products/juice-glass.jpg";
// ...

export default function GlassRange() {
  return (
    <section className="glass-section">
      <h2>Glass Range</h2>
      <div className="grid">
        <ProductCard img={wineGlass} alt="Wine Glass" title="Wine Glass" />
        <ProductCard img={juiceGlass} alt="Juice Glass" title="Juice Glass" />
        {/* beer, water */}
      </div>
    </section>
  );
}
