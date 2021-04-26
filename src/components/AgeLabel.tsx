import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../styles/colors";

interface TextProps {
  content: number;
}

export function AgeLabel({ content }: TextProps) {
  function handleColor() {
    let computedColor = "";

    if (content < 20) {
      return (computedColor = colors.light_blue);
    }

    if (content >= 20 && content <= 40) {
      return (computedColor = colors.purple);
    }

    if (content > 40) {
      return (computedColor = colors.orange);
    }

    return computedColor;
  }

  return (
    <Text style={[styles.content, { color: handleColor() }]}>{content}</Text>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
