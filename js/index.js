let showDetails = (m) => {
  let el = '';
  let r = document.querySelector('.element-details');
  r.style.display = "flex";

  // following code removes the previous image and paragraph text
  if (r.hasChildNodes()) {
    r.innerHTML = '';
  }

  data.forEach(element => {
    if (Object.keys(element)[0] === m) {
      el = element;
    }
  });

  if (el) {
    let i = new Image();
    i.src = el[m][0];
    r.append(i);
    let p = document.createElement('p');
    p.textContent = el[m][1];
    r.append(p);
  } else {
    r.textContent = "Data not available !";
  }
}

let n = document.querySelectorAll('.n-element');
n.forEach(e => e.addEventListener('click', () => {
  let m = e.children[2].textContent.trim();
  showDetails(m);
}));
