// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is: ', banner.nodeType)
// console.log('#page-banner node name is: ', banner.nodeName)
// console.log('#page-banner has child nodes: ', banner.hasChildNodes())

// const clonedBanner = banner.cloneNode(true);

// console.log(clonedBanner);

// const bookList = document.querySelector('#book-list');

// // console.log('the parent node is: ', bookList.parentNode);
// // console.log('the parent node is: ', bookList.parentElement.parentElement);

// // console.log(bookList.children)

// console.log('book-list next sibling is: ', bookList.nextSibling)
// console.log('book-list next sibling is: ', bookList.nextElementSibling)
// console.log('book-list previous sibling is: ', bookList.previousSibling)
// console.log('book-list previous sibling is: ', bookList.previousElementSibling)

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!'

// const btns = document.querySelectorAll('#book-list .delete');

// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)
//     });    
// });

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent, 'was prevented')
// });

//EVENT BUBBLING

const list = document.querySelector('#book-list ul');

list.addEventListener('click', (e) => {
    if(e.target.className === 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
    
})

