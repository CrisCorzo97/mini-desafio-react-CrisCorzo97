import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="row pt-4">
      <div className="col-md-4 offset-md-4">
        <div className="card card-body">
          <h3 className="text-center">Página no encontrada</h3>
          <button onClick={handleNavigation} className="btn btn-primary mt-4">
            Ir al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
