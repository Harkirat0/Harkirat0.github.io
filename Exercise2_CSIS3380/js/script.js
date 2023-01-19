const contactList = document.querySelector("ul.contact-list");

//function to create users with given indexes and array
function create(users, startndex, endIndex) {
    for (i = startndex; i <= endIndex && i < users.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('class', 'contact-item cf');
        contactList.appendChild(li);

        var div_contact = document.createElement('div');
        div_contact.setAttribute('class', 'contact-details');
        li.appendChild(div_contact);

        var img = document.createElement('img');
        img.setAttribute('class', 'avatar');
        img.setAttribute('src', users[i].image);
        div_contact.appendChild(img);

        var h3 = document.createElement('h3');
        let fullName = users[i].name;
        h3.innerText = fullName;
        div_contact.appendChild(h3);

        let email = fullName.substring(0, fullName.indexOf(' ')) + "." + (fullName).substring(fullName.indexOf(' ')).split(" ").join('') + "@example.com";
        var span = document.createElement('span');
        span.setAttribute('class', 'email');
        span.innerText = email.toLowerCase();
        div_contact.appendChild(span);

        var div_joined = document.createElement('div');
        div_joined.setAttribute('class', 'joined-details');
        li.appendChild(div_joined);

        var date = document.createElement('span');
        date.setAttribute('class', 'date');
        date.innerText = "Joined " + users[i].joined;
        div_joined.appendChild(date);
    }
}

let total = document.querySelector(".page-header.cf h3");
total.innerHTML = "Total: " + (users.length);

let currentPage = 1;
var numOfPages = parseInt(users.length.toString().charAt(0)) + 1;
const userPerPage = 10;

let div_pagination = document.createElement('div');
div_pagination.setAttribute('class', 'pagination');
document.querySelector(".page").appendChild(div_pagination);

//creating pagination
function createPaginationButtons() {
    for (let index = 0; index < numOfPages; index++) {
        let btnLi = document.createElement('li');
        btnLi.setAttribute('class', 'pageBtn');
        btnLi.setAttribute('id', 'btn' + (index + 1));
        div_pagination.appendChild(btnLi);

        let btnLink = document.createElement('a');
        btnLink.setAttribute('href', '');
        btnLink.innerText = (index + 1);
        btnLi.appendChild(btnLink);
    }
}

//update page with the users
function updatePage() {
    const container = document.querySelector('.contact-list');
    const allBtns = document.querySelectorAll('.pageBtn');
    container.innerHTML = '';
    create(users, 0, 9);

    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].onclick = function(e) {
            currentPage = (i + 1);
            container.innerHTML = '';
            let startInd = (currentPage - 1) * userPerPage;
            let endInd = startInd + (userPerPage - 1);

            e.preventDefault();
            create(users, startInd, endInd);
        }
    };
}

createPaginationButtons();
updatePage();