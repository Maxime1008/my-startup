localStorage.clear();

//menu burger

// const burgerBtn = document.querySelector('#burgerBtn');
// const burgerMenu = document.querySelector('#menuBurger');
// const closeBtn = document.querySelector('#closeBtn');

// burgerBtn.addEventListener('click', () => {
//     burgerMenu.classList.add('active');
// });

// closeBtn.addEventListener('click', () => {  
//     burgerMenu.classList.remove('active');
// });


var allInputs = document.querySelectorAll('input');

// Valide input

allInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value == "") {
            if(input.classList.contains('valid')) {
                input.classList.remove('valid');
                input.classList.add('error');
            }
        } else {
            if(input.classList.contains('error')) {
                input.classList.remove('error');
            }
            input.classList.add('valid');
        }
    })
})

var submitButton = document.querySelector('form button');
var popUpThanks = document.querySelector('.popUpThanks');
var sendButtonNewsletter = document.querySelector('#modalNewsLetter button');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    allInputs.forEach(input => {
        if (input.value == "") {
            input.classList.add('error');
        } else {
            localStorage.setItem('subscribe', 'true');
            popUpThanks.classList.add('activePopUp');
        }
    })
})


sendButtonNewsletter.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('subscribe', 'true');
    popUpThanks.classList.add('activePopUp');
})

var buttonClose = document.querySelector('.popUpThanks button');

buttonClose.addEventListener('click', () => {
    window.location.href=''
})


//modal Newsletter

const modalNewsletter = document.querySelector('#modalNewsLetter');
const closeBtnModal = document.querySelector('#closeNewsLetter');

if (localStorage.getItem('subscribe') != 'true') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            modalNewsletter.classList.add('active');
        }, 2000);
    });
}

closeBtnModal.addEventListener('click', () => {
    modalNewsletter.classList.remove('active');
});



// apparaitre div scroll

const timing = .65
const options = {
    root: null,
    rootMargin: '0px',
    threshold: timing
}

const HandleIntersect = function (entries , observer) {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > timing){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(HandleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (reveal) {
    observer.observe(reveal)
});

// button top

let btn = document.getElementById("flechehaut");
let section = document.getElementById("landing");

window.addEventListener("scroll", function() {
    if (window.scrollY >= section.offsetTop) {
        btn.classList.add("activeAffiche");
    } else {
        btn.classList.remove("activeAffiche");
    }
});
