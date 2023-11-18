document.addEventListener('DOMContentLoaded', function () {
//     const el = document.querySelector('.animate-title');
//     const el2 = document.querySelector('.animate-title-2');
//     const str = el.innerHTML.trim().split("");
//     const str2 = el2.innerHTML.trim().split("");

//     // let concatStr = '';

//     // for(let c of str) {
//     //     c = c.replace(/\s+/, '&nbsp;');
//     //     concatStr += `<span class="char">${c}</span>`;
//     // }

//     el.innerHTML = str.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
//     }, "");
//     el2.innerHTML = str2.reduce((acc, curr) => {
//         curr = curr.replace(/\s+/, '&nbsp;');
//         return `${acc}<span class="char">${curr}</span>`;
    //     }, "");
    const ta = new TextAnimation(".animate-title");
    const taa = new TextAnimation(".animate-title-2");

    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 2000)
});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classlist.toggle('inview');
    }
}
