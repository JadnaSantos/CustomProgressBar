const process = document.querySelector(".process_done");

setTimeout(() =>{
    process.style.opacity = 1;
    process.style.width = process.getAttribute('data-done') + "%";
}, 5)