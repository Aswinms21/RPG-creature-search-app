const switch1=document.querySelector("#switch1 input[type=checkbox]");
const switch2=document.querySelector("#switch2 input[type=checkbox]");
const switch3=document.querySelector("#switch3 input[type=checkbox]");
const topHeader=document.querySelector("#top-header");
const asideSideNav=document.querySelector("#aside-side-nav");
const descTile=document.querySelector(".desc-tile");

if (switch2 && asideSideNav) {
  switch2.addEventListener("change", function() {
    if (switch2.checked) {
      asideSideNav.style.display = "none";
    } else {
      asideSideNav.style.display = "";
    }
  });
}
if (switch1 && topHeader){
    switch1.addEventListener("change", function() {
        if(switch1.checked){
            topHeader.style.display="none";
        }
        else{
            topHeader.style.display="";
        }
    });
}
if(switch3 && descTile){
    switch3.addEventListener("change", function() {
        if(switch3.checked){
            descTile.style.display="none";
        }
        else{
            descTile.style.display="";
        }
    });
}