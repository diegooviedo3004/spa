function spa_script() {
    /*BUTTONS*/
    let home_btn = document.getElementById('home_btn');
    let contact_btn = document.getElementById('contact_btn');
    let aboutus_btn = document.getElementById('aboutus_btn')

    /*INFORMATION*/
    let home = document.getElementById('home');
    let contact = document.getElementById('add')
    let aboutus = document.getElementById('aboutus')

    home_btn.addEventListener('click',() => {
        home.style.display = 'unset';
        contact.style.display = 'none';
        aboutus.style.display = 'none';
    });

    contact_btn.addEventListener('click',() => {
        home.style.display = 'none';
        contact.style.display = 'unset';
        aboutus.style.display = 'none';
    });

    aboutus_btn.addEventListener('click',() => {
        home.style.display = 'none';
        contact.style.display = 'none';
        aboutus.style.display = 'unset';
    });
}

window.onload = spa_script()

/*LIBROS*/

let add_books_btn = document.getElementById('enviar')
let div_libros = document.getElementById('libros');

add_books_btn.addEventListener('click',(e) => {
    e.preventDefault();
    let info = document.getElementById('titulo').value;
    document.getElementById('titulo').value = '';
    alert('Su libro se ha agregado');

    /*CREANDO ELEMENTO*/
    let new_element = document.createElement('p');
    let new_book_title = document.createTextNode(info)

    new_element.appendChild(new_book_title);

    div_libros.appendChild(new_element);
});