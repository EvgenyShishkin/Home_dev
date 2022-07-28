let left = document.querySelector('#left');
let rigth = document.querySelector('#rigth');
let slider = document.querySelector(".slider_block")
let imgArr = ["https://sun1-26.userapi.com/s/v1/if1/4bw5gTqqzVNzJlDyNDTyBXNh1lOMScwbf6flOD4gvfzS0i1yIgs2GQ9lWLeP1KVpREAqP_g7.jpg?size=400x400&quality=96&crop=389,0,1785,1785&ava=1"
,"https://sun1-96.userapi.com/s/v1/ig2/cCgRVQre7-K9Z1oXjtbhK2tnh7CyHcZouylTCOtsHSqq5QUhxxlCGENRF3PZShL7ZiR4_m0rjXdXGuJE_16MFfDS.jpg?size=400x400&quality=96&crop=0,0,996,996&ava=1"
,"https://sun1-91.userapi.com/s/v1/if2/BgioMmwcSoa0EspF6jZhdCmIu50YHgNOtlECtVhsKW0ayWU6ZX6EjA7hPK13mjAo7DOwZeFyB8Ez9gwCXVz8G7uR.jpg?size=400x0&quality=96&crop=60,20,200,200&ava=1"
,"https://sun1-24.userapi.com/s/v1/if1/D0Q1d7BxmBrzQVnvxEPZYPYOl1Ij4OABj75KiLe1HeH4_VqVC3fZzN877LxxxpqDUcpd5QKw.jpg?size=400x400&quality=96&crop=563,84,1429,1431&ava=1"
,"https://media.gab.com/system/accounts/avatars/001/726/758/original/2010061610094236583.jpg"
]


let sliderBlock = document.querySelectorAll(".slider_block img");
let opacityIsBack = function (elem) {
    elem.style.opacity = "1";
}

for (let i = 0;i<sliderBlock.length;i++) {
    sliderBlock[i].src = imgArr[i];
}

left.addEventListener("click",()=>{
    
    imgArr.push(imgArr.shift())
    
    for (let i = 0;i<sliderBlock.length;i++) {
        sliderBlock[i].style.opacity = "0";
        sliderBlock[i].src = imgArr[i];
        setTimeout(opacityIsBack(sliderBlock[i]),500);
    }
    
    
});
rigth.addEventListener("click",()=>{
    imgArr.unshift(imgArr.pop())
    for (let i = 0;i<sliderBlock.length;i++) {
        sliderBlock[i].src = imgArr[i];
    }
})