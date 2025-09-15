const enkripsi = (inputText, key) => {
  let hasil = "";
  console.log(key);

  for (let i = 0; i < inputText.length; i++) {
    let kode = inputText.charCodeAt(i);

    //huruf kecil
    if(kode >= 97 && kode <= 122){
        hasil += String.fromCharCode(((kode - 97) +key) % 26 + 97);
    }
    else if(kode >= 65 && kode <= 90){
        hasil += String.fromCharCode(((kode - 65) + key) % 26 + 65);
    }
    else {
      hasil += inputText[i]; // biarkan spasi, angka, dll
    }
  }
  return hasil;
};


export { enkripsi };
