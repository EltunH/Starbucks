const openClose = document.getElementById('openClose')
const hiddenSideDiv = document.getElementById('hiddenSideDiv')
const xMark = document.getElementById('xMark')
const ac = document.getElementById('ac')

function openSideDiv() {
    openClose.classList.toggle('right-[0px!important]')
    hiddenSideDiv.classList.toggle('hidden')
    xMark.classList.toggle('fa-xmark')
}

function accordionFooter(arg, svg) {
    const elm = document.getElementById(`${arg}`)
    const svgId = document.getElementById(`${svg}`)
    elm.classList.toggle('max-h-[500px!important]')
    svgId.classList.toggle('rotate-[180deg]')
}