function setInfo(url, callback) {
	document.getElementById("call").innerHTML = "Slack";
	setTimeout(function(){
var data = "Grupos del Slack";
callback(data);
	}, 4500);
};
function load(){
    document.getElementById("load").innerHTML="Loading"
   setTimeout(function(){
    for(i=0;i<=4;i++){
        
            document.getElementById("load").innerHTML +="."
            
    }
        
   },2000);}
function fillDiv(data){
	document.getElementById("cont").innerHTML=data;
}
load();
setInfo("twitter.com/api/bla", fillDiv);