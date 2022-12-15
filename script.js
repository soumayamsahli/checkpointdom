var plus = document.querySelectorAll('.plus')
var minus = document.querySelectorAll('.minus')
var deletee = document.querySelectorAll('.delete')
var minus = document.querySelectorAll('.minus')
var total = document.querySelector('.total')
console.log('plus',plus)
console.log(total.innerHTML)
plus.forEach(el =>
    el.addEventListener('click', () => {

el.nextElementSibling.innerHTML++
console.log(total.innerHTML)
total.innerHTML=parseInt(total.innerHTML)+parseInt(el.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)
    })
)


minus.forEach(el =>
    el.addEventListener('click', () => {

        if (el.previousElementSibling.innerHTML > 0) {
            el.previousElementSibling.innerHTML--
        }
      if  (total.innerHTML >0)  {total.innerHTML=parseInt(total.innerHTML)-parseInt(el.nextElementSibling.nextElementSibling.innerHTML)}
    })
)
deletee.forEach(el =>
    el.addEventListener('click', () => {

      el.parentElement.remove()
    })
)

