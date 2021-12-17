const Form = document.getElementById("form");
const Input = document.querySelector('.inp');
const Button = document.querySelector('.btn');
const ListGroup = document.querySelector('.list-group');
Form.addEventListener('submit',(e)=>{
    e.preventDefault();
 let el = document.createElement("li");
 let check = document.createElement("input");
 check.type = "checkbox";

 let btnClose = document.createElement("button");
 btnClose.type = "button";
 btnClose.className+= "Btn-close btn-close";
 

     btnClose.addEventListener('click',()=>{
     el.style.display = "none";
 })

 check.addEventListener('input',()=>{
   
     if(check.checked){
         el.classList.toggle('text-danger');
         el.style.textDecoration = "line-through";
        
     }else{
        el.classList.remove('text-danger');         
        el.style.textDecoration = "none";
     }
 })
  el.innerHTML = Input.value;
  if(Input.value === '' ||  Input.value.trim() === '') return; 
  el.appendChild(check);
  el.appendChild(btnClose);
  el.className+= "list-group-item text  text-primary mt-4 fs-3 "
ListGroup.appendChild(el);

    Input.value = "";
});
Button.addEventListener('click',()=>{
    let el = document.createElement("li");
    let check = document.createElement("input");
    check.type = "checkbox";
   
    let btnClose = document.createElement("button");
    btnClose.type = "button";
    btnClose.className+= "Btn-close btn-close";
    
   
        btnClose.addEventListener('click',()=>{
        el.style.display = "none";
    })
   
    check.addEventListener('input',()=>{
      
        if(check.checked){
            el.classList.toggle('text-danger');
            el.style.textDecoration = "line-through";
           
        }else{
           el.classList.remove('text-danger');         
           el.style.textDecoration = "none";
        }
    })
     el.innerHTML = Input.value;
     if(Input.value === '' || Input.value.trim() === '') return; 
     el.appendChild(check);
     el.appendChild(btnClose);
     el.className+= "list-group-item text  text-primary mt-4 fs-3 "
   ListGroup.appendChild(el);
   
       Input.value = "";
});
