function dividir (numero1, numero2){
    if (numero2==0){
        return "No se puede dividir por 0";
    }   else {
        return numero1/numero2;
    }
}
console.log (dividir(55,1));