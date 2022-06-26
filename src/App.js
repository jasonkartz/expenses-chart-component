import Attribution from "./Attribution";
import Balance from "./Balance";
import Spending from "./Spending";

function App() {
  return (
    <main>
      <div class="container">
        <Balance />
        <Spending />
        <Attribution />
      </div>
    </main>
  );
}

export default App;
