const contValue = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(contValue.innerText);
    value++ ;
    contValue.innerText = value;
};

const decrement = () => {
    let value = parseInt(contValue.innerText);
    value-- ;
    contValue.innerText = value;
};