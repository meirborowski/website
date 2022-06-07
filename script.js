// starting screen
window.addEventListener('load', function() {
    setTimeout(()=>{
        var loader = document.getElementById('loader');
        var home_page = document.getElementById('home-page');

        loader.style.display = 'none';
        home_page.style.display = 'block';
    }, 3000);
}
);