import ArriendoCard from "../components/Arriendo";
import Navbar from "../components/Navbar";

export default function Arrendatario() {
  return (
    <>
      <Navbar />
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
    </>
  );
}
