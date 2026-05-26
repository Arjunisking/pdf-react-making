import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  Text as PDFText,
  View,
} from "@react-pdf/renderer";

void React;

export default function CurrentDocument() {
  return (
    <Document title="Imported Document Test">
      <Page size="A4" style={styles.page}>
        <View style={styles.card}>
          <PDFText style={styles.title}>Imported current-document works</PDFText>
          <PDFText style={styles.text}>
            This confirms the generator can import src/pdf/current-document.tsx and create a valid PDF.
          </PDFText>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
  },
  card: {
    padding: 24,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 11,
    lineHeight: 1.5,
  },
});
