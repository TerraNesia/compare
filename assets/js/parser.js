var file = "assets/data/weapon";
var test = '| name = Zombie Arm';
var separator = test.replace('|', '');
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
function debug(){
	alert("lel");
	alert(parse(test));
}
function parse(name){
	var rawFile = new XMLHttpRequest();
	var namefindpatt = /\| name \= [a-zA-Z0-9_ ]+/g;
	var namereplacepatt = /\| name \= /;
    rawFile.open("GET",file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var result = rawFile.responseText;
				
                alert(result);
				
				
				
            }
        }
    };
    rawFile.send(null);
	
	var itemname = name.replace(namereplacepatt, '');
	return itemname;
}
