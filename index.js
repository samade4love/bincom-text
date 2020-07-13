var url = 'https://trompe-loeil-hum.000webhostapp.com/wp-json/wp/v2/posts';
var postsContainer = document.querySelector('.get-post');

fetch(url)
.then(response => response.json())
.then(data => {
    data.map( post => {
        var innerContent =
        `
        <h2>${post.title.rendered}</h2>
        <h4>Time posted ${post.date}</h4>
        <p>${post.excerpt.rendered}</p>
       <h6><a href="${post.link}">Read more</a></h6>
        `;
        postsContainer.innerHTML += innerContent;
        console.log(innerContent);
    })
});

var url = 'https://trompe-loeil-hum.000webhostapp.com/wp-json/wp/v2/pages';
const imagesContain = document.querySelector('.get-page');

fetch(url)
.then(response => response.json())
.then(data => {
    data.map( page => {
        const innerContent =
        `
        <h2>${page.title.rendered}</h2>
        <p>${page.excerpt.rendered}</p>

        `
        imagesContain.innerHTML += innerContent;
    })
}); 

function btn(e) {
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
}