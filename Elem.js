
class Elem {
  #allapot;
  #index;

  constructor(index, allapot, SZULOELEM) {
    this.#allapot = allapot;
    this.#index = index;
    SZULOELEM.append('<div class="elem"><p></p></div>');
    this.mezoElem = SZULOELEM.children("div:last-child");

    this.mezoElem.on("click", () => {
      this.kattintas();
      //console.log(this.#index);
    });





  }
  
  LepesSzama = 0;

  kattintas() {
    console.log("működik a kattintás")


    $(window).on("Valasztas", (esemeny) => {
      this.szimbolumValasztasa(esemeny.detail);
  });


    console.log(this.#index);


    console.log(LepesSzama);
    let txt = "";
    if (LepesSzama % 2 == 0) {
                txt += "<p>X</p>";
              } else {
                txt += "<p>O</p>";
              }

    //this.mezoElem.children("txt");
    LepesSzama++;
    if (LepesSzama >= 9) { alert("Vége a játékos időnek"); }


    //  $("div").click(function() {
    //    if (p === null) {
    //      $(p).append(jel)
    //    }
    //  });





  }

}


//<p class="id">${this.id}</p>

//                    </div > `;
//        szuloElem.append(elem);

export default Elem;
