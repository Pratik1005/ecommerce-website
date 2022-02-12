const filterCtn = document.querySelector(".product-filter");
const filterBtn = document.querySelector(".filter-cta");
const clearBtn = document.querySelector("span.filter-clear");

const toggleFilter = () => {
    filterCtn.classList.toggle("show");
}

filterBtn.addEventListener("click", toggleFilter);
clearBtn.addEventListener("click", toggleFilter);