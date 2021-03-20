/* const foo = "asu1";
let namaAsu = "";

switch (foo) {
    case "asu2":
        namaAsu = "asu21";
        break;
    case "asu1":
        namaAsu = "asu12";
        break;
    default:
        namaAsu = "asu69420bois";
        break;
}

console.log(namaAsu); */


const nomor = 1;
let buah = "";
function pilihBuah(nomor){
    switch (nomor) {
        case 1:
            buah = "apel";
            break;
    
        case 2:
            buah = "mangga";
            break;

        default:
            buah = "leci";
            break;
    }
}

pilihBuah(1);
console.log(buah);