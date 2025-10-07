

const Varios = () => {
    return (
        <section className="varios container">
             <article className="row">
        <aside className="col-xs-12 text-center cuando mb-4 mt-5 position-relative">
            <img src={brillo} alt="" className="brillo brillo-top"/>
          <img src={misa} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Misa
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            23 de noviembre Virgen de la merced<br />
            21:30
          </p>
        </aside>
        <aside className="col-xs-12 text-center cuando mb-4 mt-5 position-relative">
            <img src={brillo} alt="" className="brillo brillo-top"/>
          <img src={copas} alt="" width={150} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Fiesta
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            29 de noviembre <br />
            21:30
          </p>
        </aside>
        <aside className="col-xs-12 text-center donde mb-4 position-relative">
          <img src={boladisco} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            ¿Dónde?
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Salón Torre Molino
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() =>
              window.open("https://maps.app.goo.gl/TZHeGarFSuTrbdZf7")
            }
          >
            CÓMO LLEGAR
          </button>
          <img src={brillo} alt="" className="brillo brillo-bottom" />
        </aside>
        <aside className="col-xs-12 text-center dressCode mb-4">
          <img src={dressCode} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            DressCode
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Elegante<br /> Evitar el color rojo
          </p>
        </aside>
        <aside className="col-xs-12 text-center playlist mb-4">
          <img src={Notamusical} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            PLAYLIST
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            ¡Creemos la playlist de la noche juntos!
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() =>
              window.open(
                "https://open.spotify.com/playlist/2WHLlY0yQwWhGNDeti796r?si=DbqX2fBeShiJS8w295xqUQ"
              )
            }
          >
            Sugerir canción
          </button>
        </aside>
        <aside className="col-xs-12 text-center asistencia mb-4">
          <img src={asistencia} alt="" width={100} />
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Soñé con este día y me gustaría vivirlo con quienes más quiero...
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() => window.open("https://wa.link/26qz7t")}
          >
            Confirmar Asistencia
          </button>
        </aside>
        <aside className="col-xs-12 text-center regalo mb-5">
          <img src={regalo} alt="" width={100} />
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            El mejor regalo que pueda tener será tu presencia
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() => setShowModal(true)}
          >
            Enviar regalo
          </button>
          {/* Modal */}
          {showModal && (
            <div
              className="modal-custom position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow text-center"
              style={{
                zIndex: 9999, // 🔑 siempre arriba de todo
                width: "90%",
                maxWidth: "350px",
              }}
            >
              <h5 className="mb-3 fw-bold modalh5">Datos para el regalo</h5>

              {/* Los <p> ahora sí se ven */}
              <p className="mb-1">
                <strong>Alias:</strong> roxi.53
              </p>
              <p className="mb-3">
                <strong>A nombre de:</strong><br/>Roxana Portuese
              </p>

              <button
                className="btn-varios2"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          )}
        </aside>
      </article>
        </section>
    );
};

export default Varios;