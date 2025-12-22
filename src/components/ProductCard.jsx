export default function ProductCard({ img, alt, title, children, cta }) {
  return (
    <div className="product-card">
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      {children}
      {cta}
    </div>
  );
}
