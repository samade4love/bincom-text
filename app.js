alert('holoee');
document.querySelector('.btn').addEventListener('click', (e) => {
    console.log(123);
    var tit = document.querySelector('.title').value;
    var dat = document.querySelector('.date').value;
    var are = document.querySelector('.area').value;

    var cret = document.createElement('div');
    cret.innerHTML = `
            <h2>${tit}</h2>
            <h4>Time posted ${dat}</h4>
            <p>${are}</p>
        <h6><a href="#">Read more</a></h6>
    `;
    var add = document.querySelector('.get-pos');
    add.appendChild(cret);

    e.preventDefault();
});