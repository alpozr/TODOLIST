var a = 1;
function Ekle(){
  //girisleri alıyoruz place holderdan
    var alınan = document.getElementById("giris").value;
    var alınansaat= document.getElementById("saat").value;
    if(alınan==""|| alınansaat==""){
      alert("Lütfen boş alan bırakmayınız.");
    }
    else{
    var yazı= document.createTextNode(alınan);//alınan degerı dugume cevirdik.
    var saaat= document.createTextNode(alınansaat);
    var bosluk=document.createTextNode("----------->");
    var yeniitem=document.createElement("li");//yeni bir listed elemanı olusturduk.
    var span = document.createElement("SPAN");// carpı,checked,return isaretlerimiz icin spanlerimizi olusturduk.
    var txt = document.createTextNode("\u00D7");
    var span2 = document.createElement("SPAN");
    var txt2 = document.createTextNode("\u2714");
    var span3 = document.createElement("SPAN");
    var txt3 = document.createTextNode("\u2b90");
    span.appendChild(txt);//spanlerimizin icerisini unicode olarak verdigimiz sekillerimizle doldurduk
    span2.appendChild(txt2);
    span3.appendChild(txt3);
    span.className='close';//Csste ulaşabilmemiz için classname verdik
    span2.className='checked';//Csste ulaşabilmemiz için classname verdik
    span3.className='return';//Csste ulaşabilmemiz için classname verdik
    yeniitem.appendChild(yazı);//olusacak olan listed satırımızda nelerın olacagını tek tek verdik.
    yeniitem.appendChild(bosluk);
    yeniitem.appendChild(saaat);
    yeniitem.appendChild(span);
    yeniitem.appendChild(span2);
    yeniitem.appendChild(span3);
    document.getElementById("Sıralıliste").appendChild(yeniitem);// idsi sıralıliste olan 'ul'ye satırımızı komple verdik.
    //Seçilen itemi silebilmek için gereken kodumuz
    var item=document.getElementsByClassName('close');
    var i;
    for (i = 0; i < item.length; i++) {
      item[i].onclick = function() {
        var oeleman = this.parentElement;
        oeleman.style.display = "none";
      }
    }
    //Seçilen öğeyi çizmek için.
    var check=document.getElementsByClassName('checked');
  var c;
  for(c = 0; c < check.length; c++){
   check[c].onclick=function(){
     var yeni=this.parentNode;
     console.log(yeni);
     yeni.style.textDecorationLine="line-through";
   }
  }
  //Çizilen satırımızı default haline getirmek için;
  var returned=document.getElementsByClassName('return');
  var c;
  for(c = 0; c < returned.length; c++){
   returned[c].onclick=function(){
     var gerigetir=this.parentNode;
     console.log(gerigetir);
     gerigetir.style.textDecorationLine="none";
    }   
  }
}
}
function InputSil(){
    //placeholderları defaulta cevirdik.
    document.getElementById("giris").value="";
    document.getElementById("saat").value="";
}
function İpucu(){
  alert("Kullanım Kılavuzu : Kullanım Kılavuzu:\
  1-)X isareti : Eklediginiz satırı geri alır..\
  2-)Tik isareti : Eklediginiz satırı 'Yapıldı' olarak isaretler.\
  3-)Return isareti : 'Yapıldı' isaretlenen satırı 'Yapılmadı'haline geri getirir.");

}
  