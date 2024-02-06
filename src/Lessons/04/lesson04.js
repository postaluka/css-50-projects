const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const search = document.querySelector('.search')

btn.addEventListener('click', () =>
{
    search.classList.toggle('active')
    // console.log(search.classList);
    input.focus()
})