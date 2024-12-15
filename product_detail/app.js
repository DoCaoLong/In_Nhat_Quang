const productTabs = document.querySelectorAll(".product_tab");
const productContents = document.querySelectorAll(".product_tabs_content");

productTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs
        productTabs.forEach((t) => t.classList.remove("active"));
        // Hide all tab contents
        productContents.forEach((content) => content.classList.add("hidden"));

        // Add active class to clicked tab
        tab.classList.add("active");
        // Show corresponding tab content
        const target = document.getElementById(tab.dataset.tab);
        target.classList.remove("hidden");
    });
});
