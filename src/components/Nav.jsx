export default function Nav({ onNavigate, current }) {
  return (
    <nav className="nav">
      <button onClick={() => onNavigate("home")}>Home</button>
      <button onClick={() => onNavigate("glass")}>Glass Range</button>
      {/* You can keep hash links as <a href="#categories"> if you prefer */}
    </nav>
  );
}
