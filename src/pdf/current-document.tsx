import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  Text as PDFText,
} from "@react-pdf/renderer";

void React;

const services = [
  "Home Plantation Decoration",
  "Balcony Garden Setup",
  "Rooftop Garden Design",
  "Garden Decoration",
  "Vertical Gardens",
  "Commercial Green Solutions",
  "AI Green Scan",
  "Space Analysis",
  "Maintenance Support",
];

const problems = [
  "Plants die because they are placed in the wrong location.",
  "People choose plants that do not match their light, room type, or climate.",
  "Indoor air quality remains poor because the space is not planned properly.",
  "Balconies and rooftops remain unused or poorly designed.",
  "Commercial spaces look plain, closed, and uninspiring.",
  "Clients do not know how to maintain plants after purchase.",
];

const values = [
  "Sustainability",
  "Practicality",
  "Personalization",
  "Premium Design",
  "Technology with Nature",
  "Long-Term Care",
];

function Header({ page }: { page: string }) {
  return (
    <>
      <PDFText style={styles.logo}>GREENSPACEDEV</PDFText>
      <PDFText style={styles.subtitle}>Eco-tech green living</PDFText>
      <PDFText style={styles.pageLabel}>{page}</PDFText>
    </>
  );
}

function Bullet({ children }: { children: string }) {
  return <PDFText style={styles.bullet}>• {children}</PDFText>;
}

