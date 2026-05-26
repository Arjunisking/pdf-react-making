import {
  Document,
  Page,
  StyleSheet,
  Text as PDFText,
  View,
} from "@react-pdf/renderer";

export default function CurrentDocument() {
  return (
    <Document title="Current PDF">
      <Page size="A4" style={styles.page}>
        <View style={styles.card}>
          <PDFText style={styles.title}>PDF Project Ready</PDFText>
          <PDFText style={styles.body}>
            This file is the only document file you need to replace when creating a new PDF.
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  body: {
    fontSize: 11,
    lineHeight: 1.5,
  },
});
