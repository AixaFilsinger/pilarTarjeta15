import quince from "../assets/15.png"
import princesa from "../assets/princesa.jpg"
import castillo from "../assets/castillo.jpg"

const Portada = () => {
    return (
       <section className="d-flex flex-column align-items-center portada">
  

  <aside className="linea">
    <h2 className="mis">mis</h2>
    <img src={quince} alt="" width={150} />
    <h2 className="años">años</h2>
  </aside>

  <h1>Pilar</h1>
  <img src={castillo} alt="" className="decor decor-izq" width={500}/>
  <img src={princesa} alt="" className="decor decor-der" width={500}/>
</section>

    );
};

export default Portada;