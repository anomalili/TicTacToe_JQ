import Elem from "./Elem.js";

class Jatekter {
  #mezoLista = []
  constructor(jatekterMeret) {
    this.jatekterMeret = jatekterMeret
    $(":root").css("--palyaMeret", jatekterMeret)
    const SZULOELEM = $("article");
    for (let index = 0; index < jatekterMeret * jatekterMeret; index++) {
      const UJMEZO = new Elem(index, false, SZULOELEM);
      this.#mezoLista.push(UJMEZO)
    }

    $(window).on("kattintas", (event) => {
      this.valtoztat(event.detail);
    })

    /*valtoztat() {
      
    }*/
  }

}
export default Jatekter;
