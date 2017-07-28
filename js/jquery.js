$(document).ready(function(){
  var mql = [
    window.matchMedia("(max-width: 330px)"),
    window.matchMedia("(min-width: 331px) and (max-width: 500px)"),
    window.matchMedia("(min-width: 501px) and (max-width: 980px)")
  ];
  if (mql[1].matches){
    resizeWH(".image", 115, 115);
    resizeWH(".logo", 55, 55);
    resizeText("h1", 3.5, "vmin");
    setProperty(".feature-work", "justify-content", "center");
  }
  else if (mql[1].matches){
    resizeWH(".image", 115, 115);
    resizeWH(".logo", 75, 75);
    resizeText("h1", 3.5, "vmin");
    setProperty(".feature-work", "justify-content", "center");
  }
  else if (mql[2].matches) {
    resizeWH(".image", 150, 150);
    resizeWH(".logo", 100, 100);
    resizeText("h1", 3.5, "vmin");
    setProperty(".feature-work", "justify-content", "center");
  }
});

function resizeWH(selector, width, height){
  $(selector).css({"width": width + "px", "height": height + "px"});
}

function resizeText(selector, size, unit){
  $(selector).css("font-size", size + unit);
}

function setProperty(selector, property, value){
  $(selector).css(property, value);
}
