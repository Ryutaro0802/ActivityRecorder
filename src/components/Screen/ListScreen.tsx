import React from "react";
import { Container, Header, Body, Title } from "native-base";
import ActivityItemList from "../../containers/ActivityItemList";

function ListScreen() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>List</Title>
        </Body>
      </Header>
      <ActivityItemList />
    </Container>
  );
}

export default ListScreen;
