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

// FAQ
function toggleAnswer(element) {
    // Select all faq items
    const allQuestions = document.querySelectorAll(".faq-question");
    const allAnswers = document.querySelectorAll(".faq-answer");
    const allIcons = document.querySelectorAll(".icon");

    // Remove active class from all questions, answers, and icons
    allQuestions.forEach((question) => question.classList.remove("active"));
    allAnswers.forEach((answer) => answer.classList.remove("active"));
    allIcons.forEach((icon) => {
        icon.classList.remove("active");
        icon.textContent = "+"; // Reset icons to "+"
    });

    // Add active class to the clicked question, answer, and icon
    const answer = element.nextElementSibling;
    const icon = element.querySelector(".icon");

    answer.classList.add("active");
    icon.classList.add("active");
    element.classList.add("active");

    // Change the icon text
    icon.textContent = "-";

}

// popup
// Get Elements
const openPopupBtn = document.getElementById("openPopupPrice");
const closePopupBtn = document.getElementById("closePopupPrice");
const popup = document.getElementById("popup_price");
const overlay = document.getElementById("overlay_price");
const body = document.body;

// Open Popup
openPopupBtn.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.style.display = "block";
    body.classList.add("no-scroll"); 
});

// Close Popup
function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
    body.classList.remove("no-scroll"); 
}

closePopupBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);
// close popup
