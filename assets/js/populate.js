var weaponData = {};

window.onload = function(){
	populate();
	addEventHandler();
};

function populate(){
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("load", function(){
		if(this.readyState == xhr.DONE){
			if(this.status == 200){
				var bracketexp = /{{(.*?)}}/g;
				var rawData = this.response;
				rawData = rawData.replace(/[\r\n]+/g, " ");
				var splitted = rawData.match(bracketexp);
				var finalData = new Array();
				splitted.forEach(function(e){
					var x = e.substr(2, e.length - 4);
					finalData.push(x.split("|").slice(1));
				});
				finalData.forEach(function(e){
					var obj = {};
					e.forEach(function(f){
						var g = f.split("=");
						g.forEach(function(h, i){
							g[i] = h.trim();
						});
						obj[g[0]] = g[1];
					});
					weaponData[obj["name"]] = obj;
				});

				var datalist = document.getElementById('items');
				Object.keys(weaponData).forEach(function(e){
					var opt = document.createElement("option");
					opt.setAttribute("value", e);
					datalist.append(opt);
				});
			}
		}
	});
	xhr.open("GET", "assets/data/weapon");
	xhr.send();
}
