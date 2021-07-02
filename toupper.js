//For this solution, we will use the String.prototype.toLowerCase() method, the String.prototype.split() method and the String.prototype.substring()
// The toLowerCase() method returns the calling string value converted to lowercase
// The split() method splits a String object into an array of strings by separating the string into substrings
// The substring() method display characters from the string

// Step 1. Lowercase the string
// Step 2. Split the string into an array of strings
// Step 3. Create the FOR 
//  Return the output

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
