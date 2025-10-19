import "./App.css";
import NewAnchor from "./components/newanchor/NewAnchor";
import FallingPetals from "./components//myanimation/fallingpetals/FallingPetals";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <FallingPetals />
      <NewAnchor />
      <footer
        style={{
          textAlign: "center",
          padding: "16px",
          color: "#666",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} aihixi. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
