console.log("JavaScript working!");

document.addEventListener('DOMContentLoaded', function(){
    let drop = document.getElementById('taskSpace');
    let adding = document.getElementById('plus');
    let water = document.getElementById('work');
    const dia = document.getElementById('date-actual');

    


    

    adding.addEventListener('click', function() {
        let text = drop.value.trim();

        if (text !== '') {
            let item = document.createElement('li');
            item.innerHTML = `
                <i class="fa-regular fa-circle"></i>
                <p>${text}</p>
                <i class="fa-solid fa-trash-can"></i>
            `;

            water.appendChild(item);
            drop.value = '';
            icons();

           
          
        } 

    });

    drop.addEventListener('keyup', function(event){
        if (event.key === 'Enter') {
            adding.click();
        }
    });

    water.addEventListener('click', function (event){
        let target = event.target;
        if(target && target.classList.contains('fa-trash-can')){
            target.closest('li').remove();
        } else if (target.classList.contains('fa-circle')) {
            tFunction(target.closest('li'));
        }

    });

    function icons () {
        let tasks = document.querySelectorAll('.tasks li');
        tasks.forEach(function(task){
            let circle = task.querySelector('.fa-regular.fa-circle');
            let trash = task.querySelector('.fa-solid.fa-trash-can');
            circle.classList.remove('disable');
            trash.classList.remove('disable');

        });       
    };

    function tFunction(item) {
        let circle = item.querySelector('.fa-circle'); // Cambiar la selección aquí
        let text = item.querySelector('p');
    

        circle.classList.toggle('fa-circle-check');
        text.classList.toggle('highlight');
 
        if (circle.classList.contains('fa-circle-check')) {
            circle.classList.remove('fa-circle');
            circle.classList.add('fa-circle-check');
        } else {
            circle.classList.remove('fa-circle-check');
            circle.classList.add('fa-circle');
        }
    }
    
    function obtainedDate (){
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        const date = new Date().toLocaleDateString('es-ES', options);
        return date;
    }

    dia.textContent = obtainedDate();
     
   

    
    
    
    
    
    


    icons();

});



