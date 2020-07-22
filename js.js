function changeIcon() {
    let icons = document.getElementById("hamburger").children;
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.toggle("d-none");
    }
    let btn= document.getElementById("hamburger-btn");
    setTimeout(() =>{
        btn.disabled = true;
    });
    setTimeout(() => {
        btn.disabled = false;
    }, 500);
}