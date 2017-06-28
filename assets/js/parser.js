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
	var namepatt = /^\| name \= [a-zA-Z0-9_ ]$/g;
    rawFile.open("GET",file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var result = rawFile.responseText;
				var replaced = result.replace(/\| name \=/g,'');
                alert(replaced);
				
				var numOfTrue = 0;
				for(var i=0;i<result.length;i++){
   				 if(result.match(namepatt))
       				numOfTrue++;
				}
				alert(numOfTrue);
            }
        }
    };
    rawFile.send(null);
	
	var itemname = name.replace(/\| name \=/, '');
	return itemname;
}
