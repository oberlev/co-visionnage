/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';

import { LEGAL_DOCUMENTS } from '@/shared/legal/documents';
import { LegalDocumentPage } from '@/shared/ui/LegalDocumentPage';

const document = LEGAL_DOCUMENTS.privacy;

export const metadata: Metadata = {
  title: document.title,
  description: document.description,
};

export default function PrivacyPage() {
  return <LegalDocumentPage document={document} />;
}
