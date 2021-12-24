const menuIcons = document.querySelectorAll('.header-menu-item')
const menuBtn = document.querySelector('.header-menu-respon')
const closeBtn = document.querySelector('.close-btn')
const paramFacts = $('.body-about-facts-index-item-b')
const portfolioBtn = document.querySelectorAll('.body-portfolio-selection-item')
const imgItems = document.querySelectorAll('.body-portfolio-wrap')
const sections = document.querySelectorAll('.section')

window.addEventListener('scroll', () => {
    let current = ''

    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (document.documentElement.scrollTop >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id')
        }
    })
    menuIcons.forEach(div => {
        div.classList.remove('active-item')
        if (div.classList.contains(current + '-btn')) {
            div.classList.add('active-item')
        }
    })
})



$(document).ready(function () {
    $(this).scrollTop(0);
});




for (let i = 0; i < menuIcons.length; ++i) {
    menuIcons[i].onclick = () => {
        // document.querySelector('.header-menu-item.active-item').classList.remove('active-item')
        // menuIcons[i].classList.add('active-item')
        document.querySelector('.header').classList.toggle('hide')
    }
}


menuBtn.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active')
    document.querySelector('.header').classList.toggle('hide')
})

closeBtn.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active')
    document.querySelector('.header').classList.toggle('hide')
})

if (document.documentElement.clientWidth >= 1024) {
    document.querySelector('.body-about-info').classList.add('hidden')
    document.querySelector('.body-about-facts').classList.add('hidden')
    document.querySelector('.body-about-skills-item1').classList.add('hidden')
    document.querySelector('.body-about-skills-item2').classList.add('hidden')
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 400 && document.documentElement.scrollTop < 850) {
            document.querySelector('.body-about-info').classList.add('body-active')
        } else if (document.documentElement.scrollTop > 851 && document.documentElement.scrollTop < 1100) {
            document.querySelector('.body-about-facts').classList.remove('hidden')
            document.querySelector('.body-about-facts').classList.add('body-active2')
        } else if (document.documentElement.scrollTop > 1101 && document.documentElement.scrollTop < 1500) {
            document.querySelector('.body-about-skills-item1').classList.remove('hidden')
            document.querySelector('.body-about-skills-item2').classList.remove('hidden')
            document.querySelector('.body-about-skills-item1').classList.add('body-active3')
            document.querySelector('.body-about-skills-item2').classList.add('body-active3')
        }
    })
}

for (let i = 0; i < portfolioBtn.length; ++i) {
    portfolioBtn[i].onclick = () => {
        thisData = portfolioBtn[i].getAttribute('data-filter')
        document.querySelector('.body-portfolio-selection-item.body-portfolio-selection-item-active').classList.remove('body-portfolio-selection-item-active')
        portfolioBtn[i].classList.add('body-portfolio-selection-item-active')
        if (thisData == 'web') {
            for (let j = 0; j < imgItems.length; ++j) {
                if (imgItems[j].getAttribute('data-filter') != 'web') {
                    imgItems[j].classList.add('body-portfolio-wrap-hide')
                } else {
                    imgItems[j].classList.remove('body-portfolio-wrap-hide')
                }
            }
        } else if (thisData == 'app') {
            for (let j = 0; j < imgItems.length; ++j) {
                if (imgItems[j].getAttribute('data-filter') != 'app') {
                    imgItems[j].classList.add('body-portfolio-wrap-hide')
                } else {
                    imgItems[j].classList.remove('body-portfolio-wrap-hide')
                }
            }
        } else if (thisData == 'card') {
            for (let j = 0; j < imgItems.length; ++j) {
                if (imgItems[j].getAttribute('data-filter') != 'card') {
                    imgItems[j].classList.add('body-portfolio-wrap-hide')
                } else {
                    imgItems[j].classList.remove('body-portfolio-wrap-hide')
                }
            }
        } else {
            for (let j = 0; j < imgItems.length; ++j) {
                if (imgItems[j]) {
                    imgItems[j].classList.remove('body-portfolio-wrap-hide')
                }
            }

        }
    }
}





$(function ($, win) {
    $.fn.inViewport = function (cb) {
        return this.each(function (i, el) {
            function visPx() {
                var H = $(this).height(),
                    r = el.getBoundingClientRect(),
                    t = r.top,
                    b = r.bottom
                return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)))
            }
            visPx()
            $(win).on("resize scroll", visPx)
        })
    }
}(jQuery, window))
jQuery(function ($) {
    paramFacts.inViewport(function (px) {
        if (px > 0 && !this.initNumAnim) {
            this.initNumAnim = true; // Set flag to true to prevent re-running the same animation
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }
    });
})



consoleText(["I'm Developer", "I'm User", "I'm Gamer"], 'text', ['white', 'yellow', 'lightblue']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}