// const cart1 = document.getElementById("cart1");
const details = document.querySelectorAll(".right-side");
const carts = document.querySelectorAll(".cart1")
const x = document.querySelector("#x")



carts.forEach((cart, i) => {
    cart.addEventListener("click", () => {
        carts.forEach(item => {
            item.classList.remove("active");
        });
        details.forEach(section => {
            section.classList.remove("active2");
        });
        cart.classList.add("active");
        details[i].classList.add("active2");
    })
});






// carts.forEach((element, index) => {
//     element.addEventListener("click", () => {
//     carts.forEach(item => {
//         item.classList.remove("active");
//         element.classList.add("active")
//     });
//     details.forEach(section => {
//         section.classList.remove("active2");
//         details[index].classList.add("active2");
//     });




    //     if (details.style.display == "block") {   
    //     details.style.display = "none";
    // } else { 
    //     details.style.display = "block";
    // }
//     })
// });























// cart1.addEventListener("click", () => {
//     cart1.classList.add("active");
//     if (details.style.display == "none") {
//         cart1.classList.add("active");   
//         details.style.display = "block";
//     } else {
//         cart1.classList.remove("active");  
//         details.style.display = "none";
//     }
// })