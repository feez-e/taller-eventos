let div = document.getElementById("div");
let button = document.getElementById("button")

div.addEventListener("click", () => {
    alert("Hola! Soy el div")

})

button.addEventListener("click", (e) => {
    e.stopPropagation();
})