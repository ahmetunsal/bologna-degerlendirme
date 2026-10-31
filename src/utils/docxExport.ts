import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  ShadingType
} from 'docx';

export interface EvaluationRecordDoc {
  id: number;
  created_at: string;
  class_year: number;
  semester: number;
  term: string;
  course_id: string;
  course_code: string;
  course_name: string;
  instructor: string;
  student_name: string;
  reviewed_weeks: string;
  general_status: string;
  example_note?: string;
  week_answers?: any;
  summary_report: string;
}

export interface ClassGroupedOptions {
  isMismatchesOnly?: boolean;
  reportTitle?: string;
  filename?: string;
}

/**
 * Bir ders kaydının Bologna müfredatı ile uyuşmazlık içerip içermediğini tespit eder
 */
export function isMismatchRecord(record: EvaluationRecordDoc): boolean {
  if (!record) return false;
  // 1) Genel durum tam uyumlu ('Büyük ölçüde örtüşüyor') değilse
  if (record.general_status && record.general_status !== 'Büyük ölçüde örtüşüyor') {
    return true;
  }
  // 2) Hafta cevaplarında 'farkli' veya 'islenmedi' işaretlenmişse
  let answers: any[] = [];
  if (Array.isArray(record.week_answers)) {
    answers = record.week_answers;
  } else if (typeof record.week_answers === 'string') {
    try {
      const parsed = JSON.parse(record.week_answers);
      if (Array.isArray(parsed)) answers = parsed;
    } catch {}
  }

  return answers.some((a) => {
    const r = String(a?.rating || '').toLowerCase().trim();
    return r === 'farkli' || r === 'islenmedi';
  });
}

// Format date helper
function formatDate(isoString?: string): string {
  if (!isoString) return new Date().toLocaleDateString('tr-TR');
  try {
    const d = new Date(isoString);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  } catch {
    return isoString;
  }
}

// Download blob trigger
async function saveDocx(doc: Document, filename: string) {
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Common border style
const subtleBorder = {
  style: BorderStyle.SINGLE,
  size: 4,
  color: 'D0D7DE'
};

const cellBorders = {
  top: subtleBorder,
  bottom: subtleBorder,
  left: subtleBorder,
  right: subtleBorder
};

/**
 * Haftalık Konuları Kompakt Tablo Haline Getiren Yardımcı (Card İçine Gömülü)
 */
function createCompactWeeklyTable(answers: any[]): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 12, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'E2E8F0' },
            borders: cellBorders,
            margins: { top: 80, bottom: 80, left: 100, right: 100 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: 'Hafta', bold: true, size: 15, color: '1E293B' })]
              })
            ]
          }),
          new TableCell({
            width: { size: 48, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'E2E8F0' },
            borders: cellBorders,
            margins: { top: 80, bottom: 80, left: 100, right: 100 },
            children: [
              new Paragraph({
                children: [new TextRun({ text: 'Bologna Konu Başlığı', bold: true, size: 15, color: '1E293B' })]
              })
            ]
          }),
          new TableCell({
            width: { size: 20, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'E2E8F0' },
            borders: cellBorders,
            margins: { top: 80, bottom: 80, left: 100, right: 100 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [new TextRun({ text: 'Uyum Durumu', bold: true, size: 15, color: '1E293B' })]
              })
            ]
          }),
          new TableCell({
            width: { size: 20, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: 'E2E8F0' },
            borders: cellBorders,
            margins: { top: 80, bottom: 80, left: 100, right: 100 },
            children: [
              new Paragraph({
                children: [new TextRun({ text: 'Öğrenci Notu / Açıklama', bold: true, size: 15, color: '1E293B' })]
              })
            ]
          })
        ]
      }),
      ...answers.map((a: any) =>
        new TableRow({
          children: [
            new TableCell({
              borders: cellBorders,
              margins: { top: 70, bottom: 70, left: 90, right: 90 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: `${a.week}. Hafta`, size: 15, bold: true })]
                })
              ]
            }),
            new TableCell({
              borders: cellBorders,
              margins: { top: 70, bottom: 70, left: 90, right: 90 },
              children: [
                new Paragraph({
                  children: [new TextRun({ text: a.topic || '-', size: 15 })]
                })
              ]
            }),
            new TableCell({
              borders: cellBorders,
              margins: { top: 70, bottom: 70, left: 90, right: 90 },
              shading: {
                type: ShadingType.CLEAR,
                fill:
                  a.rating === 'tam_uyumlu'
                    ? 'E6F9F0'
                    : a.rating === 'kismen_uyumlu'
                    ? 'FFF8E6'
                    : 'FDE8E8'
              },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: a.ratingLabel || (a.rating === 'tam_uyumlu' ? 'Birebir Örtüşüyor' : 'Farklı/Güncel'),
                      size: 13,
                      bold: true,
                      color:
                        a.rating === 'tam_uyumlu'
                          ? '0E7044'
                          : a.rating === 'kismen_uyumlu'
                          ? 'A05500'
                          : 'B91C1C'
                    })
                  ]
                })
              ]
            }),
            new TableCell({
              borders: cellBorders,
              margins: { top: 70, bottom: 70, left: 90, right: 90 },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: a.note && a.note.trim() ? a.note : '-',
                      size: 14,
                      italics: !!(a.note && a.note.trim())
                    })
                  ]
                })
              ]
            })
          ]
        })
      )
    ]
  });
}

