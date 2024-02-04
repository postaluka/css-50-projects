
const panels = document.querySelectorAll('.panel')

console.log(panels);

panels.forEach(panel =>
{

    panel.addEventListener('click', () =>
    {
        removeActiveClass()
        panel.classList.add('active')
    })
});

function removeActiveClass()
{
    panels.forEach(panel =>
    {
        panel.classList.remove('active')
    })
}



/**
 * Canvas
 */
const canvas = document.querySelector('canvas.webgl')

/**
 * Experience class
 */

// const experience = new Experience(canvas)


