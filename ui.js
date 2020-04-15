function UI(){
    this.outputImage = document.getElementById("outputImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputWord = document.getElementById("outputWord");

    this.SelectList = document.getElementById("language");

}

UI.prototype.ChangeUI = function (){
this.outputImage.src = `images/${this.SelectList.value}.png`;
this.outputLanguage.innerHTML = this.SelectList.options[this.SelectList.selectedIndex].textContent;
}

UI.prototype.displayResponse = function(text){
    this.outputWord.textContent = text;
}
