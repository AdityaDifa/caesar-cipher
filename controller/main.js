import { enkripsi } from "./enkripsi.js";

const tombol = document.getElementById("tombol");

tombol.addEventListener("click",()=>{
    let key = document.getElementById("key").value;
    let numberKey;;
    let inputText = document.getElementById("inputText").value;
    let outputText = document.getElementById("outputText");
    let hasil;
    let mode = document.querySelector('input[name="mode"]:checked');

    //pastikan user tidak aneh2 dengan menggunakan minus/non-angka
    if(isNaN(key)){ //jika non angka
        alert("masukan key berupa angka");
    }
    else if(Number(key) < 0){ //jika minus
        alert("jangan masukan angka negatif");
    }
    else{ //jika benar
        numberKey = Number(key);
    }

    //jika enkripsi
    if(mode.value ==="enkripsi"){
        hasil = enkripsi(inputText,numberKey);
        console.log("enkripsi");
    }
    else if(mode.value === "dekripsi"){
        while(numberKey > 26){
            numberKey = numberKey - 26;
        }
        numberKey = 26 - numberKey;
        hasil= enkripsi(inputText,numberKey);
        console.log("dekripsi");
    }

    outputText.value = hasil;

    console.log(hasil)
});