export default function CurrentDocument() {
  return (
    <Document title="GREENSPACEDEV Company Profile">
      <Page size="A4" style={styles.cover}>
        <PDFText style={styles.coverBadge}>Company Profile 2026</PDFText>
        <PDFText style={styles.coverLogo}>GREENSPACEDEV</PDFText>
        <PDFText style={styles.coverTitle}>
          Designing Smarter, Healthier, Greener Spaces
        </PDFText>
        <PDFText style={styles.coverText}>
          Premium green living solutions for homes, balconies, rooftops, offices, cafes, villas, and commercial properties.
        </PDFText>
        <PDFText style={styles.coverStats}>50+ Cities Across India</PDFText>
        <PDFText style={styles.coverStats}>09 Core Green Services</PDFText>
        <PDFText style={styles.coverStats}>AI-Assisted Space Recommendations</PDFText>
        <PDFText style={styles.coverContact}>greenspacedev.com | hello@greenspacedev.com | +91 98765 43210</PDFText>
      </Page>

      <Page size="A4" style={styles.page}>
        <Header page="01 / About" />
        <PDFText style={styles.heading}>An eco-tech green living platform for modern spaces.</PDFText>
        <PDFText style={styles.body}>
          GREENSPACEDEV helps people design, plan, and maintain beautiful plant-based spaces for modern homes and commercial environments.
        </PDFText>
        <PDFText style={styles.body}>
          We combine plant expertise, space planning, AI-assisted recommendations, and end-to-end installation support to make greenery practical, premium, and easy to manage.
        </PDFText>
        <PDFText style={styles.body}>
          We do not just sell plants. We help people understand which plants suit their space, where they should be placed, how they should be maintained, and how greenery can improve the look, comfort, air quality, and overall experience of a space.
        </PDFText>
        <PDFText style={styles.sectionHeading}>Our Mission</PDFText>
        <PDFText style={styles.body}>
          To make green living simple, intelligent, and accessible for modern urban spaces.
        </PDFText>
        <PDFText style={styles.sectionHeading}>Our Vision</PDFText>
        <PDFText style={styles.body}>
          To become India’s trusted eco-tech platform for premium green spaces, sustainable interiors, rooftop gardens, and plant-based lifestyle solutions.
        </PDFText>
      </Page>

      <Page size="A4" style={styles.page}>
        <Header page="02 / Problem & Solution" />
        <PDFText style={styles.heading}>
          Urban spaces are becoming crowded, polluted, stressful, and disconnected from nature.
        </PDFText>
        <PDFText style={styles.sectionHeading}>Problems We Solve</PDFText>
        {problems.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
        <PDFText style={styles.sectionHeading}>Our Solution</PDFText>
        <PDFText style={styles.body}>
          GREENSPACEDEV designs greenery around the actual space, user lifestyle, sunlight, airflow, maintenance ability, and aesthetic goals.
        </PDFText>
        <PDFText style={styles.body}>
          We study the space, understand the client’s needs, recommend the right plants and layout, install the setup professionally, and provide care guidance.
        </PDFText>
      </Page>

      <Page size="A4" style={styles.page}>
        <Header page="03 / Services" />
        <PDFText style={styles.heading}>Premium green solutions designed around real spaces.</PDFText>
        {services.map((service, index) => (
          <PDFText key={service} style={styles.service}>
            {index + 1}. {service}
          </PDFText>
        ))}
        <PDFText style={styles.body}>
          Each service is built to combine greenery, usability, care ability, premium visual design, and long-term plant survival.
        </PDFText>
      </Page>

      <Page size="A4" style={styles.page}>
        <Header page="04 / Process & Values" />
        <PDFText style={styles.heading}>A clear process from confusion to a living green space.</PDFText>
        <Bullet>Consultation: we understand the client’s space, goals, budget, sunlight, and maintenance capacity.</Bullet>
        <Bullet>Space Study: we evaluate light, airflow, usage, greenery opportunities, and visual balance.</Bullet>
        <Bullet>Custom Green Plan: we prepare plant recommendations, layout direction, and placement ideas.</Bullet>
        <Bullet>Delivery and Installation: the setup is installed with proper placement and finishing.</Bullet>
        <Bullet>Care and Maintenance: we provide plant care guidance and support.</Bullet>

        <PDFText style={styles.sectionHeading}>Core Values</PDFText>
        {values.map((value) => (
          <Bullet key={value}>{value}</Bullet>
        ))}
      </Page>

      <Page size="A4" style={styles.final}>
        <PDFText style={styles.coverLogo}>GREENSPACEDEV</PDFText>
        <PDFText style={styles.coverTitle}>Let’s build your green space.</PDFText>
        <PDFText style={styles.coverText}>
          Beautiful, practical, and easier-to-maintain green environments for modern India.
        </PDFText>
        <PDFText style={styles.coverStats}>Website: greenspacedev.com</PDFText>
        <PDFText style={styles.coverStats}>Email: hello@greenspacedev.com</PDFText>
        <PDFText style={styles.coverStats}>Phone: +91 98765 43210</PDFText>
        <PDFText style={styles.coverContact}>GREENSPACEDEV | Designing Smarter, Healthier, Greener Spaces</PDFText>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  cover: {
    padding: 48,
    backgroundColor: "#09271B",
    color: "#FFFDF7",
  },
  final: {
    padding: 48,
    backgroundColor: "#09271B",
    color: "#FFFDF7",
  },
  page: {
    padding: 42,
    backgroundColor: "#FFFDF7",
    color: "#1F2A24",
  },
  coverBadge: {
    fontSize: 9,
    color: "#EAF2E6",
    marginBottom: 70,
  },
  coverLogo: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginBottom: 28,
    color: "#FFFDF7",
  },
  coverTitle: {
    fontSize: 36,
    fontWeight: "bold",
    lineHeight: 42,
    marginBottom: 18,
    color: "#FFFDF7",
  },
  coverText: {
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 32,
    color: "#EAF2E6",
  },
  coverStats: {
    fontSize: 11,
    marginBottom: 10,
    color: "#EAF2E6",
  },
  coverContact: {
    fontSize: 9,
    marginTop: 40,
    color: "#EAF2E6",
  },
  logo: {
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.2,
    color: "#123A2A",
  },
  subtitle: {
    fontSize: 7,
    color: "#6A756D",
    marginTop: 3,
    marginBottom: 18,
  },
  pageLabel: {
    fontSize: 8,
    color: "#8FAF8B",
    marginBottom: 22,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 28,
    color: "#09271B",
    marginBottom: 18,
  },
  sectionHeading: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#123A2A",
    marginTop: 16,
    marginBottom: 8,
  },
  body: {
    fontSize: 10,
    lineHeight: 15,
    marginBottom: 10,
    color: "#1F2A24",
  },
  bullet: {
    fontSize: 10,
    lineHeight: 15,
    marginBottom: 7,
    color: "#1F2A24",
  },
  service: {
    fontSize: 11,
    lineHeight: 16,
    marginBottom: 9,
    color: "#1F2A24",
  },
});
