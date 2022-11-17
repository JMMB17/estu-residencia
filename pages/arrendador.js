import Navbar from "../components/Navbar";
import Solicitud from "../components/Solicitud";

export default function Arrendador() {

  const columnStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }

  return (
    <>
      <Navbar />
      <div style={columnStyles}>
        <Solicitud />
        <Solicitud />
        <Solicitud />
        <Solicitud />
      </div>
        
    </>
  );
}
