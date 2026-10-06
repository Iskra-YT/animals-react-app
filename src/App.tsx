import animals from "./data/animals.json";
import type { Animal } from "./types/Animal";

function App() {
  return (
    <div>
      {animals.map((animal: Animal) => (
        <div key={animal.name}>
          <h2>{animal.name}</h2>
          <p>Kontynent: {animal.continent}</p>
          <p>Prędkość: {animal.averageSpeed} km/h</p>
          <p>Waga: {animal.weight} kg</p>
        </div>
      ))}
    </div>
  );
}

export default App
