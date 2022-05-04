import { PrimaryButton } from "./components/atoms/button/PrimaryBtton";
import { SecondaryBtton } from "./components/atoms/button/SecondaryBtton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryBtton>Search</SecondaryBtton>
      <br />
      <SearchInput />
    </div>
  );
};
