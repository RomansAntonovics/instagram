let container = document.getElementById("basket-container");
container.innerHTML = '<div class="block basket red absolute" style=""></div>';
container.innerHTML +=
  '<div class="block basket yellow absolute" style="top:300px; left:140px;"></div>';
container.innerHTML +=
  '<div class="block basket green absolute" style="bottom:15px; right:15px;"></div>';
container.innerHTML +=
  '<!--<div style="width:500px; height:500px;position:absolute; top:40px; right:200px;"><div class="block basket orange movable relative" style="top:200px; left:315px;"></div></div>-->';
