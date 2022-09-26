
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
      console.log(this.#index);
    });





  }

  kattintas() {
    // console.log("működik a kattintás")
    let esemeny = new CustomEvent("Valasztas", { detail: this.#index })
    window.dispatchEvent(esemeny);

    console.log(this.#index);

    let index = 0;
    let win = true;

    //  $("div").click(function() {
    //    if (p === null) {
    //      $(p).append(jel)
    //    }
    //  });

    while (win) {
      //console.log("win ciklkus");
      if (index % 2 == 0) {
        this.text = "<p>X</p>";
      } else {
        this.text = "<p>O</p>";
      }
      $("article.append("íjkfdhaskjfhjkds");
      index++;
    }
  }

}


<p class="id">${this.id}</p>
                      
                    </div > `;
        szuloElem.append(elem);

export default Elem;
