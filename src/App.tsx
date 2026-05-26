import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import CurrentDocument from "./pdf/current-document";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function downloadPdf() {
    try {
      setLoading(true);
      setError(null);

      const blob = await pdf(<CurrentDocument />).toBlob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "greenspacedev-company-profile.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", width: "100vw", display: "grid", placeItems: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ width: 420, padding: 24, border: "1px solid #ddd", borderRadius: 12 }}>
        <h1 style={{ marginTop: 0, fontSize: 22 }}>PDF Generator</h1>
        <p style={{ color: "#555", lineHeight: 1.5 }}>
          Click the button to generate and download the current PDF document.
        </p>

        <button
          onClick={downloadPdf}
          disabled={loading}
          style={{ padding: "12px 16px", cursor: loading ? "not-allowed" : "pointer" }}
        >
          {loading ? "Generating PDF..." : "Download GREENSPACEDEV PDF"}
        </button>

        {error ? (
          <pre style={{ marginTop: 16, color: "crimson", whiteSpace: "pre-wrap" }}>{error}</pre>
        ) : null}
      </div>
    </div>
  );
}
