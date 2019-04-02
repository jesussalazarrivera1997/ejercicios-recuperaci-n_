import {tresEnRaya} from './script2.js';
//console.log(cube(3)); 
var tresenralla=new tresEnRaya();
//alert ('funciona')
console.log(tresenralla.casillas);
console.log(tresenralla.jugar(2,2));
/*
	nuevatabla(x,y){
		let tabla="<table>"
		let cont1=0
		let cont2=0
		for (let i=0;i<x;i++){
			tabla+="<tr>";
			for (let z=0;z<y;z++){
				tabla+="<td id=\"idenº\""+cont1+""+cont2+"><button onclick=\"tresenralla.jugar("+cont1+","+cont2+")\"></td>";
				cont2++;
			}
			cont1++
			cont2=0
			tabla+="</tr>";
		}
		tabla+="</table>"

		document.getElementById("juego").innerHTML=tabla;
	}
	*/