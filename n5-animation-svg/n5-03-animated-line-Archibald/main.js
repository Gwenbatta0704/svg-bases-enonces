const Path = document.querySelector('path');
console.log(Path.getTotalLength());

document.querySelector('button').addEventListener('click',(event=>{
        Path.classList.toggle('animate');
}));