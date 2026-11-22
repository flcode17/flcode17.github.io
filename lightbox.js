// Opens project screenshots and charts in a large view with their caption.
// Without JavaScript (or <dialog> support) the links simply open the image file.
(function () {
  var box = document.getElementById("lightbox");
  if (!box || typeof box.showModal !== "function") return;
  var img = box.querySelector("img");
  var caption = box.querySelector(".lightbox-caption");

  document.querySelectorAll("a.shot").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var thumb = link.querySelector("img");
      img.src = link.getAttribute("href");
      img.alt = thumb ? thumb.alt : "";
      caption.textContent = link.getAttribute("data-caption") || "";
      box.showModal();
    });
  });

  box.querySelector(".lightbox-close").addEventListener("click", function () { box.close(); });
  // Clicking the dark backdrop (outside the content) closes it too.
  box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
  box.addEventListener("close", function () { img.removeAttribute("src"); });
})();