/**
 * HER BİR DERS İÇİN ÇERÇEVELİ "DIV / KART" VE BOŞLUKLU DÜZEN
 * Kullanıcı isteği: "her bir ders bir div, her birinde boşluk olsun, karışık durmasın"
 */
function createCourseCard(record: EvaluationRecordDoc, index: number): (Table | Paragraph)[] {
  // Parse week answers safely
  let answers: any[] = [];
  if (Array.isArray(record.week_answers)) {
    answers = record.week_answers;
  } else if (typeof record.week_answers === 'string') {
    try {
      const parsed = JSON.parse(record.week_answers);
      if (Array.isArray(parsed)) answers = parsed;
    } catch {}
  }

  const isMismatch = isMismatchRecord(record);

  const statusColor =
    record.general_status === 'Büyük ölçüde örtüşüyor'
      ? '0E7044'
      : record.general_status === 'Açıklığa kavuşturulması gereken noktalar var'
      ? 'A05500'
      : 'B91C1C';

  // Kart sol vurgu ve başlık rengi (Uyuşmazlık durumunda amber/kırmızı, uyumluysa zümrüt yeşili)
  const cardAccentColor = !isMismatch
    ? '0F382C'
    : record.general_status === 'Bilgi paketine ulaşılamadı'
    ? '991B1B'
    : 'B45309';

  const cardHeaderBg = !isMismatch
    ? '1A5C4A'
    : record.general_status === 'Bilgi paketine ulaşılamadı'
    ? '7F1D1D'
    : '78350F';

  const cardBorders = {
    top: { style: BorderStyle.SINGLE, size: 8, color: cardHeaderBg },
    bottom: { style: BorderStyle.SINGLE, size: 10, color: 'CBD5E1' },
    left: { style: BorderStyle.SINGLE, size: 24, color: cardAccentColor }, // Kalın vurgu çizgisi (HTML border-left)
    right: { style: BorderStyle.SINGLE, size: 8, color: 'CBD5E1' }
  };

  // 1. KART BAŞLIĞI (Kurumsal Banner)
  const headerRow = new TableRow({
    children: [
      new TableCell({
        shading: { type: ShadingType.CLEAR, fill: cardHeaderBg },
        borders: {
          top: cardBorders.top,
          bottom: { style: BorderStyle.SINGLE, size: 4, color: cardHeaderBg },
          left: cardBorders.left,
          right: cardBorders.right
        },
        margins: { top: 140, bottom: 140, left: 180, right: 180 },
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `${index + 1}. DERS: [${record.course_code}] ${record.course_name}`,
                bold: true,
                size: 20,
                color: 'FFFFFF'
              }),
              ...(isMismatch
                ? [
                    new TextRun({
                      text: '   [⚠️ UYUŞMAZLIK / AÇIKLIK GEREKİYOR]',
                      bold: true,
                      size: 15,
                      color: 'FEF08A'
                    })
                  ]
                : [])
            ]
          }),
          new Paragraph({
            spacing: { before: 40 },
            children: [
              new TextRun({
                text: `Öğretim Elemanı: ${record.instructor || '-'}`,
                size: 16,
                color: 'E2F2EC'
              })
            ]
          })
        ]
      })
    ]
  });

  // 2. KART META ŞERİDİ (Hafta, Durum, Öğrenci)
  const metaRow = new TableRow({
    children: [
      new TableCell({
        shading: { type: ShadingType.CLEAR, fill: 'F1F5F9' },
        borders: {
          top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' },
          left: cardBorders.left,
          right: cardBorders.right
        },
        margins: { top: 90, bottom: 90, left: 180, right: 180 },
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: 'İncelenen Hafta: ', bold: true, size: 16 }),
              new TextRun({ text: `${record.reviewed_weeks || '-'}     |     `, size: 16 }),
              new TextRun({ text: 'Genel Durum: ', bold: true, size: 16 }),
              new TextRun({ text: `${record.general_status}     |     `, bold: true, size: 16, color: statusColor }),
              new TextRun({ text: 'Değerlendiren: ', bold: true, size: 16 }),
              new TextRun({ text: `${record.student_name || 'Sınıf Temsilcisi'}`, size: 16, bold: true })
            ]
          })
        ]
      })
    ]
  });

  // 3. KART GÖVDESİ (4 Maddelik Resmi Metin, Somut Örnek ve Haftalık Döküm)
  const bodyChildren: any[] = [
    new Paragraph({
      children: [
        new TextRun({
          text: 'Öğretim Üyesine İletilecek Resmi Geri Bildirim Metni (4 Madde):',
          bold: true,
          size: 17,
          color: '1A5C4A'
        })
      ]
    }),
    new Paragraph({
      spacing: { before: 80, after: 120 },
      shading: { type: ShadingType.CLEAR, fill: 'F8FAFC' },
      children: [
        new TextRun({
          text: record.summary_report,
          size: 16,
          font: 'Consolas',
          color: '1E293B'
        })
      ]
    })
  ];

  if (record.example_note && record.example_note.trim()) {
    bodyChildren.push(
      new Paragraph({
        spacing: { before: 80 },
        children: [
          new TextRun({
            text: 'Öğrencinin Somut Örnek ve Açıklama Notu:',
            bold: true,
            size: 16,
            color: '92400E'
          })
        ]
      }),
      new Paragraph({
        spacing: { before: 60, after: 120 },
        shading: { type: ShadingType.CLEAR, fill: 'FFFDF5' },
        children: [
          new TextRun({
            text: record.example_note,
            size: 16,
            italics: true,
            color: '451A03'
          })
        ]
      })
    );
  }

  // Haftalık Konu Dökümü (varsa)
  if (answers.length > 0) {
    bodyChildren.push(
      new Paragraph({
        spacing: { before: 100, after: 80 },
        children: [
          new TextRun({
            text: 'Hafta Bazında Konu Karşılaştırma ve Not Dökümü:',
            bold: true,
            size: 16,
            color: '1A5C4A'
          })
        ]
      }),
      createCompactWeeklyTable(answers)
    );
  }

  const bodyRow = new TableRow({
    children: [
      new TableCell({
        shading: { type: ShadingType.CLEAR, fill: 'FAFBFC' },
        borders: {
          top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
          bottom: cardBorders.bottom,
          left: cardBorders.left,
          right: cardBorders.right
        },
        margins: { top: 160, bottom: 180, left: 180, right: 180 },
        children: bodyChildren
      })
    ]
  });

  const cardTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [headerRow, metaRow, bodyRow]
  });

  // Dersler Arası Nefes Alan Boşluk ("her bir ders bir div, 2px boşluk olsun"):
  const cardSpacer = new Paragraph({
    spacing: { before: 300, after: 150 },
    children: []
  });

  return [cardTable, cardSpacer];
}

