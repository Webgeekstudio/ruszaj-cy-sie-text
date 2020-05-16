const div = document.querySelector('.text');

const btn = document.querySelector('button')
let text = 'Moving text '
let array = text.split('');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const input = document.querySelector('.inputText')
    if (input.value === '') {
        text = 'Wpisz coś do cholery'
        array = text.split('');
    } else {
        text = input.value;
        array = text.split('');
        input.value = ''
        focus(input)

    }
})


setInterval(function() {
    array.push(array[0]);
    array.shift(array[0])
    let moving = array.join('')
    div.textContent = moving


}, 100);