document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("pdf-modal");
    let modalIframe = document.getElementById("modal-iframe"); // Fixed ID
    let closeBtn = document.getElementById("modal-close");

    document.querySelectorAll(".cert-card").forEach(card => {
        card.addEventListener("click", function () {
            let pdfUrl = card.getAttribute("data-pdf");
            
            if (pdfUrl) {
                modalIframe.setAttribute("src", pdfUrl);
                modal.style.display = "flex"; // Show modal properly
            }
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        modalIframe.setAttribute("src", ""); // Reset iframe
    });

    // Close modal when clicking outside the iframe
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalIframe.setAttribute("src", "");
        }
    });
});
