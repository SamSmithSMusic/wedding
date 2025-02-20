let events = document.querySelectorAll('.itinItem');

events.forEach((event) => {
    event.addEventListener('click', (e) => {
        let paragraph = event.querySelector("p");
        if (paragraph.classList.contains("hidden")) {
            paragraph.classList.remove("hidden");
            event.querySelector("b").innerText = "▼ ";
        } else {
            paragraph.classList.add("hidden");
            event.querySelector("b").innerText = "► ";
        }
    })
});