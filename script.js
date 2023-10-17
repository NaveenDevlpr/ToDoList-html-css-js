const inputBox=document.getElementById("input-box");
const list=document.getElementById("list-container");

function addTask(){

    if(inputBox.value ==''){
    alert("enter your message!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement("close");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    SaveData();
}

list.addEventListener("click" , function(e){
    if(e.target.tagName=="LI"){
       e.target.classList.toggle("checked");
       SaveData();
    }
    else if(e.target.tagName=="CLOSE"){

        e.target.parentElement.remove();
        SaveData();
    }
})

function SaveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showData()
{
    list.innerHTML=localStorage.getItem("data");
}

showData();