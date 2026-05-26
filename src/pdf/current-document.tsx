import type { ReactNode } from 'react';
import {
  Document,
  Page,
  StyleSheet,
  View,
  Text as PDFText,
  Link,
} from '@react-pdf/renderer';

const colors = {
  forest: '#123A2A',
  forestDark: '#09271B',
  sage: '#8FAF8B',
  sageLight: '#EAF2E6',
  olive: '#5F7D4B',
  moss: '#314C2F',
  cream: '#F7F3E8',
  warmWhite: '#FFFDF7',
  charcoal: '#1F2A24',
  muted: '#6A756D',
  line: '#D8DFD3',
  gold: '#C6A969',
};

const contact = {
  website: 'https://greenspacedev.com',
  email: 'hello@greenspacedev.com',
  phone: '+91 98765 43210',
  serviceAreas: '50+ cities across India',
};

const problemPoints = [
  'Plants die because they are placed in the wrong location.',
  'People choose plants that do not match their light, room type, or climate.',
  'Indoor air quality remains poor because the space is not planned properly.',
  'Balconies and rooftops remain unused or poorly designed.',
  'Commercial spaces look plain, closed, and uninspiring.',
  'Clients do not know how to maintain plants after purchase.',
  'Greenery is often treated as decoration instead of a planned living system.',
];

const solutionSteps = [
  'We study the space.',
  'We understand the client’s needs.',
  'We recommend the right plants and layout.',
  'We design the green setup.',
  'We install it professionally.',
  'We provide care guidance and maintenance support.',
];

const services = [
  {
    title: 'Home Plantation Decoration',
    text: 'We help homeowners bring greenery into living rooms, bedrooms, kitchens, study areas, and indoor corners with carefully selected plants that match light conditions, aesthetics, and lifestyle.',
  },
  {
    title: 'Balcony Garden Setup',
    text: 'We transform balconies into compact, beautiful, and functional green zones using low-maintenance plants, vertical solutions, smart placement, and space-saving designs.',
  },
  {
    title: 'Rooftop Garden Design',
    text: 'We design rooftop gardens that improve comfort, reduce heat, add beauty, and create usable outdoor spaces for homes, villas, and buildings.',
  },
  {
    title: 'Garden Decoration',
    text: 'We create decorative garden setups for homes, villas, farmhouses, entrances, pathways, and outdoor corners with strong visual appeal and premium finishing.',
  },
  {
    title: 'Vertical Gardens',
    text: 'We design space-saving green walls and vertical gardens for compact spaces, offices, cafés, gyms, reception areas, balconies, and premium interiors.',
  },
  {
    title: 'Commercial Green Solutions',
    text: 'We help offices, cafés, gyms, restaurants, real estate spaces, and commercial properties create greener, fresher, and more premium environments.',
  },
  {
    title: 'AI Green Scan',
    text: 'Green Scan helps users understand what kind of greenery suits their space through guided recommendations based on their needs and environment.',
  },
  {
    title: 'Space Analysis',
    text: 'Space Analysis helps users evaluate their room, balcony, rooftop, or commercial area and receive personalized green planning guidance.',
  },
  {
    title: 'Maintenance Support',
    text: 'We provide plant care guidance, checkups, seasonal suggestions, replacements, and ongoing care plans depending on the package.',
  },
];

const residentialClients = [
  'Apartment owners',
  'Families',
  'Working professionals',
  'Students',
  'Senior citizens',
  'Renters',
  'Luxury homeowners',
  'Villa owners',
  'Balcony and rooftop owners',
  'People who want healthier indoor spaces',
  'People who want low-maintenance plants',
  'People who want premium home styling with greenery',
];

const commercialClients = [
  'Corporate offices',
  'Cafés and restaurants',
  'Gyms and fitness centers',
  'Hotels and boutique spaces',
  'Real estate developers',
  'Interior designers',
  'Architects',
  'Event planners',
  'Retail stores',
  'Commercial property owners',
  'Coworking spaces',
];

const values = [
  {
    title: 'Sustainability',
    text: 'We believe green spaces should support healthier living and responsible urban development.',
  },
  {
    title: 'Practicality',
    text: 'We design greenery that looks good and works in real life, not just in photos.',
  },
  {
    title: 'Personalization',
    text: 'Every space is different, so every recommendation should match the user’s space, lifestyle, and care ability.',
  },
  {
    title: 'Premium Design',
    text: 'We believe plant-based spaces should feel elegant, modern, and intentional.',
  },
  {
    title: 'Technology with Nature',
    text: 'We use digital tools, AI-assisted workflows, and structured guidance to make green planning smarter and easier.',
  },
  {
    title: 'Long-Term Care',
    text: 'We focus on plant survival, maintenance, and lasting value, not one-time decoration.',
  },
];

const differentiators = [
  'AI-assisted plant and space recommendations',
  'Room-specific and lifestyle-based plant planning',
  'Rooftop, balcony, indoor, and commercial greenery solutions',
  'Premium design approach with practical usability',
  'End-to-end service from planning to installation',
  'Maintenance and care support after setup',
  'Solutions for homes, offices, cafés, gyms, villas, and commercial spaces',
  'Focus on air quality, wellness, aesthetics, and sustainability',
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/greenspacedev',
  },
  {
    label: 'Facebook',
    url: 'https://facebook.com/greenspacedev',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/company/greenspacedev',
  },
  {
    label: 'YouTube',
    url: 'https://youtube.com/@greenspacedev',
  },
  {
    label: 'Twitter / X',
    url: 'https://twitter.com/greenspacedev',
  },
];

