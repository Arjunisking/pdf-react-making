import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import TestDocument from "./pdf/greenspace-document";

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
        <PDFDownloadLink document={<TestDocument />} fileName="greenspacedev-company-profile.pdf">
          {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
        </PDFDownloadLink>
      </div>

      <PDFViewer width="100%" height="100%">
        <TestDocument />
      </PDFViewer>
    </div>
  );
}