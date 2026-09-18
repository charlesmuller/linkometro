javascript
const links = [
    {
        title: "Instagram",
        icon: "📸",
        url: "https://instagram.com/"
    },
    {
        title: "YouTube",
        icon: "▶️",
        url: "https://youtube.com/"
    },
    {
        title: "Meu site",
        icon: "🌐",
        url: "https://example.com/"
    },
    {
        title: "WhatsApp",
        icon: "💬",
        url: "https://wa.me/"
    }
];

const linksContainer = document.querySelector("#links");

links.forEach((link) => {
    const element = document.createElement("a");

    element.className = "link";

    element.href = link.url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";

    element.innerHTML = `
        <span class="link-icon">${link.icon}</span>
        <span class="link-title">${link.title}</span>
    `;

    linksContainer.appendChild(element);
});

