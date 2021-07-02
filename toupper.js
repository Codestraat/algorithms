var str="hi all. this is my uppercase. i am trying this out.";
function toUpperCase(strval){
    
 var newstrs = strval.split(".");
    var laststr="";
    //alert(strval);
    for(var i=0;i<newstrs.length;i++)
        laststr=laststr+"."+ newstrs[i].substr(0,2).toUpperCase()+newstrs[i].substr(2);
    return laststr.substr(1);
}

console.log(toUpperCase(str));