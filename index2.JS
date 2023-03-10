
const btn = document.getElementById('btn');
const test= document.getElementById('text-accordeon');
const block1 = document.getElementById('block6');


function issou(){
    
if(test.classList.contains("text-caché"))
{
   
    test.classList.remove('text-caché');
    test.classList.add('text-affiche');
    block1.classList.replace('premierblock','premierblocki');
    btn.textContent="<"
    
}
else{
    
    test.classList.remove('text-affiche');
    test.classList.add('text-caché');
    block1.classList.replace('premierblocki','premierblock');
    btn.textContent=">"
}
          


}

  
btn.addEventListener('click', issou);