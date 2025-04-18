const menuBar = document.getElementById('menuBar')
const menuFilter = document.getElementById('menuFilter')

let DATA

function fetchData() {
    fetch('http://localhost:3000/menus')
        .then(res => res.json())
        .then(data => {
            DATA = data
            show()
        })
}
fetchData()

function show() {
    menuBar.innerHTML = ''
    menuFilter.innerHTML = ''
    DATA.map(item => {
        menuBar.innerHTML += `
            <p class="text-[19px] w-[150px] mt-6 font-[600]">${item.name}</p>
            <ul>
                ${item.children.map(elm => {
                return `
                        <li onclick=showProducts('${elm.id}') class="my-[15px] cursor-pointer text-[#00000094] hover:text-[#000000dc]">${elm.name}</li>
                    `}).join('')}
            </ul>`

        menuFilter.innerHTML += `
                <h2 class="font-bold text-[19px] md:text-[24px] mt-10 pb-4">${item.name}</h2>
                <hr class="mb-8 border-t-[2px] border-[#0000001a]" />
                <div >
                    <ul class="md:grid grid-cols-2 gap-4">
                        ${item.children.map(elm => {
                        return `
                                        <li onclick=showProducts('${elm.id}') class="my-[15px] cursor-pointer flex items-center gap-x-4 rounded-[54px_7px_7px_54px] hover:bg-[#f9f9f9] transition duration-300">
                                            <img src="${elm.categoryImageURL}" alt="photo" class="w-[72px] h-[72px] md:w-[112px] md:h-[112px] rounded-[50%] object-cover"/>
                                            ${elm.name}
                                        </li>
                                `}).join('')}
                    </ul>
                </div>`
    })
}

function showProducts(cod) {
    let productsArr = []
    DATA.map(item => {
        item.children.map(elm => {
            if (elm.id == cod) {
                elm.children.map(arg => productsArr.push(arg))
            }
        })
    })

    menuFilter.innerHTML = ''
    productsArr.map(item => {
        menuFilter.innerHTML += `
                <h2 class="font-bold text-[19px] md:text-[24px] mt-10 pb-4">${item.name}</h2>
                <hr class="mb-8 border-t-[2px] border-[#0000001a]" />
                <div>
                <ul class="slm:flex max-md:justify-center flex-wrap gap-4 ">
                    ${item.products.map(elm => {
            return `
                                <li>
                                    <a href="/pages/details.htm?num=${elm.productNumber}" class="my-[15px] cursor-pointer flex flex-col w-full  md:w-[195px] text-center items-center gap-4">
                                        <img src="${elm.imageURL}" alt="photo" class="w-[148px] h-[148px] rounded-[50%] object-cover"/>
                                        <span class="w-[175px] md:text-[19px]">${elm.name}</span>
                                    </a>
                                </li>
                            `}).join('')}
                </ul>
                </div>
            `
    })
}
