document.addEventListener('DOMContentLoaded', ()=> {
    const contenedor = document.querySelector('.nav-contenedor');
    const bars = document.querySelector('.bars');
    const closed = document.querySelector('.closed');

    const btnBars = ()=> {
        bars.addEventListener('click', ()=> {
            contenedor.style.display = 'flex';
            contenedor.appendChild(closed);
            closed.style.display = 'flex';
        });
        closed.addEventListener('click', ()=> {
            contenedor.style.display = 'none'
        });
    }
    btnBars();
});