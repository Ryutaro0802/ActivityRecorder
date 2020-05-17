import React from "react";
import { Container, Content, Header, Body, Title } from "native-base";
import ActivityItemList from "../../containers/ActivityItemList";

function ListScreen() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>List</Title>
        </Body>
      </Header>
      <Content>
        <ActivityItemList />
      </Content>
    </Container>
  );
}

export default ListScreen;
