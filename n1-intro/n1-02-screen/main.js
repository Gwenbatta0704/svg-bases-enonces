const rect =document.querySelector('svg rect:nth-child(2)')
    rect.addEventListener('mouseenter', (event=>{
    event.currentTarget.classList.add('blue');
}));
rect.addEventListener('mouseleave', (event=>{
    event.currentTarget.classList.remove('blue');
}));