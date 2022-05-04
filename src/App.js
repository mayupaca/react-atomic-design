import { PrimaryButton } from "./components/atoms/button/PrimaryBtton";
import { SecondaryBtton } from "./components/atoms/button/SecondaryBtton";
import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryBtton>Search</SecondaryBtton>
    </div>
  );
};
