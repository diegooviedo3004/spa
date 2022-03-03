
function spa_script() {
    /*BUTTONS*/
    let home_btn = document.getElementById('home_btn');
    let contact_btn = document.getElementById('contact_btn');
    let aboutus_btn = document.getElementById('aboutus_btn')

    /*INFORMATION*/
    let home = document.getElementById('home');
    let contact = document.getElementById('contact')
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
