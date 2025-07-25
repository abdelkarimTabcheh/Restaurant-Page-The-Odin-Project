export default function Home() {
  const homeDiv = document.createElement("section");
  homeDiv.className = "home-section";
  homeDiv.innerHTML = `
    <h2>Welcome to Gourmet Haven</h2>
    <p>Discover flavors from around the world in a single plate. We bring you an exquisite dining experience with locally sourced ingredients and world-class chefs.</p>
  `;
  return homeDiv;
}
