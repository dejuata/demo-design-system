import "./App.css";
import { PdsButton, defineCustomElements } from "demo-components-react";

defineCustomElements();

function App() {
  return (
    <div className="App">
      <div>
        <p>Button primary medium</p>
        <PdsButton>Button</PdsButton>
      </div>
      <div>
        <p>Button primary small</p>
        <PdsButton size="small">Button</PdsButton>
      </div>
      <hr />
      <div>
        <p>Button secondary medium</p>
        <PdsButton variant="secondary">Button</PdsButton>
      </div>
      <div>
        <p>Button secondary small</p>
        <PdsButton variant="secondary" size="small">
          Button
        </PdsButton>
      </div>
      <hr />
      <div>
        <p>Button tertiary medium</p>
        <PdsButton variant="tertiary">Button</PdsButton>
      </div>
      <div>
        <p>Button tertiary small</p>
        <PdsButton variant="tertiary" size="small">
          Button
        </PdsButton>
      </div>
      <hr />
      <div>
        <p>Button disabled</p>
        <PdsButton disabled>Button</PdsButton>
      </div>
      <div>
        <p>Button secondary disabled</p>
        <PdsButton disabled variant="secondary">
          Button
        </PdsButton>
      </div>
    </div>
  );
}

export default App;
