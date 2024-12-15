document.addEventListener("DOMContentLoaded", function () {
    // active menu mobile
    const hambuger = document.querySelector(".header_mb_hambuger");
    const header = document.querySelector(".header_mb");

    hambuger.addEventListener("click", function () {
        header.classList.toggle("active");
    });

    // active submenu mobile -------------------------------------------------------------
    const submenuItems = document.querySelectorAll(".submenu_mb");

    submenuItems.forEach((submenu) => {
        submenu.addEventListener("click", function (event) {
            // Đóng tất cả các submenu khác
            submenuItems.forEach((item) => {
                if (item !== submenu) {
                    item.classList.remove("active");
                }
            });

            // Bật tắt submenu được nhấn
            submenu.classList.toggle("active");

            // Ngăn chặn hành động mặc định của thẻ <a> nếu có
            event.preventDefault();
        });
    });

    // search -----------------------------------------------------------
    const searchContainers = document.querySelectorAll("#search");
    searchContainers.forEach((container) => {
        const searchInput = container.querySelector("#search-input");
        const searchResults = container.querySelector("#search-results");
        const clearBtn = container.querySelector("#clear-btn");

        let debounceTimeout;

        // Hiển thị kết quả tìm kiếm
        function displayResults(query) {
            if (!query) {
                searchResults.style.display = "none";
                return;
            }
            searchResults.style.display = "block";
        }

        // Debounce function
        function debounce(func, delay) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(func, delay);
        }

        // Xử lý khi nhập vào ô tìm kiếm
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value;
            debounce(() => displayResults(query), 300); // Debounce với 300ms
            clearBtn.style.display = query ? "inline" : "none"; // Hiển thị nút xóa nếu có nội dung
        });

        // Nút xóa
        clearBtn.addEventListener("click", () => {
            searchInput.value = "";
            searchResults.style.display = "none";
            clearBtn.style.display = "none";
        });

        // Đóng danh sách kết quả khi click bên ngoài
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".header_search")) {
                searchResults.style.display = "none";
            }
        });
    });

    // slider banner -----------------------------------------------
    const elem = document.querySelector(".banner_slider");
    const flkty = new Flickity(elem, {
        cellAlign: "center",
        autoPlay: 3000,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
    });

    const dots = document.querySelectorAll(".custom-dots_banner .dot");

    // Cập nhật trạng thái dots
    const updateDots = () => {
        dots.forEach((dot, index) => {
            if (flkty.selectedIndex === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    };

    // Lắng nghe sự kiện khi slide thay đổi
    flkty.on("change", updateDots);

    // Thêm sự kiện click cho dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            flkty.select(index);
        });
    });

    // Cập nhật dots ban đầu
    updateDots();
});