type WithChildren = {
  children?: ReactNode;
  style?: any;
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  style?: any;
};

type CardProps = {
  title: string;
  text: string;
  number?: string;
  style?: any;
};

function Logo({ light = false }: { light?: boolean }) {
  return (
    <View style={styles.logoWrap}>
      <View style={[styles.logoMark, light ? styles.logoMarkLight : {}]}>
        <PDFText style={[styles.logoMarkText, light ? styles.logoMarkTextLight : {}]}>
          G
        </PDFText>
      </View>
      <View>
        <PDFText style={[styles.logoText, light ? styles.logoTextLight : {}]}>
          GREENSPACEDEV
        </PDFText>
        <PDFText style={[styles.logoSub, light ? styles.logoSubLight : {}]}>
          Eco-tech green living
        </PDFText>
      </View>
    </View>
  );
}



function PageHeader({ label }: { label: string }) {
  return (
    <View style={styles.pageHeader}>
      <Logo />
      <PDFText style={styles.headerLabel}>{label}</PDFText>
    </View>
  );
}

function SectionTitle({ eyebrow, title, description, light = false, style }: SectionTitleProps) {
  return (
    <View style={[styles.sectionTitleWrap, style]}>
      <PDFText style={[styles.eyebrow, light ? styles.lightEyebrow : {}]}>{eyebrow}</PDFText>
      <PDFText style={[styles.sectionTitle, light ? styles.lightTitle : {}]}>{title}</PDFText>
      {description ? (
        <PDFText style={[styles.sectionDescription, light ? styles.lightDescription : {}]}>
          {description}
        </PDFText>
      ) : null}
    </View>
  );
}

function DecorativeLeaf({ light = false }: { light?: boolean }) {
  return (
    <View style={styles.leafWrap}>
      <View style={[styles.leafOne, light ? styles.leafLight : {}]} />
      <View style={[styles.leafTwo, light ? styles.leafLight : {}]} />
      <View style={[styles.leafStem, light ? styles.leafStemLight : {}]} />
    </View>
  );
}

function Bullet({ children }: WithChildren) {
  return (
    <View style={styles.bulletRow}>
      <View style={styles.bulletDot} />
      <PDFText style={styles.bulletText}>{children}</PDFText>
    </View>
  );
}

function NumberStep({ number, title, text, style }: CardProps) {
  return (
    <View style={[styles.stepCard, style]} wrap={false}>
      <View style={styles.stepNumber}>
        <PDFText style={styles.stepNumberText}>{number}</PDFText>
      </View>
      <View style={styles.stepContent}>
        <PDFText style={styles.stepTitle}>{title}</PDFText>
        <PDFText style={styles.stepText}>{text}</PDFText>
      </View>
    </View>
  );
}

function InfoCard({ title, text, number, style }: CardProps) {
  return (
    <View style={[styles.infoCard, style]} wrap={false}>
      {number ? <PDFText style={styles.cardNumber}>{number}</PDFText> : null}
      <PDFText style={styles.cardTitle}>{title}</PDFText>
      <PDFText style={styles.cardText}>{text}</PDFText>
    </View>
  );
}

function ServiceCard({ title, text, number, style }: CardProps) {
  return (
    <View style={[styles.serviceCard, style]} wrap={false}>
      <View style={styles.serviceTopRow}>
        <View style={styles.serviceIcon}>
          <PDFText style={styles.serviceIconText}>{number}</PDFText>
        </View>
        <PDFText style={styles.serviceTitle}>{title}</PDFText>
      </View>
      <PDFText style={styles.serviceText}>{text}</PDFText>
    </View>
  );
}

function ClientPill({ label }: { label: string }) {
  return (
    <View style={styles.clientPill} wrap={false}>
      <PDFText style={styles.clientPillText}>{label}</PDFText>
    </View>
  );
}

function ContactRow({
  label,
  value,
  src,
}: {
  label: string;
  value: string;
  src?: string;
}) {
  return (
    <View style={styles.contactRow} wrap={false}>
      <PDFText style={styles.contactLabel}>{label}</PDFText>
      {src ? (
        <Link src={src} style={styles.contactLink}>
          {value}
        </Link>
      ) : (
        <PDFText style={styles.contactValue}>{value}</PDFText>
      )}
    </View>
  );
}

function HighlightBox({ children, style }: WithChildren) {
  return (
    <View style={[styles.highlightBox, style]} wrap={false}>
      <DecorativeLeaf />
      {children}
    </View>
  );
}