/**
 * 1) TEKİL DERS İÇİN WORD RAPORU (.docx)
 */
export async function downloadSingleCourseDocx(record: EvaluationRecordDoc) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Header
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: 'T.C.',
                bold: true,
                size: 20,
                color: '333333'
              })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: 'SELÇUK ÜNİVERSİTESİ',
                bold: true,
                size: 24,
                color: '111111'
              })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: 'SAĞLIK BİLİMLERİ FAKÜLTESİ - SAĞLIK YÖNETİMİ BÖLÜMÜ',
                bold: true,
                size: 22,
                color: '1A5C4A'
              })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 },
            children: [
              new TextRun({
                text: 'BOLOGNA DERS İÇERİK UYUM VE AKREDİTASYON DEĞERLENDİRME RAPORU',
                bold: true,
                size: 20,
                color: '222222'
              })
            ]
          }),

          // Course and Student Info Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: 'F4F6F8' },
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: 'Ders Adı ve Kodu', bold: true, size: 18 })] })]
                  }),
                  new TableCell({
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: `${record.course_code} - ${record.course_name}`, size: 18, bold: true })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'F4F6F8' },
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: 'Öğretim Elemanı', bold: true, size: 18 })] })]
                  }),
                  new TableCell({
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: record.instructor || '-', size: 18 })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'F4F6F8' },
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: 'Sınıf / Dönem', bold: true, size: 18 })] })]
                  }),
                  new TableCell({
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: `${record.class_year}. Sınıf / ${record.term} Dönemi`, size: 18 })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'F4F6F8' },
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: 'Değerlendiren Temsilci/Öğrenci', bold: true, size: 18 })] })]
                  }),
                  new TableCell({
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: record.student_name || 'Sınıf Temsilcisi', size: 18, bold: true })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'F4F6F8' },
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: 'İncelenen Haftalar', bold: true, size: 18 })] })]
                  }),
                  new TableCell({
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: record.reviewed_weeks || '-', size: 18 })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'F4F6F8' },
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: 'Genel Uyum Durumu', bold: true, size: 18 })] })]
                  }),
                  new TableCell({
                    borders: cellBorders,
                    shading: {
                      type: ShadingType.CLEAR,
                      fill:
                        record.general_status === 'Büyük ölçüde örtüşüyor'
                          ? 'E6F9F0'
                          : record.general_status === 'Açıklığa kavuşturulması gereken noktalar var'
                          ? 'FFF8E6'
                          : 'FDE8E8'
                    },
                    children: [new Paragraph({ children: [new TextRun({ text: record.general_status, size: 18, bold: true })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'F4F6F8' },
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: 'Rapor Kayıt Tarihi', bold: true, size: 18 })] })]
                  }),
                  new TableCell({
                    borders: cellBorders,
                    children: [new Paragraph({ children: [new TextRun({ text: formatDate(record.created_at), size: 18 })] })]
                  })
                ]
              })
            ]
          }),

          new Paragraph({ spacing: { before: 300, after: 150 }, children: [] }),

          // Course Card (Çerçeveli Kutu Görünümü)
          ...createCourseCard(record, 0),

          // Signatures
          new Paragraph({ spacing: { before: 400 }, children: [] }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    borders: {
                      top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                      bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                      left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                      right: { style: BorderStyle.NONE, size: 0, color: 'auto' }
                    },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({ text: 'Değerlendiren Öğrenci / Temsilci', bold: true, size: 18 }),
                          new TextRun({ text: `\n\n\n${record.student_name || 'Sınıf Temsilcisi'}`, size: 18 }),
                          new TextRun({ text: '\nİmza: .......................................', size: 16, color: '777777' })
                        ]
                      })
                    ]
                  }),
                  new TableCell({
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    borders: {
                      top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                      bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                      left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                      right: { style: BorderStyle.NONE, size: 0, color: 'auto' }
                    },
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                          new TextRun({ text: 'Bölüm Akreditasyon Komisyonu', bold: true, size: 18 }),
                          new TextRun({ text: '\n\n\nSağlık Yönetimi Bölüm Başkanlığı', size: 18 }),
                          new TextRun({ text: '\nİmza: .......................................', size: 16, color: '777777' })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }
    ]
  });

  const filename = `Bologna_Raporu_${record.course_code}_${(record.student_name || 'Temsilci').replace(/\s+/g, '_')}.docx`;
  await saveDocx(doc, filename);
}

