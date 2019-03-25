/*4. The Geometrizer
Create 2 functions that calculate properties of a circle.
Create a function called calcCircumfrence:
Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
 */
function circunference(radio) {
    var circu = radio * 3.14;
    document.write("la circumferencia de radio " + radio + "mide un total de" + circu + "");
};
circunference(9);
function areacirculo(radio) {
    var area = 3.14 * radio * radio;
    document.write("la circumferencia de radio " + radio + " su area es " + area + "");
};
areacirculo(9);