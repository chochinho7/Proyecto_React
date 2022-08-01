import "./App.scss";
import ItemCount from "./components/ItemCount";
import NavbarPrimary from "./components/NavBar/NavBarPrimary";

function App() {
  const onAdd = (num) => {
    console.log(num);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ecommerce</h1>
        <NavbarPrimary />
      </header>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
}

export default App;