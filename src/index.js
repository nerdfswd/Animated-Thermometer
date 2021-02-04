const tempLoad = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML =
    '<i class="fa fa-thermometer-empty fa-3x" aria-hidden="true"></i>';
  temp.style.color = "#f8b627";
  setTimeout(() => {
    temp.innerHTML =
      '<i class="fa fa-thermometer-quarter fa-3x" aria-hidden="true"></i>';
    temp.style.color = "#f8b627";
  }, 1000);

  setTimeout(() => {
    temp.innerHTML =
      '<i class="fa fa-thermometer-half fa-3x" aria-hidden="true"></i>';
    temp.style.color = "green";
  }, 2000);

  setTimeout(() => {
    temp.innerHTML =
      '<i class="fa fa-thermometer-three-quarters fa-3x" aria-hidden="true"></i>';
    temp.style.color = "green";
  }, 3000);

  setTimeout(() => {
    temp.innerHTML =
      '<i class="fa fa-thermometer-full fa-3x" aria-hidden="true"></i>';
    temp.style.color = "#ff0000";
  }, 4000);
};
tempLoad();

setInterval(tempLoad, 5000);
