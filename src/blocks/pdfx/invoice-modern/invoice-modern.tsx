import { PdfxThemeProvider, usePdfxTheme } from "../../../lib/pdfx-theme-context";
import { KeyValue } from "../../../components/pdfx/key-value/pdfx-key-value";
import { PageFooter } from "../../../components/pdfx/page-footer/pdfx-page-footer";
import { PageHeader } from "../../../components/pdfx/page-header/pdfx-page-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/pdfx/table/pdfx-table";
import { Section } from "../../../components/pdfx/section/pdfx-section";
import { Text } from "../../../components/pdfx/text/pdfx-text";
import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import type { InvoiceModernData } from "./invoice-modern.types";


