import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Selçuk Üniversitesi Sağlık Yönetimi - Bologna Müfredat Uyum Değerlendirme Asistanı',
  description: 'Akreditasyon çalışmaları için sınıf temsilcileri Bologna ders içeriği ve fiili ders işleyişi karşılaştırma sistemi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
