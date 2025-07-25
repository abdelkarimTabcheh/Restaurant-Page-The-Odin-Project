export default function Menu() {
  const menuDiv = document.createElement("section");
  menuDiv.className = "menu-section";
  menuDiv.innerHTML = `
    <h2>Our Menu</h2>
    <ul>
      <li>🥩 Grilled Steak - $25</li>
      <li>🍝 Truffle Pasta - $22</li>
      <li>🥗 Organic Quinoa Salad - $15</li>
      <li>🍰 Chocolate Lava Cake - $10</li>
    </ul>
  `;
  return menuDiv;
}