export default function CurrentDocument() {
  return (
    <Document
      title="GREENSPACEDEV Company Profile"
      author="GREENSPACEDEV"
      subject="Company profile for GREENSPACEDEV"
      keywords="GREENSPACEDEV, green living, plant design, rooftop garden, balcony garden, eco-tech"
    >
      <Page size="A4" style={styles.coverPage}>
        <View style={styles.coverTop}>
          <Logo light />
          <View style={styles.coverBadge}>
            <PDFText style={styles.coverBadgeText}>Company Profile 2026</PDFText>
          </View>
        </View>

        <View style={styles.coverHero}>
          <View style={styles.coverCopy}>
            <PDFText style={styles.coverKicker}>Premium green living solutions</PDFText>
            <PDFText style={styles.coverTitle}>Designing Smarter, Healthier, Greener Spaces</PDFText>
            <PDFText style={styles.coverText}>
              For homes, rooftops, balconies, offices, cafés, villas, and commercial properties.
            </PDFText>
          </View>

          <View style={styles.heroVisual}>
            <View style={styles.heroCircleLarge} />
            <View style={styles.heroCircleSmall} />
            <View style={styles.heroCardOne}>
              <PDFText style={styles.heroCardLabel}>Eco-tech</PDFText>
              <PDFText style={styles.heroCardText}>AI-assisted planning</PDFText>
            </View>
            <View style={styles.heroCardTwo}>
              <PDFText style={styles.heroCardLabel}>Green Design</PDFText>
              <PDFText style={styles.heroCardText}>Plants, layouts, care</PDFText>
            </View>
            <View style={styles.heroPlantLineOne} />
            <View style={styles.heroPlantLineTwo} />
            <View style={styles.heroPlantLineThree} />
          </View>
        </View>

        <View style={styles.coverStats}>
          <View style={styles.coverStatItem}>
            <PDFText style={styles.coverStatNumber}>50+</PDFText>
            <PDFText style={styles.coverStatLabel}>Cities across India</PDFText>
          </View>
          <View style={styles.coverStatDivider} />
          <View style={styles.coverStatItem}>
            <PDFText style={styles.coverStatNumber}>09</PDFText>
            <PDFText style={styles.coverStatLabel}>Core green services</PDFText>
          </View>
          <View style={styles.coverStatDivider} />
          <View style={styles.coverStatItem}>
            <PDFText style={styles.coverStatNumber}>AI</PDFText>
            <PDFText style={styles.coverStatLabel}>Space recommendations</PDFText>
          </View>
        </View>

        <View style={styles.coverContact}>
          <Link src={contact.website} style={styles.coverContactText}>
            {contact.website}
          </Link>
          <PDFText style={styles.coverContactText}>{contact.email}</PDFText>
          <PDFText style={styles.coverContactText}>{contact.phone}</PDFText>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <PageHeader label="01 / About" />

        <View style={styles.twoColumnHero}>
          <View style={styles.leftColumn}>
            <SectionTitle
              eyebrow="About GREENSPACEDEV"
              title="An eco-tech green living platform for modern spaces."
              description="GREENSPACEDEV helps people design, plan, and maintain beautiful plant-based spaces for modern homes and commercial environments."
            />
            <PDFText style={styles.bodyText}>
              We combine plant expertise, space planning, AI-assisted recommendations, and end-to-end installation support to make greenery practical, premium, and easy to manage.
            </PDFText>
            <PDFText style={styles.bodyText}>
              We do not just sell plants. We help people understand which plants suit their space, where they should be placed, how they should be maintained, and how greenery can improve the look, comfort, air quality, and overall experience of a space.
            </PDFText>
            <PDFText style={styles.bodyText}>
              From compact apartments and balconies to rooftops, villas, offices, cafés, gyms, and commercial properties, GREENSPACEDEV creates tailored green solutions that match the client’s space, lifestyle, budget, and maintenance capacity.
            </PDFText>
          </View>

          <View style={styles.rightColumn}>
            <InfoCard
              number="01"
              title="Plant Expertise"
              text="Right plants for the right light, location, climate, room type, and care ability."
            />
            <InfoCard
              number="02"
              title="Space Planning"
              text="Layouts designed around airflow, sunlight, use, visual balance, and long-term comfort."
            />
            <InfoCard
              number="03"
              title="End-to-End Support"
              text="Consultation, planning, installation, care guidance, and maintenance support."
            />
          </View>
        </View>

        <View style={styles.missionVisionRow}>
          <HighlightBox style={styles.missionBox}>
            <PDFText style={styles.highlightLabel}>Our Mission</PDFText>
            <PDFText style={styles.highlightText}>
              Our mission is to make green living simple, intelligent, and accessible for modern urban spaces.
            </PDFText>
            <PDFText style={styles.highlightBody}>
              We aim to help individuals, families, and businesses bring nature into their daily environments through practical plant solutions, thoughtful design, and technology-backed guidance.
            </PDFText>
          </HighlightBox>

          <View style={styles.visionBox} wrap={false}>
            <PDFText style={styles.visionLabel}>Our Vision</PDFText>
            <PDFText style={styles.visionText}>
              To become India’s trusted eco-tech platform for premium green spaces, sustainable interiors, rooftop gardens, and plant-based lifestyle solutions.
            </PDFText>
          </View>
        </View>

        
      </Page>

      <Page size="A4" style={styles.page}>
        <PageHeader label="02 / Problem & Solution" />

        <SectionTitle
          eyebrow="The Problem We Solve"
          title="Urban spaces are becoming more crowded, polluted, stressful, and disconnected from nature."
          description="Most people want greener spaces, but they do not know which plants to choose, where to place them, how to care for them, or how to build a setup that survives beyond the first few weeks."
        />

        <View style={styles.problemGrid}>
          {problemPoints.map((point) => (
            <View key={point} style={styles.problemCard} wrap={false}>
              <View style={styles.problemDot} />
              <PDFText style={styles.problemText}>{point}</PDFText>
            </View>
          ))}
        </View>

        <View style={styles.solutionPanel} wrap={false}>
          <View style={styles.solutionLeft}>
            <PDFText style={styles.solutionLabel}>Our Solution</PDFText>
            <PDFText style={styles.solutionTitle}>
              Complete green space solutions from consultation to design, installation, and maintenance.
            </PDFText>
            <PDFText style={styles.solutionText}>
              GREENSPACEDEV designs greenery around the actual space, user lifestyle, sunlight, airflow, maintenance ability, and aesthetic goals.
            </PDFText>
          </View>

          <View style={styles.solutionRight}>
            {solutionSteps.map((step, index) => (
              <View key={step} style={styles.solutionStepRow}>
                <View style={styles.solutionStepNumber}>
                  <PDFText style={styles.solutionStepNumberText}>{index + 1}</PDFText>
                </View>
                <PDFText style={styles.solutionStepText}>{step}</PDFText>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.aiToolsRow}>
          <InfoCard
            title="Green Scan"
            text="AI-assisted guidance that helps users understand what kind of greenery suits their space, needs, and environment before buying or installing plants."
            style={styles.aiCard}
          />
          <InfoCard
            title="Space Analysis"
            text="A planning tool that helps users evaluate their room, balcony, rooftop, or commercial area and move from confusion to a clear green action plan."
            style={styles.aiCard}
          />
        </View>

        
      </Page>

      <Page size="A4" style={styles.page}>
        <PageHeader label="03 / Services" />

        <SectionTitle
          eyebrow="Our Services"
          title="Premium green solutions designed around real spaces."
          description="Each service is built to combine greenery, usability, care ability, and premium visual design."
        />

        <View style={styles.serviceGrid}>
          {services.slice(0, 5).map((service, index) => (
            <ServiceCard
              key={service.title}
              number={`0${index + 1}`}
              title={service.title}
              text={service.text}
            />
          ))}
        </View>

        <View style={styles.serviceFeature} wrap={false}>
          <View style={styles.serviceFeatureTextBlock}>
            <PDFText style={styles.serviceFeatureLabel}>Built for modern Indian spaces</PDFText>
            <PDFText style={styles.serviceFeatureTitle}>
              GREENSPACEDEV is not a basic plant nursery or decoration service.
            </PDFText>
            <PDFText style={styles.serviceFeatureText}>
              We are a green space planning and eco-tech platform built around personalization, design quality, and long-term plant survival.
            </PDFText>
          </View>
          <DecorativeLeaf />
        </View>

        
      </Page>

      <Page size="A4" style={styles.page}>
        <PageHeader label="04 / Services & Process" />

        <SectionTitle
          eyebrow="More Services"
          title="From commercial environments to AI-powered planning."
          description="The goal is simple: make greenery easier to choose, easier to install, and easier to maintain."
        />

        <View style={styles.serviceGridCompact}>
          {services.slice(5).map((service, index) => (
            <ServiceCard
              key={service.title}
              number={`0${index + 6}`}
              title={service.title}
              text={service.text}
              style={styles.serviceCardCompact}
            />
          ))}
        </View>

        <SectionTitle
          eyebrow="Our Process"
          title="A clear five-step path from confusion to a living green space."
          style={styles.processTitle}
        />

        <View style={styles.processGrid}>
          <NumberStep
            number="01"
            title="Consultation"
            text="We understand the client’s space, goals, budget, sunlight conditions, design preference, and maintenance capacity."
          />
          <NumberStep
            number="02"
            title="Space Study"
            text="We evaluate light, space, airflow, usage, greenery opportunities, and visual balance."
          />
          <NumberStep
            number="03"
            title="Custom Green Plan"
            text="We prepare recommended plants, layout direction, placement ideas, and service suggestions."
          />
          <NumberStep
            number="04"
            title="Delivery & Installation"
            text="Our team delivers and installs the selected plants and setup with proper placement, soil, planters, and finishing."
          />
          <NumberStep
            number="05"
            title="Care & Maintenance"
            text="We guide the client on plant care and offer maintenance support to keep the green space healthy."
          />
        </View>

        
      </Page>

      <Page size="A4" style={styles.page}>
        <PageHeader label="05 / Customers & Values" />

        <SectionTitle
          eyebrow="Who We Serve"
          title="Residential and commercial clients who want greener, healthier, better-looking spaces."
          description="GREENSPACEDEV serves premium homeowners, apartment owners, corporate workspaces, cafés, fitness centers, interior designers, real estate developers, and event planners."
        />

        <View style={styles.clientColumns}>
          <View style={styles.clientColumn}>
            <PDFText style={styles.clientColumnTitle}>Residential Clients</PDFText>
            <View style={styles.pillWrap}>
              {residentialClients.map((client) => (
                <ClientPill key={client} label={client} />
              ))}
            </View>
          </View>

          <View style={styles.clientColumn}>
            <PDFText style={styles.clientColumnTitle}>Commercial Clients</PDFText>
            <View style={styles.pillWrap}>
              {commercialClients.map((client) => (
                <ClientPill key={client} label={client} />
              ))}
            </View>
          </View>
        </View>

        <SectionTitle
          eyebrow="Our Core Values"
          title="Premium, grounded, modern, natural, and design-led."
          style={styles.valuesTitle}
        />

        <View style={styles.valuesGrid}>
          {values.map((value) => (
            <InfoCard
              key={value.title}
              title={value.title}
              text={value.text}
              style={styles.valueCard}
            />
          ))}
        </View>

        
      </Page>

      <Page size="A4" style={styles.page}>
        <PageHeader label="06 / Difference & Founder" />

        <View style={styles.differenceTop}>
          <View style={styles.differenceLeft}>
            <SectionTitle
              eyebrow="What Makes Us Different"
              title="A green space planning and eco-tech platform built for long-term plant survival."
            />
            <View style={styles.differenceList}>
              {differentiators.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </View>
          </View>

          <View style={styles.differenceRight} wrap={false}>
            <PDFText style={styles.whyLabel}>Why Choose GREENSPACEDEV</PDFText>
            <PDFText style={styles.whyTitle}>Choose GREENSPACEDEV if you want more than random plants.</PDFText>
            <PDFText style={styles.whyText}>
              Choose us if you want a planned green space that looks beautiful, suits your environment, and stays manageable over time.
            </PDFText>
            <PDFText style={styles.whyText}>
              We help you choose the right plants, place them correctly, design the setup properly, and maintain the result with confidence.
            </PDFText>
            <PDFText style={styles.whyClosing}>
              With GREENSPACEDEV, greenery becomes simple, guided, and built around your real space.
            </PDFText>
          </View>
        </View>

        <View style={styles.founderPanel} wrap={false}>
          <View style={styles.founderAvatar}>
            <PDFText style={styles.founderAvatarText}>GS</PDFText>
          </View>
          <View style={styles.founderContent}>
            <PDFText style={styles.founderLabel}>Founder Note</PDFText>
            <PDFText style={styles.founderQuote}>
              GREENSPACEDEV was started with a simple belief: green spaces should not be complicated.
            </PDFText>
            <PDFText style={styles.founderBody}>
              Most people want healthier homes, better-looking interiors, cleaner air, and calmer spaces, but they often do not know where to start. They buy random plants, place them randomly, and then lose interest when the plants do not survive.
            </PDFText>
            <PDFText style={styles.founderBody}>
              We wanted to build a better way. GREENSPACEDEV brings together plant knowledge, design thinking, and technology to help people create green spaces that actually fit their lives.
            </PDFText>
            <PDFText style={styles.founderSign}>Founder, GREENSPACEDEV</PDFText>
          </View>
        </View>

        
      </Page>

      <Page size="A4" style={styles.finalPage}>
        <View style={styles.finalTop}>
          <Logo light />
          <PDFText style={styles.finalTopText}>Work With GREENSPACEDEV</PDFText>
        </View>

        <View style={styles.finalHero}>
          <PDFText style={styles.finalEyebrow}>Let’s build your green space</PDFText>
          <PDFText style={styles.finalTitle}>
            Beautiful, practical, and easier-to-maintain green environments for modern India.
          </PDFText>
          <PDFText style={styles.finalText}>
            GREENSPACEDEV helps people design green spaces that are beautiful, practical, and easier to maintain. We bring together nature, design, and technology to create healthier homes, better workplaces, and premium green environments.
          </PDFText>
        </View>

        <View style={styles.finalContactPanel}>
          <View style={styles.finalContactLeft}>
            <PDFText style={styles.finalContactTitle}>Contact Details</PDFText>
            <ContactRow label="Company" value="GREENSPACEDEV" />
            <ContactRow label="Website" value={contact.website} src={contact.website} />
            <ContactRow label="Email" value={contact.email} src={`mailto:${contact.email}`} />
            <ContactRow label="Phone" value={contact.phone} src={`tel:${contact.phone.replaceAll(' ', '')}`} />
            <ContactRow label="Service Areas" value={contact.serviceAreas} />
            <ContactRow
              label="Primary Services"
              value="Home Plantation, Balcony Gardens, Rooftop Gardens, Garden Decoration, Vertical Gardens, Commercial Green Solutions, Green Scan, Space Analysis"
            />
          </View>

          <View style={styles.qrBox}>
            <View style={styles.qrInner}>
              <PDFText style={styles.qrText}>QR</PDFText>
            </View>
            <PDFText style={styles.qrCaption}>Add website QR code here</PDFText>
          </View>
        </View>

        <View style={styles.socialPanel}>
          <PDFText style={styles.socialTitle}>Social Links</PDFText>
          <View style={styles.socialGrid}>
            {socialLinks.map((social) => (
              <View key={social.label} style={styles.socialItem} wrap={false}>
                <PDFText style={styles.socialLabel}>{social.label}</PDFText>
                <Link src={social.url} style={styles.socialLink}>
                  {social.url}
                </Link>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.ctaBlock}>
          <PDFText style={styles.ctaText}>Book a Consultation</PDFText>
        </View>

        <PDFText style={styles.finalFooter}>GREENSPACEDEV | Designing Smarter, Healthier, Greener Spaces</PDFText>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  coverPage: {
    flex: 1,
    backgroundColor: colors.forestDark,
    color: colors.warmWhite,
    paddingTop: 34,
    paddingRight: 34,
    paddingBottom: 28,
    paddingLeft: 34,
  },
  page: {
    flex: 1,
    backgroundColor: colors.warmWhite,
    color: colors.charcoal,
    paddingTop: 30,
    paddingRight: 34,
    paddingBottom: 46,
    paddingLeft: 34,
  },
  finalPage: {
    flex: 1,
    backgroundColor: colors.forestDark,
    color: colors.warmWhite,
    paddingTop: 34,
    paddingRight: 34,
    paddingBottom: 34,
    paddingLeft: 34,
  },
  coverTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoMark: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.forest,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },
  logoMarkLight: {
    backgroundColor: colors.sageLight,
  },
  logoMarkText: {
    color: colors.cream,
    fontSize: 15,
    fontWeight: 'bold',
  },
  logoMarkTextLight: {
    color: colors.forest,
  },
  logoText: {
    color: colors.forest,
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  logoTextLight: {
    color: colors.warmWhite,
  },
  logoSub: {
    color: colors.muted,
    fontSize: 6.5,
    marginTop: 2,
    letterSpacing: 0.7,
  },
  logoSubLight: {
    color: colors.sageLight,
  },
  coverBadge: {
    borderWidth: 1,
    borderColor: colors.sage,
    borderRadius: 20,
    paddingTop: 6,
    paddingRight: 12,
    paddingBottom: 6,
    paddingLeft: 12,
  },
  coverBadgeText: {
    color: colors.sageLight,
    fontSize: 7,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  coverHero: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 58,
  },
  coverCopy: {
    width: '54%',
    paddingRight: 22,
  },
  coverKicker: {
    color: colors.sage,
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  coverTitle: {
    color: colors.warmWhite,
    fontSize: 39,
    fontWeight: 'bold',
    lineHeight: 43,
    marginBottom: 16,
  },
  coverText: {
    color: colors.sageLight,
    fontSize: 12,
    lineHeight: 18,
  },
  heroVisual: {
    width: '46%',
    height: 292,
    borderRadius: 28,
    backgroundColor: colors.cream,
    position: 'relative',
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    paddingLeft: 18,
  },
  heroCircleLarge: {
    position: 'absolute',
    width: 174,
    height: 174,
    borderRadius: 87,
    backgroundColor: colors.sageLight,
    right: 18,
    top: 24,
  },
  heroCircleSmall: {
    position: 'absolute',
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: colors.gold,
    left: 22,
    bottom: 32,
  },
  heroCardOne: {
    position: 'absolute',
    width: 118,
    minHeight: 68,
    borderRadius: 16,
    backgroundColor: colors.forest,
    left: 24,
    top: 44,
    paddingTop: 14,
    paddingRight: 14,
    paddingBottom: 14,
    paddingLeft: 14,
  },
  heroCardTwo: {
    position: 'absolute',
    width: 130,
    minHeight: 72,
    borderRadius: 16,
    backgroundColor: colors.olive,
    right: 22,
    bottom: 44,
    paddingTop: 14,
    paddingRight: 14,
    paddingBottom: 14,
    paddingLeft: 14,
  },
  heroCardLabel: {
    color: colors.sageLight,
    fontSize: 7,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  heroCardText: {
    color: colors.warmWhite,
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 15,
  },
  heroPlantLineOne: {
    position: 'absolute',
    width: 2,
    height: 178,
    backgroundColor: colors.forest,
    left: 150,
    top: 64,
    borderRadius: 2,
  },
  heroPlantLineTwo: {
    position: 'absolute',
    width: 64,
    height: 2,
    backgroundColor: colors.forest,
    left: 150,
    top: 118,
    borderRadius: 2,
  },
  heroPlantLineThree: {
    position: 'absolute',
    width: 52,
    height: 2,
    backgroundColor: colors.forest,
    left: 98,
    top: 164,
    borderRadius: 2,
  },
  coverStats: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.forest,
    borderRadius: 22,
    paddingTop: 18,
    paddingRight: 20,
    paddingBottom: 18,
    paddingLeft: 20,
    marginTop: 52,
  },
  coverStatItem: {
    flex: 1,
  },
  coverStatNumber: {
    color: colors.cream,
    fontSize: 22,
    fontWeight: 'bold',
  },
  coverStatLabel: {
    color: colors.sageLight,
    fontSize: 8,
    marginTop: 4,
  },
  coverStatDivider: {
    width: 1,
    height: 34,
    backgroundColor: colors.sage,
    marginRight: 18,
    marginLeft: 18,
  },
  coverContact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: colors.sage,
    paddingTop: 16,
  },
  coverContactText: {
    color: colors.sageLight,
    fontSize: 8,
    textDecoration: 'none',
  },
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    marginBottom: 22,
  },
  headerLabel: {
    color: colors.olive,
    fontSize: 8,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  sectionTitleWrap: {
    marginBottom: 14,
  },
  eyebrow: {
    color: colors.olive,
    fontSize: 7.5,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 7,
  },
  lightEyebrow: {
    color: colors.sage,
  },
  sectionTitle: {
    color: colors.forestDark,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  lightTitle: {
    color: colors.warmWhite,
  },
  sectionDescription: {
    color: colors.muted,
    fontSize: 9.5,
    lineHeight: 14,
    marginTop: 8,
  },
  lightDescription: {
    color: colors.sageLight,
  },
  bodyText: {
    color: colors.charcoal,
    fontSize: 9.4,
    lineHeight: 14,
    marginBottom: 9,
  },
  twoColumnHero: {
    flexDirection: 'row',
  },
  leftColumn: {
    width: '62%',
    paddingRight: 22,
  },
  rightColumn: {
    width: '38%',
  },
  infoCard: {
    backgroundColor: colors.sageLight,
    borderRadius: 16,
    paddingTop: 13,
    paddingRight: 13,
    paddingBottom: 13,
    paddingLeft: 13,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.line,
  },
  cardNumber: {
    color: colors.gold,
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardTitle: {
    color: colors.forest,
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardText: {
    color: colors.charcoal,
    fontSize: 8.2,
    lineHeight: 12,
  },
  missionVisionRow: {
    flexDirection: 'row',
    marginTop: 22,
  },
  missionBox: {
    width: '62%',
    marginRight: 12,
  },
  highlightBox: {
    backgroundColor: colors.forest,
    borderRadius: 20,
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    position: 'relative',
  },
  highlightLabel: {
    color: colors.sage,
    fontSize: 8,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1.1,
    marginBottom: 8,
  },
  highlightText: {
    color: colors.warmWhite,
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 21,
    marginBottom: 10,
  },
  highlightBody: {
    color: colors.sageLight,
    fontSize: 8.8,
    lineHeight: 13,
  },
  visionBox: {
    width: '38%',
    backgroundColor: colors.cream,
    borderRadius: 20,
    paddingTop: 18,
    paddingRight: 16,
    paddingBottom: 18,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: colors.line,
  },
  visionLabel: {
    color: colors.olive,
    fontSize: 8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    marginBottom: 9,
  },
  visionText: {
    color: colors.forestDark,
    fontSize: 11,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  leafWrap: {
    position: 'absolute',
    right: 17,
    bottom: 15,
    width: 46,
    height: 46,
  },
  leafOne: {
    position: 'absolute',
    width: 24,
    height: 14,
    borderRadius: 14,
    backgroundColor: colors.sage,
    right: 6,
    top: 5,
  },
  leafTwo: {
    position: 'absolute',
    width: 24,
    height: 14,
    borderRadius: 14,
    backgroundColor: colors.olive,
    left: 4,
    top: 18,
  },
  leafStem: {
    position: 'absolute',
    width: 2,
    height: 38,
    backgroundColor: colors.cream,
    left: 22,
    top: 4,
  },
  leafLight: {
    backgroundColor: colors.sageLight,
  },
  leafStemLight: {
    backgroundColor: colors.forest,
  },
  problemGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
    marginBottom: 18,
  },
  problemCard: {
    width: '48%',
    minHeight: 55,
    backgroundColor: colors.cream,
    borderRadius: 14,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    marginRight: 9,
    marginBottom: 9,
    borderWidth: 1,
    borderColor: colors.line,
  },
  problemDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.olive,
    marginBottom: 7,
  },
  problemText: {
    color: colors.charcoal,
    fontSize: 8.4,
    lineHeight: 12,
  },
  solutionPanel: {
    flexDirection: 'row',
    backgroundColor: colors.forest,
    borderRadius: 20,
    paddingTop: 17,
    paddingRight: 17,
    paddingBottom: 17,
    paddingLeft: 17,
  },
  solutionLeft: {
    width: '45%',
    paddingRight: 18,
  },
  solutionRight: {
    width: '55%',
  },
  solutionLabel: {
    color: colors.sage,
    fontSize: 8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    marginBottom: 8,
  },
  solutionTitle: {
    color: colors.warmWhite,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 19,
    marginBottom: 9,
  },
  solutionText: {
    color: colors.sageLight,
    fontSize: 8.4,
    lineHeight: 12.5,
  },
  solutionStepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  solutionStepNumber: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.sageLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  solutionStepNumberText: {
    color: colors.forest,
    fontSize: 7,
    fontWeight: 'bold',
  },
  solutionStepText: {
    color: colors.warmWhite,
    fontSize: 8.3,
  },
  aiToolsRow: {
    flexDirection: 'row',
    marginTop: 16,
  },
  aiCard: {
    width: '48%',
    marginRight: 10,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  serviceGridCompact: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  serviceCard: {
    width: '48%',
    minHeight: 118,
    backgroundColor: colors.cream,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.line,
    paddingTop: 14,
    paddingRight: 14,
    paddingBottom: 14,
    paddingLeft: 14,
    marginRight: 9,
    marginBottom: 10,
  },
  serviceCardCompact: {
    minHeight: 112,
  },
  serviceTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceIcon: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: colors.forest,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },
  serviceIconText: {
    color: colors.cream,
    fontSize: 7,
    fontWeight: 'bold',
  },
  serviceTitle: {
    color: colors.forestDark,
    fontSize: 10.5,
    fontWeight: 'bold',
    flex: 1,
    lineHeight: 13,
  },
  serviceText: {
    color: colors.charcoal,
    fontSize: 8.2,
    lineHeight: 12.2,
  },
  serviceFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: colors.forest,
    borderRadius: 20,
    paddingTop: 17,
    paddingRight: 18,
    paddingBottom: 17,
    paddingLeft: 18,
    position: 'relative',
  },
  serviceFeatureTextBlock: {
    width: '80%',
  },
  serviceFeatureLabel: {
    color: colors.sage,
    fontSize: 7.5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1.1,
    marginBottom: 7,
  },
  serviceFeatureTitle: {
    color: colors.warmWhite,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 19,
    marginBottom: 7,
  },
  serviceFeatureText: {
    color: colors.sageLight,
    fontSize: 8.5,
    lineHeight: 12.5,
  },
  processTitle: {
    marginTop: 16,
    marginBottom: 10,
  },
  processGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  stepCard: {
    width: '48%',
    minHeight: 75,
    backgroundColor: colors.sageLight,
    borderRadius: 15,
    paddingTop: 11,
    paddingRight: 11,
    paddingBottom: 11,
    paddingLeft: 11,
    marginRight: 9,
    marginBottom: 8,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.line,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.forest,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },
  stepNumberText: {
    color: colors.cream,
    fontSize: 7,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    color: colors.forestDark,
    fontSize: 9.5,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  stepText: {
    color: colors.charcoal,
    fontSize: 7.4,
    lineHeight: 10.8,
  },
  clientColumns: {
    flexDirection: 'row',
    marginTop: 4,
  },
  clientColumn: {
    width: '48%',
    marginRight: 12,
    backgroundColor: colors.cream,
    borderRadius: 18,
    paddingTop: 14,
    paddingRight: 14,
    paddingBottom: 10,
    paddingLeft: 14,
    borderWidth: 1,
    borderColor: colors.line,
  },
  clientColumnTitle: {
    color: colors.forest,
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pillWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  clientPill: {
    backgroundColor: colors.warmWhite,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 12,
    paddingTop: 5,
    paddingRight: 8,
    paddingBottom: 5,
    paddingLeft: 8,
    marginRight: 5,
    marginBottom: 6,
  },
  clientPillText: {
    color: colors.charcoal,
    fontSize: 7,
  },
  valuesTitle: {
    marginTop: 18,
    marginBottom: 9,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  valueCard: {
    width: '31%',
    minHeight: 77,
    marginRight: 8,
    marginBottom: 8,
    paddingTop: 11,
    paddingRight: 10,
    paddingBottom: 11,
    paddingLeft: 10,
  },
  differenceTop: {
    flexDirection: 'row',
  },
  differenceLeft: {
    width: '55%',
    paddingRight: 18,
  },
  differenceRight: {
    width: '45%',
    backgroundColor: colors.forest,
    borderRadius: 20,
    paddingTop: 17,
    paddingRight: 17,
    paddingBottom: 17,
    paddingLeft: 17,
  },
  differenceList: {
    marginTop: 4,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.olive,
    marginTop: 3,
    marginRight: 8,
  },
  bulletText: {
    color: colors.charcoal,
    fontSize: 8,
    lineHeight: 11.5,
    flex: 1,
  },
  whyLabel: {
    color: colors.sage,
    fontSize: 7.5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    marginBottom: 8,
  },
  whyTitle: {
    color: colors.warmWhite,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 19,
    marginBottom: 10,
  },
  whyText: {
    color: colors.sageLight,
    fontSize: 8.4,
    lineHeight: 12.5,
    marginBottom: 8,
  },
  whyClosing: {
    color: colors.cream,
    fontSize: 9,
    fontWeight: 'bold',
    lineHeight: 13,
    marginTop: 4,
  },
  founderPanel: {
    flexDirection: 'row',
    backgroundColor: colors.cream,
    borderRadius: 22,
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    marginTop: 22,
    borderWidth: 1,
    borderColor: colors.line,
  },
  founderAvatar: {
    width: 92,
    height: 132,
    borderRadius: 18,
    backgroundColor: colors.forest,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  founderAvatarText: {
    color: colors.cream,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  founderContent: {
    flex: 1,
  },
  founderLabel: {
    color: colors.olive,
    fontSize: 8,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    marginBottom: 7,
  },
  founderQuote: {
    color: colors.forestDark,
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    marginBottom: 8,
  },
  founderBody: {
    color: colors.charcoal,
    fontSize: 8.4,
    lineHeight: 12.6,
    marginBottom: 7,
  },
  founderSign: {
    color: colors.forest,
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 5,
  },
  finalTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  finalTopText: {
    color: colors.sageLight,
    fontSize: 8,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  finalHero: {
    marginTop: 52,
    width: '82%',
  },
  finalEyebrow: {
    color: colors.sage,
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  finalTitle: {
    color: colors.warmWhite,
    fontSize: 29,
    fontWeight: 'bold',
    lineHeight: 34,
    marginBottom: 13,
  },
  finalText: {
    color: colors.sageLight,
    fontSize: 10,
    lineHeight: 15,
  },
  finalContactPanel: {
    flexDirection: 'row',
    backgroundColor: colors.cream,
    borderRadius: 22,
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    marginTop: 30,
  },
  finalContactLeft: {
    width: '72%',
    paddingRight: 18,
  },
  finalContactTitle: {
    color: colors.forest,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 13,
  },
  contactRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 6,
    marginBottom: 6,
  },
  contactLabel: {
    width: 86,
    color: colors.olive,
    fontSize: 7.5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contactValue: {
    color: colors.charcoal,
    fontSize: 8,
    lineHeight: 11,
    flex: 1,
  },
  contactLink: {
    color: colors.forest,
    fontSize: 8,
    lineHeight: 11,
    flex: 1,
    textDecoration: 'none',
  },
  qrBox: {
    width: '28%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrInner: {
    width: 94,
    height: 94,
    borderRadius: 12,
    backgroundColor: colors.warmWhite,
    borderWidth: 1,
    borderColor: colors.line,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrText: {
    color: colors.forest,
    fontSize: 22,
    fontWeight: 'bold',
  },
  qrCaption: {
    color: colors.muted,
    fontSize: 7,
    marginTop: 8,
    textAlign: 'center',
  },
  socialPanel: {
    backgroundColor: colors.forest,
    borderRadius: 20,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    marginTop: 18,
  },
  socialTitle: {
    color: colors.cream,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 11,
  },
  socialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  socialItem: {
    width: '48%',
    marginRight: 9,
    marginBottom: 9,
  },
  socialLabel: {
    color: colors.sage,
    fontSize: 7,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  socialLink: {
    color: colors.sageLight,
    fontSize: 7.5,
    textDecoration: 'none',
  },
  ctaBlock: {
    marginTop: 18,
    width: 160,
    backgroundColor: colors.sageLight,
    borderRadius: 22,
    paddingTop: 11,
    paddingBottom: 11,
    alignItems: 'center',
  },
  ctaText: {
    color: colors.forest,
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  finalFooter: {
    color: colors.sageLight,
    fontSize: 8,
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: colors.sage,
    paddingTop: 14,
  },
  footer: {
    position: 'absolute',
    left: 34,
    right: 34,
    bottom: 22,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: colors.muted,
    fontSize: 7,
    marginRight: 16,
  },
  pageNumber: {
    marginLeft: 'auto',
    color: colors.olive,
    fontSize: 7,
  },
});

