function createFlexItem(cat) {
    return `<div class="flex-item">
                
                <h1>${cat.name}</h1>
                <div class="picture">
                    <img src="${cat.img_link}" height="290" width="290">
                </div>
                 <h2 class="description-header cat-${cat.id}">Описание></h2>
                 <div class="description desc-cat-${cat.id}" style="display: none">
                    ${cat.favourite ? '<h3>Избранный</h3>' : ''}
                    <h3>Возраст:  ${cat.age}</h3>
                    <h3>Номер: ${cat.id}</h3>
                    <h3>Рейтинг: ${cat.rate}/10</h3>
                    <h3>${cat.description}</h3>
                 </div>
            </div>`
}

console.log(cats)
console.log(createFlexItem(cats[0]))

const mainBlock = document.querySelector('.flexbox')
// mainBlock.innerHTML += createFlexItem(cats[0])

for (let cat of cats) {
    mainBlock.innerHTML += createFlexItem(cat)
}

const descHeaders = document.querySelectorAll('.description-header')
for (let i = 0; i < descHeaders.length; ++i) {
    descHeaders[i].addEventListener('click', (event) => {
        event.preventDefault()
        // console.log(descHeaders[i].classList[1], `.desc-${descHeaders[i].classList[1]}`)
        const desc = document.querySelector(`.desc-${descHeaders[i].classList[1]}`)
        console.log(desc)
        desc.style.display === 'none' ? desc.style.display = 'block' : desc.style.display = 'none'
    })
}
