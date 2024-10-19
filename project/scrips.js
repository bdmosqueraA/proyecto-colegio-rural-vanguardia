(function(){
    const carrusel = [...document.querySelectorAll('.cuerpo_carrusel')];
    const flechaatras = document.querySelector('#antes');
    const flechasig = document.querySelector('#despues');

    let value;
    let conteo;

    flechaatras.addEventListener('click', ()=>{
        empezarconteo();
        changePosition(-1);
        pararconteo();
    });
        
    flechasig.addEventListener('click', ()=>{
        empezarconteo();
        changePosition(1);
        pararconteo();
    });

    function changePosition(change){
        const currentElement = Number(document.querySelector('.cuerpo_carrusel--show').dataset.id);

        value = currentElement;
        value+=change;

        console.log(carrusel.length)
        if(value === 0 || value == carrusel.length+1){
            value = value === 0 ? carrusel.length : 1;
        }
        carrusel[currentElement-1].classList.toggle('cuerpo_carrusel--show');
        carrusel[value-1].classList.toggle('cuerpo_carrusel--show');
    }
    function empezarconteo(){
        conteo = setInterval(() => {
            changePosition(1);
        }, 7000);
    }

    function pararconteo(){
        clearInterval(conteo);
    }

    function reiniciarConteo(){
        setTimeout(() => {
            empezarConteo();
        }, 4000); 
    }

    empezarconteo();
})()

const subIndice = document.querySelectorAll('.sub_indice, .sub_indice_2');

subIndice.forEach(menu => {
    menu.parentElement.addEventListener('mouseenter', () => {
        menu.style.display = 'block'; 
    });

    menu.parentElement.addEventListener('mouseleave', () => {
        menu.style.display = 'none'; 
    });
});

