// The email icon copies the address and says so, because a mailto link does
// nothing for visitors who have no mail app set up. Without JavaScript the
// mailto link still works as usual.
(function () {
  var link = document.querySelector("[data-copy-email]");
  var note = document.querySelector(".copied");
  if (!link || !note) return;
  var address = link.getAttribute("data-copy-email");
  var timer;

  function show(text) {
    note.textContent = text;
    note.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(function () { note.classList.remove("show"); }, 4000);
  }

  link.addEventListener("click", function (e) {
    if (!navigator.clipboard) return; // fall back to the mailto link
    e.preventDefault();
    navigator.clipboard.writeText(address).then(
      function () { show("Copied " + address + " to your clipboard."); },
      function () { show("Email me at " + address); }
    );
  });
})();
