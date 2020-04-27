import React, { FC } from 'react'
import { Text, Card, CardItem, Body } from 'native-base'
import { ShadowPropTypesIOS } from 'react-native'

interface ItemCardProps {
    title: string
    body: string
}

const ItemCard: FC<ItemCardProps> = props => (
    <>
        <Card>
            <CardItem header>
                <Text>
                    {props.title}
                </Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                        {props.body}
                    </Text>
                </Body>
            </CardItem>
        </Card>
    </>
)

export default ItemCard