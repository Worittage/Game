let selectedButton = null
let levelGame = null

document.querySelectorAll('.content__button').forEach((button) => {
    button.addEventListener('click', function () {
        selectedButton = this
    })
})

document.querySelector('#button').addEventListener('click', function () {
    levelGame = selectedButton.dataset.name
    if (selectedButton) {
        alert('вы выбрали уровень' + '\n' + levelGame)
    }
})
