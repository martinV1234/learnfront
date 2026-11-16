import './styles.scss';

let button = document.getElementById('Button');
console.log({button});
button.addEventListener('click', function() {
    if (button.classList.contains('is-primary')) {
        button.classList.replace('is-primary', 'is-danger');
    } else {
        button.classList.replace('is-danger', 'is-primary');
    }
});
let input = document.querySelector('#input');
let reverseText = document.querySelector('.reverse-text');
input.addEventListener('change', () => {
    reverseText.innerHTML = input.value.split('').reverse().join('');
});