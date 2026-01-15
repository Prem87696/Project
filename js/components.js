function component(name, targetId){
  fetch(`components/${name}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch(() => {
      console.error("Component not found:", name);
    });
}
