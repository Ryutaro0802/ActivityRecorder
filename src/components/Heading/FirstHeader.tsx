import React, { FC } from "react";
import { Text } from "native-base";
import { StyleSheet } from "react-native";

interface FirstHeaderProps {
  title: string;
}

const FirstHeader: FC<FirstHeaderProps> = ({ title }) => {
  return (
    <>
      <Text style={styles.heading}>{title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default FirstHeader;
