import Navbar from "../components/Navbar";
import ArriendoCard from "../components/Arriendo";
import Solicitud from "../components/Solicitud";

export default function Arrendador() {
  return (
    <>
      <Navbar />
      <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ArriendoCard />
        <ArriendoCard />
        <ArriendoCard />
        <ArriendoCard />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Solicitud />
        <Solicitud />
        <Solicitud />
        <Solicitud />
      </div>
      </div>
    </>
  );
}
