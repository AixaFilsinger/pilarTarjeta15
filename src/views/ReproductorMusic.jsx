import repro from "../assets/repro.png";
import corona from "../assets/corona.png";

const ReproductorMusic = () => {
  return (
    <section className="text-center d-flex flex-column justify-content-center align-items-center h-50">
      <img src={corona} alt="" width={150} className="mb-2"/>

      <img src={repro} alt="" width={70} />
    </section>
  );
};

export default ReproductorMusic;
