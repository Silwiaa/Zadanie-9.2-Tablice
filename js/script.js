var femaleNames = ['Ania', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Tomek', 'Olek', 'Romek', 'Sławek', 'Franek'],
    allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';
   
if (allNames.indexOf(newName) === -1) {
    newAllNames = allNames.push(newName);
    }
 
console.log(newAllNames);