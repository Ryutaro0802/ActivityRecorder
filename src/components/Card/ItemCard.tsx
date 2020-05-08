import React, { FC } from "react";
import { Text, Card, CardItem, Body } from "native-base";

interface ItemCardProps {
  title: string;
  body: string;
}

const ItemCard: FC<ItemCardProps> = ({ title, body }) => (
  <>
    <Card>
      <CardItem header>
        <Text>{title}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{body}</Text>
        </Body>
      </CardItem>
    </Card>
  </>
);

export default ItemCard;
