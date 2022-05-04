import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWIthName } from "../../molecules/user/UserIconWIthName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWIthName image={user.image} name={user.name} />
      <SDl>
        <dt>Mail</dt>
        <dd>{user.email}</dd>
        <dt>Phone Number</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>Website</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 100px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
