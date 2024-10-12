const notesContainer = document.querySelector(".notes-container");
const creatBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shownotes(){  //if there is something saved it will show
    notesContainer.innerHTML = localStorage.getItem("notes");  
}
shownotes();


function updateStorage(){      //puting all the text in "notes" file name
    localStorage.setItem("notes",notesContainer.innerHTML);
}


//first we creat the note area in html and design it and the comentionut 
//that code and inputing it through JS 
creatBtn.addEventListener("click",()=>{
    let inputbox = document.createElement("p");  //creating paregraph tag like this
    let img = document.createElement("img");
    inputbox.className = "input-box";   //setting class name
    inputbox.setAttribute("contenteditable","true");   //contenteditable:true mean you can change the text or update
    img.src = "/Notes-App/images/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){    //this mean if IMG tagname is clicked then it will remove parent element mean the paragraph tag
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === "p"){   //if p tag is clicked it will update each line
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
});