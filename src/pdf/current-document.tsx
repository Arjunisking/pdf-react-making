import {
  Document,
  Page,
  StyleSheet,
  Text as PDFText,
  View,
} from "@react-pdf/renderer";

export default function CurrentDocument() {
  return (
    <Document title="PDF Test">
      <Page size="A4" style={styles.page}>
        <View style={styles.box}>
          <PDFText style={styles.title}>PDF test works</PDFText>
          <PDFText style={styles.text}>
            If this downloads, the app is fine and the GREENSPACEDEV document is causing the render hang.
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
  box: {
    padding: 24,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});
