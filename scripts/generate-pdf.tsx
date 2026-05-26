import React from "react";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { Document, Page, Text, View, StyleSheet, renderToFile } from "@react-pdf/renderer";

const e = React.createElement;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#FFFDF7",
  },
  cover: {
    padding: 48,
    backgroundColor: "#09271B",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFDF7",
    lineHeight: 38,
    marginBottom: 18,
  },
  brand: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFDF7",
    marginBottom: 80,
    letterSpacing: 1.5,
  },
  coverText: {
    fontSize: 12,
    color: "#EAF2E6",
    lineHeight: 18,
    marginBottom: 12,
  },
  header: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#123A2A",
    marginBottom: 8,
  },
  pageLabel: {
    fontSize: 8,
    color: "#5F7D4B",
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#09271B",
    lineHeight: 28,
    marginBottom: 16,
  },
  body: {
    fontSize: 10,
    color: "#1F2A24",
    lineHeight: 15,
    marginBottom: 10,
  },
  bullet: {
    fontSize: 10,
    color: "#1F2A24",
    lineHeight: 15,
    marginBottom: 7,
  },
  section: {
    marginBottom: 16,
  },
});

const document = e(
  Document,
  { title: "GREENSPACEDEV Company Profile" },

  e(
    Page,
    { size: "A4", style: styles.cover },
    e(Text, { style: styles.brand }, "GREENSPACEDEV"),
    e(Text, { style: styles.title }, "Designing Smarter, Healthier, Greener Spaces"),
    e(Text, { style: styles.coverText }, "Premium green living solutions for homes, balconies, rooftops, offices, cafes, villas, and commercial properties."),
    e(Text, { style: styles.coverText }, "50+ cities across India"),
    e(Text, { style: styles.coverText }, "09 core green services"),
    e(Text, { style: styles.coverText }, "AI-assisted space recommendations"),
    e(Text, { style: styles.coverText }, "greenspacedev.com | hello@greenspacedev.com | +91 98765 43210")
  ),

  e(
    Page,
    { size: "A4", style: styles.page },
    e(Text, { style: styles.header }, "GREENSPACEDEV"),
    e(Text, { style: styles.pageLabel }, "01 / About"),
    e(Text, { style: styles.heading }, "An eco-tech green living platform for modern spaces."),
    e(Text, { style: styles.body }, "GREENSPACEDEV helps people design, plan, and maintain beautiful plant-based spaces for modern homes and commercial environments."),
    e(Text, { style: styles.body }, "We combine plant expertise, space planning, AI-assisted recommendations, and end-to-end installation support to make greenery practical, premium, and easy to manage."),
    e(Text, { style: styles.body }, "We do not just sell plants. We help people understand which plants suit their space, where they should be placed, how they should be maintained, and how greenery can improve the look, comfort, air quality, and overall experience of a space."),
    e(Text, { style: styles.header }, "Mission"),
    e(Text, { style: styles.body }, "To make green living simple, intelligent, and accessible for modern urban spaces."),
    e(Text, { style: styles.header }, "Vision"),
    e(Text, { style: styles.body }, "To become India’s trusted eco-tech platform for premium green spaces, sustainable interiors, rooftop gardens, and plant-based lifestyle solutions.")
  ),

  e(
    Page,
    { size: "A4", style: styles.page },
    e(Text, { style: styles.header }, "GREENSPACEDEV"),
    e(Text, { style: styles.pageLabel }, "02 / Problem & Solution"),
    e(Text, { style: styles.heading }, "Urban spaces are crowded, polluted, stressful, and disconnected from nature."),
    e(Text, { style: styles.bullet }, "• Plants die because they are placed in the wrong location."),
    e(Text, { style: styles.bullet }, "• People choose plants that do not match their light, room type, or climate."),
    e(Text, { style: styles.bullet }, "• Indoor air quality remains poor because the space is not planned properly."),
    e(Text, { style: styles.bullet }, "• Balconies and rooftops remain unused or poorly designed."),
    e(Text, { style: styles.bullet }, "• Commercial spaces look plain, closed, and uninspiring."),
    e(Text, { style: styles.header }, "Our Solution"),
    e(Text, { style: styles.body }, "GREENSPACEDEV designs greenery around the actual space, user lifestyle, sunlight, airflow, maintenance ability, and aesthetic goals.")
  ),

  e(
    Page,
    { size: "A4", style: styles.page },
    e(Text, { style: styles.header }, "GREENSPACEDEV"),
    e(Text, { style: styles.pageLabel }, "03 / Services"),
    e(Text, { style: styles.heading }, "Premium green solutions designed around real spaces."),
    e(Text, { style: styles.bullet }, "1. Home Plantation Decoration"),
    e(Text, { style: styles.bullet }, "2. Balcony Garden Setup"),
    e(Text, { style: styles.bullet }, "3. Rooftop Garden Design"),
    e(Text, { style: styles.bullet }, "4. Garden Decoration"),
    e(Text, { style: styles.bullet }, "5. Vertical Gardens"),
    e(Text, { style: styles.bullet }, "6. Commercial Green Solutions"),
    e(Text, { style: styles.bullet }, "7. AI Green Scan"),
    e(Text, { style: styles.bullet }, "8. Space Analysis"),
    e(Text, { style: styles.bullet }, "9. Maintenance Support")
  )
);

async function main() {
  const outputDir = resolve(process.cwd(), "public");
  const outputPath = resolve(outputDir, "generated-document.pdf");

  mkdirSync(outputDir, { recursive: true });

  console.log("Generating GREENSPACEDEV stable PDF...");
  await renderToFile(document, outputPath);
  console.log(`PDF generated successfully: ${outputPath}`);
}

main().catch((error) => {
  console.error("PDF generation failed:");
  console.error(error);
  process.exit(1);
});
