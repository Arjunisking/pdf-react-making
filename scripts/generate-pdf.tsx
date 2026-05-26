import React from "react";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { renderToFile } from "@react-pdf/renderer";
import CurrentDocument from "../src/pdf/current-document";

async function main() {
  const outputDir = resolve(process.cwd(), "public");
  const outputPath = resolve(outputDir, "generated-document.pdf");

  mkdirSync(outputDir, { recursive: true });

  console.log("Generating PDF from src/pdf/current-document.tsx...");
  await renderToFile(React.createElement(CurrentDocument), outputPath);
  console.log(`PDF generated successfully: ${outputPath}`);
}

main().catch((error) => {
  console.error("PDF generation failed:");
  console.error(error);
  process.exit(1);
});
