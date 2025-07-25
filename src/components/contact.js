export default function Contact() {
  const contactDiv = document.createElement("section");
  contactDiv.className = "contact-section";
  contactDiv.innerHTML = `
    <h2>Contact Us</h2>
    <p>📍 123 Fine Dining Street, Food City</p>
    <p>📞 +123 456 7890</p>
    <p>📧 contact@gourmethaven.com</p>
  `;
  return contactDiv;
}
