import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryBtton";
import { SecondaryBtton } from "./components/atoms/button/SecondaryBtton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "Jessica",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "111111@sssss.com",
  phone: "647-123-4569",
  company: {
    name: "Website"
  },
  website: "https://google.com"
};

export const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>Test</PrimaryButton>
        <SecondaryBtton>Search</SecondaryBtton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
};