/**
 * 2) SINIF BAZLI (VE MÜKERRER BİLDİRİMLERİ AYRIŞTIRAN) RESMİ WORD RAPORU (.docx)
 * Her bir ders çerçeveli bir kart/div şeklinde, aralarında nefes alan boşluklarla düzenlenir.
 * options.isMismatchesOnly = true verilirse yalnızca Bologna planıyla örtüşmeyen dersler listelenir.
 */
export async function downloadClassGroupedDocx(
  records: EvaluationRecordDoc[],
  options?: ClassGroupedOptions
) {
  const isMismatchesOnly = options?.isMismatchesOnly ?? false;
  const effectiveRecords = isMismatchesOnly
    ? records.filter(isMismatchRecord)
    : records;

  if (!effectiveRecords.length) {
    if (typeof window !== 'undefined') {
      alert(
        isMismatchesOnly
          ? 'Müfredatla uyuşmayan veya açıklık gerektiren ders kaydı bulunamadı.'
          : 'Raporlanacak ders kaydı bulunamadı.'
      );
    }
    return;
  }

  // Group primarily by class_year (1, 2, 3, 4)
  const classMap: { [year: number]: EvaluationRecordDoc[] } = {};
  for (const r of effectiveRecords) {
    const yr = Number(r.class_year) || 1;
    if (!classMap[yr]) {
      classMap[yr] = [];
    }
    classMap[yr].push(r);
  }

  // Sort class years: 1, 2, 3, 4
  const sortedYears = Object.keys(classMap)
    .map(Number)
    .sort((a, b) => a - b);

  const sections: any[] = [];

  for (const year of sortedYears) {
    const classRecords = classMap[year];
    const term = classRecords[0]?.term || 'Güz';

    // Sub-group by student_name to detect duplicate / multiple representatives for the same class
    const studentMap: { [student: string]: EvaluationRecordDoc[] } = {};
    for (const r of classRecords) {
      const sName = r.student_name?.trim() || `${year}. Sınıf Temsilcisi`;
      if (!studentMap[sName]) {
        studentMap[sName] = [];
      }
      studentMap[sName].push(r);
    }

    const studentNames = Object.keys(studentMap);
    const hasMultipleStudents = studentNames.length > 1;

    // Children elements for this class section
    const children: any[] = [
      // University Header
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: 'T.C.',
            bold: true,
            size: 18,
            color: '444444'
          })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: 'SELÇUK ÜNİVERSİTESİ - SAĞLIK BİLİMLERİ FAKÜLTESİ',
            bold: true,
            size: 22,
            color: '111111'
          })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: 'SAĞLIK YÖNETİMİ BÖLÜMÜ BOLOGNA AKREDİTASYON ÇALIŞMASI',
            bold: true,
            size: 20,
            color: isMismatchesOnly ? '92400E' : '1A5C4A'
          })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 250 },
        children: [
          new TextRun({
            text: isMismatchesOnly
              ? `${year}. SINIF UYUŞMAYAN VE AÇIKLIK GEREKTİREN DERSLER ÖZEL RAPORU`
              : `${year}. SINIF DERS İÇERİK UYUM VE AKREDİTASYON DEĞERLENDİRME RAPORU`,
            bold: true,
            size: 20,
            color: isMismatchesOnly ? '92400E' : '222222'
          })
        ]
      }),

      // Class Metadata Table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 28, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: isMismatchesOnly ? 'FEF3C7' : 'EAEFEF' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Sınıf Düzeyi ve Dönem:', bold: true, size: 18 })] })]
              }),
              new TableCell({
                width: { size: 72, type: WidthType.PERCENTAGE },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: `${year}. Sınıf (${term} Dönemi)`, bold: true, size: 18, color: isMismatchesOnly ? '92400E' : '1A5C4A' })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: isMismatchesOnly ? 'FEF3C7' : 'EAEFEF' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Bildirim Yapan Öğrenciler:', bold: true, size: 18 })] })]
              }),
              new TableCell({
                borders: cellBorders,
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: hasMultipleStudents
                          ? `${studentNames.length} Farklı Bildirim: ${studentNames.join(' | ')} (Mükerrer/Ayrı Bildirim)`
                          : studentNames[0],
                        bold: true,
                        size: 18,
                        color: hasMultipleStudents ? 'A05500' : '222222'
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: isMismatchesOnly ? 'FEF3C7' : 'EAEFEF' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: isMismatchesOnly ? 'Uyuşmayan Ders Sayısı:' : 'Değerlendirilen Ders Sayısı:', bold: true, size: 18 })] })]
              }),
              new TableCell({
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: `${classRecords.length} Ders Kaydı Bulunmaktadır`, size: 18, bold: true, color: isMismatchesOnly ? 'B91C1C' : '111111' })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: isMismatchesOnly ? 'FEF3C7' : 'EAEFEF' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Rapor Oluşturma Tarihi:', bold: true, size: 18 })] })]
              }),
              new TableCell({
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: new Date().toLocaleDateString('tr-TR'), size: 18 })] })]
              })
            ]
          })
        ]
      })
    ];

    // Uyuşmayanlar Özel Bilgilendirme Kutusu
    if (isMismatchesOnly) {
      children.push(
        new Paragraph({ spacing: { before: 180, after: 100 }, children: [] }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  shading: { type: ShadingType.CLEAR, fill: 'FEF3C7' },
                  borders: {
                    top: { style: BorderStyle.SINGLE, size: 6, color: 'D97706' },
                    bottom: { style: BorderStyle.SINGLE, size: 6, color: 'D97706' },
                    left: { style: BorderStyle.SINGLE, size: 18, color: 'D97706' },
                    right: { style: BorderStyle.SINGLE, size: 6, color: 'D97706' }
                  },
                  margins: { top: 120, bottom: 120, left: 160, right: 160 },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `⚠️ DİKKAT: ${year}. SINIF UYUŞMAZLIK VE AÇIKLIK GEREKTİREN DERSLER ÖZEL LİSTESİ\n`,
                          bold: true,
                          size: 17,
                          color: '92400E'
                        }),
                        new TextRun({
                          text: `Bu raporda yalnızca Bologna bilgi paketindeki haftalık izlence ile sınıfta işlenen müfredat arasında farklılık veya uyuşmazlık bildirilmiş (${classRecords.length} adet) ders yer almaktadır. Müfredatla tam uyumlu dersler filtrelenmiştir. Akreditasyon komisyonunun ilgili derslerin öğretim elemanları ile koordinasyon sağlaması önerilir.`,
                          size: 15,
                          color: '78350F'
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      );
    }

    // Mükerrer bildirim kutusu
    if (hasMultipleStudents) {
      children.push(
        new Paragraph({ spacing: { before: 200, after: 100 }, children: [] }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  shading: { type: ShadingType.CLEAR, fill: 'FFF8E6' },
                  borders: {
                    top: { style: BorderStyle.SINGLE, size: 6, color: 'D97706' },
                    bottom: { style: BorderStyle.SINGLE, size: 6, color: 'D97706' },
                    left: { style: BorderStyle.SINGLE, size: 6, color: 'D97706' },
                    right: { style: BorderStyle.SINGLE, size: 6, color: 'D97706' }
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `⚠️ DİKKAT: ${year}. SINIF İÇİN ÇOKLU / MÜKERRER BİLDİRİM TESPİT EDİLDİ\n`,
                          bold: true,
                          size: 17,
                          color: '92400E'
                        }),
                        new TextRun({
                          text: `Bu sınıf düzeyi için sistemde birden fazla öğrenci (${studentNames.join(' ve ')}) tarafından ayrı bildirim yapılmıştır. Karışıklığı önlemek ve her temsilcinin değerlendirmesini objektif biçimde inceleyebilmek amacıyla, her öğrencinin bildirdiği dersler aşağıda kendi adı ve müstakil rapor kartı altında ayrıştırılmıştır.`,
                          size: 16,
                          color: '78350F'
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      );
    }

    // Sınıf Genel Özeti Tablosu
    children.push(
      new Paragraph({ spacing: { before: 250, after: 120 }, children: [] }),
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [
          new TextRun({
            text: isMismatchesOnly
              ? `${year}. Sınıf Uyuşmayan / Açıklık Gerektiren Dersler Özeti`
              : `${year}. Sınıf Dersleri Genel Uyum Özeti Tablosu`,
            bold: true,
            size: 20,
            color: isMismatchesOnly ? '92400E' : '1A5C4A'
          })
        ]
      }),
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 13, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Ders Kodu', bold: true, size: 16, color: 'FFFFFF' })] })]
              }),
              new TableCell({
                width: { size: 30, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Ders Adı', bold: true, size: 16, color: 'FFFFFF' })] })]
              }),
              new TableCell({
                width: { size: 20, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Öğretim Elemanı', bold: true, size: 16, color: 'FFFFFF' })] })]
              }),
              new TableCell({
                width: { size: 15, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Bildiren Öğrenci', bold: true, size: 16, color: 'FFFFFF' })] })]
              }),
              new TableCell({
                width: { size: 10, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Haftalar', bold: true, size: 16, color: 'FFFFFF' })] })]
              }),
              new TableCell({
                width: { size: 12, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Genel Durum', bold: true, size: 16, color: 'FFFFFF' })] })]
              })
            ]
          }),
          ...classRecords.map((r) =>
            new TableRow({
              children: [
                new TableCell({
                  borders: cellBorders,
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.course_code, bold: true, size: 16 })] })]
                }),
                new TableCell({
                  borders: cellBorders,
                  children: [new Paragraph({ children: [new TextRun({ text: r.course_name, size: 16, bold: true })] })]
                }),
                new TableCell({
                  borders: cellBorders,
                  children: [new Paragraph({ children: [new TextRun({ text: r.instructor || '-', size: 16 })] })]
                }),
                new TableCell({
                  borders: cellBorders,
                  shading: {
                    type: ShadingType.CLEAR,
                    fill: hasMultipleStudents ? 'F5F7FA' : 'FFFFFF'
                  },
                  children: [new Paragraph({ children: [new TextRun({ text: r.student_name || '-', size: 15, bold: hasMultipleStudents })] })]
                }),
                new TableCell({
                  borders: cellBorders,
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.reviewed_weeks || '-', size: 15 })] })]
                }),
                new TableCell({
                  borders: cellBorders,
                  shading: {
                    type: ShadingType.CLEAR,
                    fill:
                      r.general_status === 'Büyük ölçüde örtüşüyor'
                        ? 'E6F9F0'
                        : r.general_status === 'Açıklığa kavuşturulması gereken noktalar var'
                        ? 'FFF8E6'
                        : 'FDE8E8'
                  },
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.general_status, size: 13, bold: true })] })]
                })
              ]
            })
          )
        ]
      }),
      new Paragraph({ spacing: { before: 250 }, children: [] })
    );

    // Her öğrenci için ayrı bölüm ve her ders için çerçeveli kart (div)
    studentNames.forEach((sName, sIdx) => {
      const studentRecs = studentMap[sName];

      children.push(
        new Paragraph({
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 300, after: 150 },
          children: [
            new TextRun({
              text: hasMultipleStudents
                ? `Bölüm ${sIdx + 1}: ${sName} Tarafından Yapılan Bildirimler (${studentRecs.length} Ders)`
                : `Ders Bazında Ayrıntılı Değerlendirme Raporları (${sName})`,
              bold: true,
              size: 20,
              color: '1A5C4A'
            })
          ]
        })
      );

      // Render each course reported by this student as an encapsulated Div Card with spacing
      studentRecs.forEach((record, cIdx) => {
        children.push(...createCourseCard(record, cIdx));
      });

      // Signature block for this student
      children.push(
        new Paragraph({ spacing: { before: 300, after: 200 }, children: [] }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  width: { size: 50, type: WidthType.PERCENTAGE },
                  borders: {
                    top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                    bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                    left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                    right: { style: BorderStyle.NONE, size: 0, color: 'auto' }
                  },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({
                          text: hasMultipleStudents ? `${sName} (${year}. Sınıf Bildirimi)` : `Raporu Düzenleyen Öğrenci / Temsilci`,
                          bold: true,
                          size: 17
                        }),
                        new TextRun({ text: `\n\n${sName}`, size: 17, bold: true }),
                        new TextRun({ text: '\nİmza: .......................................', size: 16, color: '777777' })
                      ]
                    })
                  ]
                }),
                new TableCell({
                  width: { size: 50, type: WidthType.PERCENTAGE },
                  borders: {
                    top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                    bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                    left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
                    right: { style: BorderStyle.NONE, size: 0, color: 'auto' }
                  },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new TextRun({ text: 'Teslim Alan Bölüm Yetkilisi', bold: true, size: 17 }),
                        new TextRun({ text: '\n\nSağlık Yönetimi Akreditasyon Komisyonu', size: 17 }),
                        new TextRun({ text: '\nİmza: .......................................', size: 16, color: '777777' })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      );
    });

    // Add this class as a clean Word document section
    sections.push({
      properties: {},
      children
    });
  }

  const doc = new Document({ sections });
  const filename =
    options?.filename ||
    (isMismatchesOnly
      ? `Bologna_Uyusmayan_Dersler_Raporu_${new Date().toISOString().slice(0, 10)}.docx`
      : `Bologna_Sinif_Bazli_Degerlendirme_Raporu_${new Date().toISOString().slice(0, 10)}.docx`);
  await saveDocx(doc, filename);
}

/**
 * 3) YALNIZCA MÜFREDATLA UYUŞMAYAN / AÇIKLIK GEREKTİREN DERSLERİN ÖZEL WORD RAPORU (.docx)
 * Kullanıcı isteği: "Bunda bir de sadece uyuşmayanlar kısmının listelendiği bir şey yapalım abi"
 */
export async function downloadMismatchesOnlyDocx(records: EvaluationRecordDoc[]) {
  return downloadClassGroupedDocx(records, {
    isMismatchesOnly: true,
    reportTitle: 'BOLOGNA DERS İÇERİK UYUMSUZLUKLARI VE AÇIKLIK GEREKTİREN DERSLER ÖZEL RAPORU',
    filename: `Bologna_Uyusmayan_Dersler_Raporu_${new Date().toISOString().slice(0, 10)}.docx`
  });
}

// Keep downloadStudentGroupedDocx as an alias so existing callers work seamlessly
export const downloadStudentGroupedDocx = downloadClassGroupedDocx;
