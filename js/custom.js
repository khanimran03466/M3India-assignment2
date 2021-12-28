const todoForm = document.getElementById("todoForm");
const appDataBody = document.querySelector(".app-data-body > ul");
const removeButton = document.getElementsByClassName("remove");

showData();

todoForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var title = document.querySelector("#title").value.trim();
    var description = document.querySelector("#des").value.trim();

    

    
    if (title === "" || description === "") {
        alert("Please Fill All The Fields");
        document.querySelector("#title").value = "";
        document.querySelector("#des").value = "";

    } else {

        let localGet = localStorage.getItem("M3Todo");

        if(localGet == null){
            localObj = [];
        }
        else{
            localObj = JSON.parse(localGet);
        }
    
        localObj.unshift({ title,description } );
        localStorage.setItem("M3Todo", JSON.stringify(localObj));

        document.querySelector("#title").value = "";
        document.querySelector("#des").value = "";

        showData();
    }

   

});


function showData(){

    let localGet = localStorage.getItem("M3Todo");

    if(localGet == null){
        localObj = [];
    }
    else{
        localObj = JSON.parse(localGet);
    }

        let li="";

        localObj.forEach((item, index) => {
            
            li += `<li>
                        <div class="data-body-card">
                            <ul>
                                <li>${ item.title }</li>
                                <li>${ item.description } </li>
                                <li> <a href="javascript:void(0)" class="remove" onclick="remove(${index})"> X </a> </li>
                            </ul>
                        </div>
                    </li>`;
        });

        appDataBody.innerHTML = li ;

}

function remove(index){
    let localGet = localStorage.getItem("M3Todo");
    let localObj = JSON.parse(localGet);
    localObj.splice(index,1);
    localStorage.setItem("M3Todo", JSON.stringify(localObj));
    showData();
}


