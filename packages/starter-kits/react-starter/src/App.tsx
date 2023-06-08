import {
  MyComponent,
  PdsButton,
  defineCustomElements,
} from "react-library";

defineCustomElements();

function App() {
  return (
    <div className="App">
      <h1>Hola mundo!!</h1>
      <PdsButton >Button</PdsButton>
      <PdsButton variant="secondary">Button</PdsButton>
      <MyComponent first="Cristian" middle="Gabriel" />

    </div>
  );
}

export default App;
