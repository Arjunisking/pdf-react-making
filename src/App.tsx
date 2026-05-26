export default function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column", margin: 0 }}>
      <div style={{ padding: "12px 16px", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <strong>PDF Preview</strong>

        <a
          href="/generated-document.pdf"
          download="greenspacedev-company-profile.pdf"
          style={{ padding: "10px 14px", border: "1px solid #222", borderRadius: 8, textDecoration: "none", color: "#111" }}
        >
          Download PDF
        </a>
      </div>

      <iframe
        src="/generated-document.pdf"
        title="PDF Preview"
        style={{ width: "100%", height: "100%", border: 0 }}
      />
    </div>
  );
}
