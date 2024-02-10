const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

const interval = setInterval(blurImage, 20)

function blurImage()
{
    load++

    if (load > 99)
    {
        clearInterval(interval)
    }

    // console.log(load);

    loadText.innerHTML = `${load}%`
    loadText.style.opacity = mapRange(load, 50, 100, 1, 0)
    const blurLevel = mapRange(load, 0, 100, 30, 0)
    bg.style.filter = `blur(${blurLevel}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const mapRange = (num, in_min, in_max, out_min, out_max) =>
{
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}