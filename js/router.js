function loadPage(page){
  fetch(`templates/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("page").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("page").innerHTML =
        "<h2>Page not found</h2>";
    });
}
