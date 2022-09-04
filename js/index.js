// hare krishna
let showResult = (details) => {
  let myDiv = document.querySelector(".element-details");
  myDiv.style.display = "flex";

  if (myDiv.hasChildNodes()) {
    myDiv.innerHTML = '';
  }


  if (details) {
    let i = new Image;
    i.src = details[0];
    myDiv.append(i);

    let p = document.createElement('p');
    p.textContent = details[1];
    myDiv.append(p);
  } else {
    let p = document.createElement('p');
    p.style.color = "#ff4000";
    p.textContent = "Data not available !";
    myDiv.append(p);
  }

}


document.body.addEventListener('click', (ev) => {
  if (ev.target.className === "box-content") {
    let el = ev.target.nextElementSibling.textContent.trim();
    let d = data[el];
    showResult(d);
  }
})
