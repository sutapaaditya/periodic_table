let showDetails = (iSrc='', pText='') => {
  let r = document.querySelector('.element-details');
  r.style.display = "flex";
  r.style.color = "initial";
  // following code removes the previous image and paragraph text
  if (r.hasChildNodes()) {
    r.innerHTML = '';
  }

  if (iSrc && pText) {
    let i = new Image();
    i.src = iSrc;
    r.append(i);
    let p = document.createElement('p');
    p.textContent = pText;
    r.append(p);
  } else {
      r.style.color = "#ff4000";
      r.textContent = "Data Not Available !";
  }
}

document.body.addEventListener('click', (ev) => {
  if (ev.target.className === "box-content" || ev.target.className === "box-footer") {
    let e = ev.target.parentElement;
    let i = parseInt(e.children[0].children[0].innerText);
    i = i-1;
    let el = data[i];
    if (el) {
      let iSrc = Object.values(el)[0][0];
      let pText = Object.values(el)[0][1];
      showDetails(iSrc, pText);
    } else {
      showDetails('','');
    }
  }
})
