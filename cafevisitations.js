var name = "matthew";
var age =17;
var money =1000000;
var juice = "Juice";
var anggur = "Anggur";
var hargaJuice = 50000;
var hargaAnggur = 300000;
var sisaMoney ="";

if (name == ""){
  console.log("Anda tidak boleh masuk")
}
else if (name !== ""&& age <=17 && money >= 50000){
  sisaMoney = money - hargaJuice
  console.log("Anda bisa pesan minum. Sisa uang anda:"+ sisaMoney)
}
else if (name !==""&& age <=17 && money <= 50000){
  console.log("Uang anda tidak cukup. Anda harus pulang")
}
else if (name !==""&& age >=17 && money >= 300000){
  sisaMoney = money - hargaAnggur
  console.log("Anda bisa pesan minum. Sisa uang anda:"+ sisaMoney)
}
else if (name !==""&& age >=17 && money <= 300000){
  console.log("Uang anda tidak cukup. Anda harus pulang")
}