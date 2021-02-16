const wrap = document.querySelector(".nks2__wrap");
const move = () => {
    wrap.classList.toggle("nks2__tor");
    wrap.classList.toggle("nks2__tol");
};
wrap.addEventListener("animationend", move);