var icons = Array.from(document.querySelectorAll(".icon"));
icons.map(i => i.onclick = (e) => {
    icons.map(i => i.classList.remove("active"))
    e.currentTarget.className += " active"
})