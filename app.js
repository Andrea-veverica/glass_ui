const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const wrap = document.querySelectorAll('.wrap');

openBtn.addEventListener('click', function () {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.add('visible');
    }
})


// openBtn.addEventListener('click', function () {
//     for (let x = 0; x < wrap.length; x++) {
//         wrap[x].classList.add('visible'); - CLASSLIST SPRAVI TO, ZE PO KLIKU DA DO CLASS V HTML SLOVO 'VISIBLE'
//     }
// })

closeBtn.addEventListener('click', function () {
    for (let x = 0; x < wrap.length; x++) {
        wrap[x].classList.remove('visible');
    }
})

// Tu urobi remove('visible'); po kliku