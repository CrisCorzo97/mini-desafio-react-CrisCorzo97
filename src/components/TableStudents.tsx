import { DATA, Students } from "../constants/Data";

const TableStudents = () => {
  return (
    <table className="table table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>Hobbie</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {DATA.map(({ nombre, edad, carrera, hobbie }: Students, i: number) => (
          <tr key={`${i}-${nombre}`}>
            <td>{nombre}</td>
            <td>{edad}</td>
            <td>{carrera}</td>
            <td>{hobbie}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableStudents;
