import quince from "../assets/15.png"

const Portada = () => {
    return (
        <section className="d-flex flex-column align-items-center portada">
            <aside className="linea">
              <h2 className="mis">mis</h2>
              <img src={quince} alt="" width={150} />
              <h2 className="años">años</h2>
            </aside>
            
            <h1>Pilar</h1>
        </section>
    );
};

export default Portada;