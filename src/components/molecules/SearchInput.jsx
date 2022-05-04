import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryBtton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="Search....." />
      <SbuttonWrapper>
        <PrimaryButton>Search</PrimaryButton>
      </SbuttonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SbuttonWrapper = styled.div`
  padding-left: 8px;
`;
