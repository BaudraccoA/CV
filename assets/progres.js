
  document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    function animateProgressBars() {
      progressBars.forEach((bar) => {
        const value = parseInt(bar.getAttribute("aria-valuenow"), 10);
        bar.style.width = `${value}%`;
      });
    }

    animateProgressBars();
  });
