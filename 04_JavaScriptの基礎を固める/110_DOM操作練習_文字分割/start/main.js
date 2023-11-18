document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split('');
  str.reduce((acc, curr) => {
    curr = curr.replace(' ', '&nbsp;');
    return concatStr += `<span class="char">${c}</span>`;
  })
  let concatStr = "";

  for (let c of str) {
    c.replace(' ', '&nbsp;');
    concatStr += `<span class="char">${c}</span>`;
  }


  el.innerHTML = concatStr;
});
