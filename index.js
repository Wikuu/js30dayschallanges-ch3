const targetEl = document.getElementById("target");
const imageEl = targetEl.children[0];

const spacingEl = document.getElementById("spacing");
const blurEl = document.getElementById("blur");
const baseEl = document.getElementById("base");

spacingEl.addEventListener("input", e => {
    const spaceVal = e.target.value;
    targetEl.style.padding = spaceVal + "px";
})

blurEl.addEventListener("input", e =>{
    const blurVal = e.target.value;
    imageEl.style.filter = `blur(${blurVal}px)`;
})

baseEl.addEventListener("input", e => {
    targetEl.style.backgroundColor = e.target.value;
})