import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import CurrentDocument from "./pdf/current-document";

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", margin: 0 }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong>PDF Preview</strong>
        <PDFDownloadLink document={<CurrentDocument />} fileName="generated-document.pdf">
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>
      </div>

      <PDFViewer width="100%" height="100%">
        <CurrentDocument />
      </PDFViewer>
    </div>
  );
}
