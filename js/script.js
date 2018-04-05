var txt = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period";
  console.log(txt.length);

var dinosaur ="triceratops";
 dinosaur = dinosaur.toUpperCase("triceratops");
  console.log(dinosaur);
  txt = txt.replace('Velociraptor', dinosaur);
  console.log(txt);
  console.log(txt.length);
  console.log(typeof txt);
var partOfTxt = txt.slice(0,69);
//Specjalnie dałam nie równo w połowie długości czyli koło indeksu 72, tylko troszkę wcześniej na indeksie 69, żeby słowo "appeared" nie zostało podzielone na dwa.
var partOfTxt2 = txt.slice(69,143);
//Utworzyłam po raz drugi tą zmienną za pomocą funkcji slice do przećwiczenia jej działania.
  console.log(partOfTxt);
  console.log(partOfTxt2);
  document.write("<br>" + partOfTxt);
  document.write("<br>" + partOfTxt2);
