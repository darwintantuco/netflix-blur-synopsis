(function () {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      const target = mutation.target;
      const classList = target.classList[0];

      if (classList === undefined) return;

      if (classList.includes("episodeSelector-container")) {
        target.querySelectorAll(".titleCard-synopsis").forEach(function (item) {
          item.classList.add("-blurry-text");
        });
      }
    });
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
  });
})();
