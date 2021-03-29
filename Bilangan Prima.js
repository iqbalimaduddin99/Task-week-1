const apakahPrima = (angka) => {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
      if(angka%i == 0){
        pembagi++
}
    } if(pembagi == 2){
      console.log("prima")
    } else{
      console.log("bukan prima")
    }
}
  
  // TEST CASES
  apakahPrima(23); //prima
