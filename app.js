eventlisteners();


function eventlisteners(){
    document.getElementById("translate-form").addEventListener("submit" , Translate);
    document.getElementById("language").onchange = function(){
        ui.ChangeUI();


    }


}

const translateobject = new TranslateConstructor(document.getElementById("word").value , document.getElementById("language").value);
const ui = new UI();


function Translate(e){

    translateobject.Changingvalues(document.getElementById("word").value , document.getElementById("language").value);
    translateobject.translation(function(err,response){
        if(err === null){
            ui.displayResponse(response);
         
        }
        else{
            console.log(err);
        }
    });




    e.preventDefault();
}
