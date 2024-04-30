
let deleteButton = document.querySelectorAll('.btn');
let inputs = document.querySelector('.tdInput');
let AddButton = document.querySelector('.tdBtn');
let container = document.querySelector('.mainBox');
    
let remover = () =>{
    deleteButton.forEach(button =>{
        button.addEventListener('click' , () =>{
            let die = button.parentElement;
            die.remove();
        });
    });
}

    AddButton.addEventListener('click', () =>{
        if (inputs.value.length > 0) { 
            let value = inputs.value;
            let inputBox = document.createElement('div');
            inputBox.classList.add('box');
            inputBox.innerHTML = `
                <a>${value}</a>
            <button class="btn">died</button>
             `;
             container.appendChild(inputBox);
            inputs.value = ''
            deleteButton = document.querySelectorAll('.btn');
            remover();
        } else{
            const blank = document.querySelector('#blankError');
            blank.classList.toggle('hide')
            setTimeout(() => {
                blankError.classList.add('hide');
            }, 1500);
        }
        // inputs.addEventListener('keydown', (press) => {
        //     if (press.keyCode === 13) {
        //         addItem(inputBox);
        //     }
        // }); ვერ ავამუშავე და თავი დავანებე xd
    });
    remover();    