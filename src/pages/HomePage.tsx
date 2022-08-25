import "../css/HomePage.css";
import students from "../images/estudiantes.jpg";

const HomePage = () => {
  return (
    <div className="home-container">
      <img src={students} alt="none" />
      <div className="hero-container">
        <h1>¡Bienvenidos!</h1>
      </div>
    </div>
  );
};

export default HomePage;
