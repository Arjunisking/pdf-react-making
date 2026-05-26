import {
  Document,
  Page,
  StyleSheet,
  Text as PDFText,
  View,
} from "@react-pdf/renderer";

const colors = {
  forest: "#123A2A",
  forestDark: "#09271B",
  sage: "#8FAF8B",
  sageLight: "#EAF2E6",
  olive: "#5F7D4B",
  cream: "#F7F3E8",
  warmWhite: "#FFFDF7",
};

const contact = {
  website: "https://greenspacedev.com",
  email: "hello@greenspacedev.com",
  phone: "+91 98765 43210",
};

function Logo() {
  return (
    <View style={styles.logoWrap}>
      <View style={styles.logoMark}>
        <PDFText style={styles.logoMarkText}>G</PDFText>
      </View>
      <View>
        <PDFText style={styles.logoText}>GREENSPACEDEV</PDFText>
        <PDFText style={styles.logoSub}>Eco-tech green living</PDFText>
      </View>
    </View>
  );
}

export default function CurrentDocument() {
  return (
    <Document title="GREENSPACEDEV Company Profile">
      <Page size="A4" style={styles.coverPage}>
        <View style={styles.coverTop}>
          <Logo />
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
          <PDFText style={styles.coverContactText}>{contact.website}</PDFText>
          <PDFText style={styles.coverContactText}>{contact.email}</PDFText>
          <PDFText style={styles.coverContactText}>{contact.phone}</PDFText>
        </View>
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
  coverTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoMark: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.sageLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },
  logoMarkText: {
    color: colors.forest,
    fontSize: 15,
    fontWeight: "bold",
  },
  logoText: {
    color: colors.warmWhite,
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1.2,
  },
  logoSub: {
    color: colors.sageLight,
    fontSize: 6.5,
    marginTop: 2,
    letterSpacing: 0.7,
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
    textTransform: "uppercase",
  },
  coverHero: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 58,
  },
  coverCopy: {
    width: "54%",
    paddingRight: 22,
  },
  coverKicker: {
    color: colors.sage,
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  coverTitle: {
    color: colors.warmWhite,
    fontSize: 39,
    fontWeight: "bold",
    lineHeight: 43,
    marginBottom: 16,
  },
  coverText: {
    color: colors.sageLight,
    fontSize: 12,
    lineHeight: 18,
  },
  heroVisual: {
    width: "46%",
    height: 292,
    borderRadius: 28,
    backgroundColor: colors.cream,
    position: "relative",
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    paddingLeft: 18,
  },
  heroCircleLarge: {
    position: "absolute",
    width: 174,
    height: 174,
    borderRadius: 87,
    backgroundColor: colors.sageLight,
    right: 18,
    top: 24,
  },
  heroCircleSmall: {
    position: "absolute",
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: colors.olive,
    left: 22,
    bottom: 32,
  },
  heroCardOne: {
    position: "absolute",
    width: 118,
    minHeight: 68,
    borderRadius: 16,
    backgroundColor: colors.forest,
    left: 24,
    top: 44,
    padding: 14,
  },
  heroCardTwo: {
    position: "absolute",
    width: 130,
    minHeight: 72,
    borderRadius: 16,
    backgroundColor: colors.olive,
    right: 22,
    bottom: 44,
    padding: 14,
  },
  heroCardLabel: {
    color: colors.sageLight,
    fontSize: 7,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  heroCardText: {
    color: colors.warmWhite,
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 15,
  },
  coverStats: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.forest,
    borderRadius: 22,
    padding: 18,
    marginTop: 52,
  },
  coverStatItem: {
    flex: 1,
  },
  coverStatNumber: {
    color: colors.cream,
    fontSize: 22,
    fontWeight: "bold",
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 42,
    borderTopWidth: 1,
    borderTopColor: colors.sage,
    paddingTop: 16,
  },
  coverContactText: {
    color: colors.sageLight,
    fontSize: 8,
    textDecoration: "none",
  },
});

