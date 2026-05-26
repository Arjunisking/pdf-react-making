import React from "react";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { Document, Page, Text, renderToFile } from "@react-pdf/renderer";

const e = React.createElement;

const pageStyle = {
  paddingTop: 40,
  paddingRight: 44,
  paddingBottom: 40,
  paddingLeft: 44,
};

function page(content: string) {
  return e(
    Page,
    { size: "A4", style: pageStyle },
    e(Text, null, content)
  );
}

const document = e(
  Document,
  {
    title: "GREENSPACEDEV Company Profile",
    author: "GREENSPACEDEV",
    subject: "Company profile for GREENSPACEDEV",
  },

  page(
`GREENSPACEDEV
COMPANY PROFILE 2026

============================================================

DESIGNING SMARTER, HEALTHIER, GREENER SPACES

Premium green living solutions for homes, balconies, rooftops,
offices, cafes, villas, and commercial properties.

------------------------------------------------------------

50+   Cities across India
09    Core green services
AI    Space recommendations

------------------------------------------------------------

Website: greenspacedev.com
Email:   hello@greenspacedev.com
Phone:   +91 98765 43210

============================================================

Eco-tech green living for modern Indian spaces.`
  ),

  page(
`01 / ABOUT GREENSPACEDEV

============================================================

An eco-tech green living platform for modern spaces.

GREENSPACEDEV helps people design, plan, and maintain beautiful
plant-based spaces for modern homes and commercial environments.

We combine plant expertise, space planning, AI-assisted
recommendations, and end-to-end installation support to make
greenery practical, premium, and easy to manage.

We do not just sell plants. We help people understand which plants
suit their space, where they should be placed, how they should be
maintained, and how greenery can improve the look, comfort, air
quality, and overall experience of a space.

------------------------------------------------------------

MISSION

To make green living simple, intelligent, and accessible for modern
urban spaces.

------------------------------------------------------------

VISION

To become India's trusted eco-tech platform for premium green
spaces, sustainable interiors, rooftop gardens, and plant-based
lifestyle solutions.`
  ),

  page(
`02 / THE PROBLEM WE SOLVE

============================================================

Urban spaces are becoming more crowded, polluted, stressful, and
disconnected from nature.

Most people want greener spaces, but they do not know which plants
to choose, where to place them, how to care for them, or how to build
a setup that survives beyond the first few weeks.

------------------------------------------------------------

KEY PROBLEMS

01. Plants die because they are placed in the wrong location.

02. People choose plants that do not match their light, room type,
    or climate.

03. Indoor air quality remains poor because the space is not planned
    properly.

04. Balconies and rooftops remain unused or poorly designed.

05. Commercial spaces look plain, closed, and uninspiring.

06. Clients do not know how to maintain plants after purchase.

07. Greenery is often treated as decoration instead of a planned
    living system.`
  ),

  page(
`03 / OUR SOLUTION

============================================================

Complete green space solutions from consultation to design,
installation, and maintenance.

GREENSPACEDEV designs greenery around the actual space, user
lifestyle, sunlight, airflow, maintenance ability, and aesthetic goals.

------------------------------------------------------------

HOW WE WORK

01. We study the space.

02. We understand the client's needs.

03. We recommend the right plants and layout.

04. We design the green setup.

05. We install it professionally.

06. We provide care guidance and maintenance support.

------------------------------------------------------------

AI GREEN SCAN

Green Scan helps users understand what kind of greenery suits their
space through guided recommendations based on their needs and
environment.

------------------------------------------------------------

SPACE ANALYSIS

Space Analysis helps users evaluate their room, balcony, rooftop, or
commercial area and receive personalized green planning guidance.`
  ),

  page(
`04 / OUR SERVICES

============================================================

Premium green solutions designed around real spaces.

01. HOME PLANTATION DECORATION
    Greenery planning for living rooms, bedrooms, kitchens, study
    areas, and indoor corners.

02. BALCONY GARDEN SETUP
    Compact balcony setups using low-maintenance plants, smart
    placement, and space-saving designs.

03. ROOFTOP GARDEN DESIGN
    Rooftop gardens that improve comfort, reduce heat, and create
    usable outdoor spaces.

04. GARDEN DECORATION
    Decorative garden setups for homes, villas, farmhouses,
    entrances, pathways, and outdoor corners.

05. VERTICAL GARDENS
    Space-saving green walls for offices, cafes, gyms, receptions,
    balconies, and premium interiors.`
  ),

  page(
`05 / MORE SERVICES

============================================================

06. COMMERCIAL GREEN SOLUTIONS
    Green solutions for offices, cafes, gyms, restaurants, real
    estate spaces, and commercial properties.

07. AI GREEN SCAN
    AI-assisted guidance that helps users understand what kind of
    greenery suits their space, needs, and environment.

08. SPACE ANALYSIS
    Planning support for rooms, balconies, rooftops, and commercial
    areas.

09. MAINTENANCE SUPPORT
    Plant care guidance, checkups, seasonal suggestions,
    replacements, and ongoing care plans.

------------------------------------------------------------

BUILT FOR MODERN INDIAN SPACES

GREENSPACEDEV is not a basic plant nursery or decoration service.

It is a green space planning and eco-tech platform built around
personalization, design quality, and long-term plant survival.`
  ),

  page(
`06 / OUR PROCESS

============================================================

A clear five-step path from confusion to a living green space.

01. CONSULTATION
    We understand the client's space, goals, budget, sunlight
    conditions, design preference, and maintenance capacity.

02. SPACE STUDY
    We evaluate light, airflow, usage, greenery opportunities, and
    visual balance.

03. CUSTOM GREEN PLAN
    We prepare recommended plants, layout direction, placement
    ideas, and service suggestions.

04. DELIVERY AND INSTALLATION
    Our team delivers and installs the selected plants and setup with
    proper placement, soil, planters, and finishing.

05. CARE AND MAINTENANCE
    We guide the client on plant care and offer maintenance support
    to keep the green space healthy.`
  ),

  page(
`07 / WHO WE SERVE

============================================================

RESIDENTIAL CLIENTS

- Apartment owners
- Families
- Working professionals
- Students
- Senior citizens
- Renters
- Luxury homeowners
- Villa owners
- Balcony and rooftop owners
- People who want healthier indoor spaces
- People who want low-maintenance plants
- People who want premium home styling with greenery

------------------------------------------------------------

COMMERCIAL CLIENTS

- Corporate offices
- Cafes and restaurants
- Gyms and fitness centers
- Hotels and boutique spaces
- Real estate developers
- Interior designers
- Architects
- Event planners
- Retail stores
- Commercial property owners
- Coworking spaces`
  ),

  page(
`08 / VALUES AND DIFFERENCE

============================================================

CORE VALUES

01. Sustainability
02. Practicality
03. Personalization
04. Premium Design
05. Technology with Nature
06. Long-Term Care

------------------------------------------------------------

WHAT MAKES US DIFFERENT

- AI-assisted plant and space recommendations
- Room-specific and lifestyle-based plant planning
- Rooftop, balcony, indoor, and commercial greenery solutions
- Premium design approach with practical usability
- End-to-end service from planning to installation
- Maintenance and care support after setup
- Solutions for homes, offices, cafes, gyms, villas, and commercial spaces
- Focus on air quality, wellness, aesthetics, and sustainability`
  ),

  page(
`09 / WORK WITH GREENSPACEDEV

============================================================

Let's build your green space.

GREENSPACEDEV helps people design green spaces that are beautiful,
practical, and easier to maintain.

We bring together nature, design, and technology to create healthier
homes, better workplaces, and premium green environments.

------------------------------------------------------------

CONTACT DETAILS

Company:       GREENSPACEDEV
Website:       greenspacedev.com
Email:         hello@greenspacedev.com
Phone:         +91 98765 43210
Service Areas: 50+ cities across India

Primary Services:
Home Plantation, Balcony Gardens, Rooftop Gardens, Garden
Decoration, Vertical Gardens, Commercial Green Solutions, Green
Scan, Space Analysis, Maintenance Support

============================================================

GREENSPACEDEV
Designing Smarter, Healthier, Greener Spaces`
  )
);

async function main() {
  const outputDir = resolve(process.cwd(), "public");
  const outputPath = resolve(outputDir, "generated-document.pdf");

  mkdirSync(outputDir, { recursive: true });

  console.log("Generating designed GREENSPACEDEV PDF...");
  await renderToFile(document, outputPath);
  console.log(`PDF generated successfully: ${outputPath}`);
}

main().catch((error) => {
  console.error("PDF generation failed:");
  console.error(error);
  process.exit(1);
});
