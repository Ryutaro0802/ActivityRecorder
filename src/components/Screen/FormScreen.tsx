import React from "react";
import { Container, Content, Header, Body, Title } from "native-base";
import ActivityItemForm from "../../containers/ActivityItemForm";

function FormScreen() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Form</Title>
        </Body>
      </Header>
      <Content>
        <ActivityItemForm />
      </Content>
    </Container>
  );
}

export default FormScreen;
