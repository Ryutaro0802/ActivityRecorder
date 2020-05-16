import React from "react";
import { Container, Header, Body, Title } from "native-base";
import ActivityItemForm from "../../containers/ActivityItemForm";

function FormScreen() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Form</Title>
        </Body>
      </Header>
      <ActivityItemForm />
    </Container>
  );
}

export default FormScreen;
