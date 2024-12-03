document.getElementById("transform").addEventListener("click", function() {
    const line = document.querySelector(".line");
    if (line.style.gridTemplateColumns === "3fr 2fr 1fr") {
        line.style.gridTemplateColumns = "1fr 2fr 3fr";
    } else {
        line.style.gridTemplateColumns = "3fr 2fr 1fr";
    }
});
