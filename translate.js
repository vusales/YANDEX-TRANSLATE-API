function TranslateConstructor (text , language){
    this.apikey = "trnsl.1.1.20200411T140041Z.16fe7adbaf453162.42a82e38392590d1d8197bddf2121168f44733e1";
    this.text = text;
    this.language = language;


    this.xhr = new XMLHttpRequest();
}


TranslateConstructor.prototype.translation = function(callback){
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.text}&lang=${this.language}`;

    this.xhr.open("GET",endpoint);

    this.xhr.onload = function(){

        if(this.xhr.status === 200){
           const jsonResponse = JSON.parse(this.xhr.responseText);
           const text = jsonResponse.text[0];
           callback(null,text);
        }
        else{
            callback("Xəta baş verdi!",null);
        }
    }.bind(this);

    this.xhr.send();
}

TranslateConstructor.prototype.Changingvalues = function(newText,newLanguage){
    this.text = newText;
    this.language = newLanguage;

}

