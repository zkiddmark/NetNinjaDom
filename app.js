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
document.addEventListener('DOMContentLoaded', () => {

    const list = document.querySelector('#book-list ul');

    list.addEventListener('click', (e) => {
        if(e.target.className === 'delete'){
            const li = e.target.parentElement;
            list.removeChild(li);
        }
        
    })


    //add book-list

    const addForm = document.forms['add-book'];

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        addNewBook(value);
        addForm.querySelector('input[type="text"]').value = ''
    });

    //add new Book
    function addNewBook(title) {
        const html = `
            <li>
                <span class="name">${title}</span>
                <span class="delete">delete</span>
            </li>
        `;
        list.insertAdjacentHTML('beforeend', html);
    }

    //hide books
    const hideBox = document.querySelector('#hide');

    hideBox.addEventListener('change', (e) => {
        if(hideBox.checked){
            list.style.display = 'none';
        } else {
            list.style.display = 'initial';
        }
    });

    //search filter
    const searchForm = document.forms['search-books'].querySelector('input');

    searchForm.addEventListener('keyup', (e) => {
        let value = new RegExp(`${e.target.value}`, 'gi');
        const allBooks = list.querySelectorAll("li");
        const results = Array.from(allBooks).filter(book => {
            if(!book.firstElementChild.textContent.toLowerCase().match(value)){
                book.style.display = 'none';
            } else {
                book.style.display = 'block'
            }
        });
    });


    //Panels

    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');

    tabs.addEventListener('click', (e) => {
        if(e.target.tagName == 'LI'){
            const targetPanel = document.querySelector(e.target.dataset.target)
            panels.forEach(panel => {
                if(panel == targetPanel){
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        };
    });

});