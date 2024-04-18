// Area Of a Trapeziod
document.getElementById("Trapezoid").addEventListener("click", jamal1);

function jamal1() {
  //Input

  let base = +document.getElementById("jamal2").value;
  let bottom = +document.getElementById("jamal3").value;
  let height = +document.getElementById("jamal9").value;

  let area = (1 / 2) * (base + bottom) * height;
  area = area.toFixed(3);
  document.getElementById("jamal0").innerHTML = area;
  document.getElementById("jamal2").value = "";
  document.getElementById("jamal3").value = "";
  document.getElementById("jamal9").value = "";
}
