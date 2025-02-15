import type React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// We'll use a web-safe font that doesn't require loading external files
Font.register({
  family: "Helvetica",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyCg4QIFqPfE.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyCg4TYFqPfE.ttf",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyCg4QYFqPfE.ttf",
      fontStyle: "italic",
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 20,
    color: "#2E7D32",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
    color: "#2E7D32",
    borderBottom: 1,
    borderBottomColor: "#e0e0e0",
    paddingBottom: 5,
  },
  content: {
    fontSize: 12,
    marginBottom: 8,
    lineHeight: 1.5,
  },
  listItem: {
    marginLeft: 20,
    marginBottom: 5,
  },
  image: {
    marginVertical: 20,
    width: "auto",
    height: 300,
    alignSelf: "center",
  },
  disclaimer: {
    marginTop: 30,
    fontSize: 10,
    textAlign: "center",
    fontStyle: "italic",
    color: "#666666",
    borderTop: 1,
    borderTopColor: "#e0e0e0",
    paddingTop: 20,
  },
});

// Create PDF Template component
export const PlantPDFTemplate: React.FC<{
  analysis: string;
  image: string;
}> = ({ analysis, image }) => {
  const sections = analysis.split("\n").filter((line) => line.trim());

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Plant Analysis Report</Text>

        {/* {image && (
          <Image src={image || "/placeholder.svg"} style={styles.image} />
        )} */}
        {image && <Image src={image} style={styles.image} />}
        {sections.map((line, index) => {
          // Section headers (##)
          if (line.startsWith("##")) {
            return (
              <View key={index} style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {line.replace("##", "").trim()}
                </Text>
              </View>
            );
          }

          // List items (-)
          if (line.startsWith("-")) {
            return (
              <Text key={index} style={[styles.content, styles.listItem]}>
                {`• ${line.substring(1).trim()}`}
              </Text>
            );
          }

          // Regular text
          return (
            <Text key={index} style={styles.content}>
              {line.trim()}
            </Text>
          );
        })}

        <Text style={styles.disclaimer}>
          This report was automatically generated and should be verified by a
          professional.
        </Text>
      </Page>
    </Document>
  );
};
