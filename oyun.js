var gizliNumara = 15;//önce bi değişken tanımalamam gerekiyor.

var kullaniciNumara = prompt("Bir Sayi tahmin Et!");
var tahmin = Number(kullaniciNumara); 

// Kontrol yapılarını kullanıcaz
if(tahmin === gizliNumara){
	alert("Evet gizli numarayı buldun. Gizli numara" + gizliNumara + "idi.");

}else if (tahmin > gizliNumara){
	alert("Cok buyuk tahmin ettin.Birazcik dus.");
}else{
	alert("Cok kucuk tahmin ettin birazcık cık.");
}

