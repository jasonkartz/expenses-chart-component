import Attribution from "./Attribution";
import Balance from "./Balance";
import Spending from "./Spending";

function App() {
  return (
    <main>
      <div className="container">
        <Balance />
        <Spending />
        <Attribution name={"Jason Kartz"} />
      </div>
    </main>
  );
}

export default App;
