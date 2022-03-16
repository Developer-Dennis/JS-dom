let form = document.querySelector('form')
let itemsList = document.querySelector('#items-list')

const addItem = e =>{
    e.preventDefault();
    let newItem = document.querySelector('#new-item')
    if(newItem.value.length){
        let li = document.createElement('li')
        let span = document.createElement('span')
        let icon = document.createElement('i')
        icon.classList.add('fa-solid')
        icon.classList.add('fa-trash-can')
        li.className = 'item';
        li.textContent = newItem.value
        console.log(li.textContent)
        span.appendChild(icon)
        li.appendChild(span)
        itemsList.appendChild(li)
        form.reset()
    }
}

form.addEventListener('submit', addItem)

let icons = document.querySelectorAll('.fa-solid')

const deleteListItem = (e)=>{
    
    let li = document.querySelector('li')
    itemsList.removeChild(li)

}

icons.forEach(item=>{
    item.addEventListener('click', deleteListItem)
})
















// // console.log(document.all)

// // selecting an element by Tagname

// // let header = document.getElementsByTagName('header');
// let header = document.querySelector('header')
// let title =document.querySelector('h1')

// // console.log(title.textContent)
// // console.log(title.value)

// // console.log(title.innerHTML)
// // console.log(title.innerText)
// // console.log(header.textContent)


// // selecting an element by class name

// let li = document.getElementsByClassName('item');
// let lis = document.querySelectorAll('.item')
// // count = 1
// // for(let li of lis){
// //     li.textContent = count;
// //     count++;
// // }
// // console.log(lis)

// // selecting an element by id

// // let items =document.getElementById('items')
// let items  =document.querySelector('#items')


// /// query selector
// // let newItem = document.getElementsByName('item-input')
// let newItem = document.getElementsByName("input[name='item-input']")
// let submitBtn = document.querySelector("input[type='submit']")
// submitBtn.value = '+ New Item'

// let button =  document.createElement('button')
// button.textContent = 'Send Message'
// button.style.backgroundColor = '#000000' ;
// button.style.color ='#fff';

// items.removeChild(button)