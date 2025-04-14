const openClose = document.getElementById('openClose')
const hiddenSideDiv = document.getElementById('hiddenSideDiv')
const xMark = document.getElementById('xMark')

function openSideDiv() {
    openClose.classList.toggle('right-[0px!important]')
    hiddenSideDiv.classList.toggle('hidden')
    xMark.classList.toggle('fa-xmark')
}