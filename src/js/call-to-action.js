var first_visit = false;
export function checkFirstVisit() {
  if (localStorage.getItem("was_visited")) {
    return first_visit;
  }
  first_visit = true;
  localStorage.setItem("was_visited", 1);
  return first_visit;
}

export function displayBanner() {
  var banner = document.createElement("div");
  var text = document.createElement("p");
  banner.className = "first_time_banner";
  banner.style.backgroundColor = "gold";
  text.style.height = "3em";
  text.style.textAlign = "center";
  text.innerHTML = "Register for 40% off your first purchase!!";

  banner.appendChild(text);
  document.body.insertBefore(banner, document.body.childNodes[0]);
}

// first_visit = checkFirstVisit();
// if (first_visit){
//     displayBanner();
// }
