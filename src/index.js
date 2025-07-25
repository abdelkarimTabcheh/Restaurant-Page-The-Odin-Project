import './styles.css';
import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';

const content = document.getElementById("content");

function renderPage(pageComponent) {
  content.innerHTML = "";
  content.appendChild(pageComponent());
}

document.getElementById("HomeBtn").addEventListener("click", () => renderPage(Home));
document.getElementById("MenuBtn").addEventListener("click", () => renderPage(Menu));
document.getElementById("ContactBtn").addEventListener("click", () => renderPage(Contact));

renderPage(home);
