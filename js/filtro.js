document.getElementById("filter").addEventListener("change", function () {
    const obrasCards = Array.from(document.querySelectorAll(".obras-card > div"));
    const filterValue = this.value;
  
    if (filterValue === "priceAsc") {
      obrasCards.sort((a, b) => {
        const priceA = parseInt(a.querySelector(".precio").getAttribute("data-precio"));
        const priceB = parseInt(b.querySelector(".precio").getAttribute("data-precio"));
        return priceA - priceB;
      });
    } else if (filterValue === "priceDesc") {
      obrasCards.sort((a, b) => {
        const priceA = parseInt(a.querySelector(".precio").getAttribute("data-precio"));
        const priceB = parseInt(b.querySelector(".precio").getAttribute("data-precio"));
        return priceB - priceA;
      });
    } else if (filterValue === "alphabetical") {
      obrasCards.sort((a, b) => {
        const nameA = a.querySelector("h2").textContent.toUpperCase();
        const nameB = b.querySelector("h2").textContent.toUpperCase();
        return nameA.localeCompare(nameB);
      });
    }
  
    const container = document.querySelector(".obras-card");
    obrasCards.forEach(card => container.appendChild(card)); 
  });
  