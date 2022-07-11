let container1 = document.getElementById("baskets1");
if (container1) {
  container1.style.marginTop = "120px";
  container1.style.marginLeft = "20px";
  container1.innerHTML = `<div class="inline-item inline-margin basket yellow"></div>
    <div class="inline-item inline-margin basket yellow"></div>
    <div class="inline-item inline-margin basket red"></div>
    <div class="inline-item inline-margin basket yellow"></div>
    <div class="inline-item inline-margin basket yellow"></div>
    <div class="inline-item inline-margin basket yellow"></div>
    <div class="inline-item inline-margin basket yellow"></div>`;
}
let container2 = document.getElementById("baskets2");
if (container2) {
  container2.style.marginTop = "120px";
  container2.style.marginLeft = "20px";
  container2.innerHTML = `<div class="block basket yellow"></div>
    <div class="block basket yellow"></div>
    <div class="block basket green"></div>
    <div class="block basket yellow"></div>
    <div class="block basket yellow"></div>
    <div class="block basket green"></div>
    <div class="block basket yellow"></div>
    <div class="block basket yellow"></div>
    <div class="block basket green"></div>`;
}

let menu = new menuBuilder();
menu.addLink("example.html", "Piemērs");
menu.addLink("", "Inline");
menu.addLink("task2.html", "Task2");
