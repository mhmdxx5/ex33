(function(){
var fName="Mhmd";
var lName="otmani";
var changeButton=document.getElementsByTagName("button")[0];
var restButton=document.getElementsByTagName("button")[1];
var x=sumFullName(fName,lName);
var z=makeArticle(x);
var article1=document.getElementsByTagName("article")[0];
changeButton.onclick=function(){
    changeColor(fName);
};
restButton.onclick=function(){
    restColor(fName);
};
article1.onmouseover=function(){
    
    changeBack();
};

function changeBack(){
    article1.style.backgroundImage=" url('../images/ARTICLE.png')";
    
};

function restColor(fName){
    var sum=0;
    for(n in fName){
        sum++;
    }
    var articles=document.getElementsByTagName("article");
    for(i=0;i<sum;i++)
    {
        articles[i].style.backgroundColor="white";
    }


}

function changeColor(fName){  
     var sum=0;
    for(n in fName){
        sum++;
    }
    var articles=document.getElementsByTagName("article");
    for(i=0;i<sum;i++)
    {
        articles[i].style.backgroundColor="black";
    }

}
function makeArticle(sumFullName){
    var articles="";
    for(i=0;i<sumFullName;i++){
    articles+="<article></article>";
    }
    var main=document.getElementsByTagName("main")[0];
    main.innerHTML=articles;
    return 5;
}

function sumFullName(fName,lName){
    var sum=0;
    var sum2=0;
    var n=0;

    for(n in fName){
        sum++;
    }
    for(n in lName){
        sum2++;
    }
    sum=sum*sum2;
return (sum);
}






})();


