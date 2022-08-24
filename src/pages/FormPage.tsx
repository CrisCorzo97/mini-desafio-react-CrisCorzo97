import { useState } from "react";
import { Students, DATA } from "../constants/Data";

const FormPage = () => {
  const [adding, setAdding] = useState(false);
  const [data, setData] = useState<Students>({
    nombre: "",
    edad: 0,
    carrera: "",
    hobbie: "",
  });

  const formIncompleted: boolean =
    !data.nombre || !data.edad || !data.carrera || !data.hobbie;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAdding(true);

    DATA.push(data);

    setTimeout(() => {
      setAdding(false);
    }, 800);
  };

  return (
    <div className="row pt-4">
      <div className="col-md-4 offset-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              name="nombre"
              type="text"
              className="form-control mb-2"
              placeholder="Joaquín"
              onChange={(e) => setData({ ...data, nombre: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Edad</label>
            <input
              name="edad"
              type="text"
              className="form-control mb-2"
              placeholder="25"
              onChange={(e) =>
                setData({ ...data, edad: Number(e.target.value) })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Carrera</label>
            <input
              name="carrera"
              type="text"
              className="form-control mb-2"
              placeholder="Arquitectura"
              onChange={(e) => setData({ ...data, carrera: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Hobbie</label>
            <input
              name="hobbie"
              type="text"
              className="form-control mb-2"
              placeholder="Carpintería"
              onChange={(e) => setData({ ...data, hobbie: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={formIncompleted}
            className="btn btn-primary"
          >
            {adding ? "Agregando" : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
