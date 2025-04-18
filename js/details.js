const detailsProduct = document.getElementById('detailsProduct')
const allSize = document.querySelectorAll('#allSize div[id]')
const shortBg = document.getElementById('shortBg')
const tallBg = document.getElementById('tallBg')
const grandeBg = document.getElementById('grandeBg')
const ventiBg = document.getElementById('ventiBg')
const prdCateg = document.getElementById('prdCateg')
const prdDtls = document.getElementById('prdDtls')

const param = new URLSearchParams(location.search)
const prdNum = param.get('num')

let DATA

function showFetch() {
    fetch('http://localhost:3000/menus')
        .then(res => res.json())
        .then(data => {
            DATA = data
            showDetails()
        })
}
showFetch()

function showDetails() {
    let detailsObj
    DATA.map(item => {
        item.children.map(elm => {
            elm.children.map(arg => {
                arg.products.map(key => {
                    if (key.productNumber == prdNum) {
                        detailsObj = key
                        prdCateg.innerHTML = elm.name
                        prdDtls.innerHTML = key.name
                    }
                })
            })
        })
    })
    
    detailsProduct.innerHTML = `
                <div class="max-w-[420px] w-full lg:h-full flex justify-center lg:justify-end py-4 max-lg:mx-auto lg:mr-6 base-lg:mr-11 base-xl:mr-[88px]">
                    <img src="${detailsObj.imageURL}" class="max-w-[300px] w-full h-full object-cover" alt="photo" />
                </div>
                <div
                    class="text-[22px] mini:text-[28px] md:text-[36px] text-center tracking-[1.1px] lg:text-left font-bold text-white max-w-[420px] max-lg:mx-auto lg:ml-6 base-lg:ml-11 base-xl:ml-[88px]">
                    <h1>${detailsObj.name}</h1>
                </div>
    `
}

function changeSize(id) {
    const myId = document.getElementById(id)

    shortBg.style.background = 'url(../img/short.svg)'
    tallBg.style.background = 'url(../img/tall.svg)'
    grandeBg.style.background = 'url(../img/grande.svg)'
    ventiBg.style.background = 'url(../img/venti.svg)'

    for (const elm of allSize) {
        elm.style.border = 'none'
        elm.style.backgroundColor = ''
    }

    document.getElementById(`${id}Bg`).style.background = `url(../img/act_${id}.svg)`

    myId.style.border = '2px solid #0b6949'
    myId.style.background = '#d4e9e2'
}