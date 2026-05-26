import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { InvoiceModernDocument } from "./blocks/pdfx/invoice-modern/invoice-modern";

export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
        <PDFDownloadLink document={<InvoiceModernDocument />} fileName="invoice.pdf">
          {({ loading }) => (loading ? "Generating PDF..." : "Download Invoice PDF")}
        </PDFDownloadLink>
      </div>

      <PDFViewer width="100%" height="100%">
        <InvoiceModernDocument />
      </PDFViewer>
    </div>
  );
}


