import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 48,
    backgroundColor: "#09271B",
  },
  logo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFDF7",
    marginBottom: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#FFFDF7",
    marginBottom: 18,
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
    color: "#EAF2E6",
    marginBottom: 10,
  },
});

export default function CurrentDocument() {
  return React.createElement(
    Document,
    { title: "GREENSPACEDEV Company Profile" },
    React.createElement(
      Page,
      { size: "A4", style: styles.page },
      React.createElement(Text, { style: styles.logo }, "GREENSPACEDEV"),
      React.createElement(Text, { style: styles.title }, "Designing Smarter, Healthier, Greener Spaces"),
      React.createElement(
        Text,
        { style: styles.text },
        "Premium green living solutions for homes, rooftops, balconies, offices, cafes, villas, and commercial properties."
      ),
      React.createElement(Text, { style: styles.text }, "50+ cities across India"),
      React.createElement(Text, { style: styles.text }, "09 core green services"),
      React.createElement(Text, { style: styles.text }, "AI-assisted space recommendations")
    )
  );
}
