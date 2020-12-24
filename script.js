
const button = document.querySelector(".button");

const hoverAnimation = () => {
    anime({
        targets: button,
        width: '60%',
        scale: {
            delay: 800,
            value: 2.1
        },
        duration: 2000
    })
}




button.addEventListener('mouseover', hoverAnimation)


