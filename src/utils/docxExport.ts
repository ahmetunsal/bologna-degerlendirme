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

          // Bölüm 1: 4 Maddelik Resmi Format
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: '1. Öğretim Üyesine İletilecek Resmi Geri Bildirim Şablonu (4 Madde)',
                bold: true,
                size: 20,
                color: '1A5C4A'
              })
            ]
          }),
          new Paragraph({
            spacing: { before: 100, after: 200 },
            children: [
              new TextRun({
                text: record.summary_report,
                size: 19,
                font: 'Consolas'
              })
            ]
          }),

          // Bölüm 2: Varsa Somut Örnek
          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({
                text: '2. Tespit Edilen Somut Örnekler ve Açıklamalar',
                bold: true,
                size: 20,
                color: '1A5C4A'
              })
            ]
          }),
          new Paragraph({
            spacing: { before: 100, after: 300 },
            children: [
              new TextRun({
                text: record.example_note || 'Herhangi bir uyumsuzluk bildirilmemiş, ders planına uygun yürütülmüştür.',
                size: 18
              })
            ]
          }),

          // Bölüm 3: Haftalık Detaylar (varsa)
          ...(renderWeeklyDetails(record)),

          // Signatures
          new Paragraph({ spacing: { before: 600 }, children: [] }),
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
 * 2) ÖĞRENCİ BAŞINA GRUPLANMIŞ TOPLU WORD RAPORU (.docx)
 * "öğrenci başına gibi bir rapor şeklinde word olarak"
 */
export async function downloadStudentGroupedDocx(records: EvaluationRecordDoc[]) {
  if (!records.length) return;

  // Group records by student_name
  const grouped: { [student: string]: EvaluationRecordDoc[] } = {};
  for (const r of records) {
    const key = r.student_name?.trim() || 'Genel Sınıf Temsilcisi';
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(r);
  }

  const sections: any[] = [];

  // For each student, generate a comprehensive dedicated section
  for (const [studentName, studentRecords] of Object.entries(grouped)) {
    const classYear = studentRecords[0]?.class_year || 1;
    const term = studentRecords[0]?.term || 'Güz';

    const children: any[] = [
      // Header
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
            color: '1A5C4A'
          })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
        children: [
          new TextRun({
            text: `ÖĞRENCİ / TEMSİLCİ BAZLI DERS DEĞERLENDİRME BİLDİRİM FORMU`,
            bold: true,
            size: 19,
            color: '222222'
          })
        ]
      }),

      // Student Profile Card Table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 28, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: 'EAEFEF' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Öğrenci / Temsilci:', bold: true, size: 18 })] })]
              }),
              new TableCell({
                width: { size: 72, type: WidthType.PERCENTAGE },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: studentName, bold: true, size: 18, color: '1A5C4A' })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: 'EAEFEF' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Sınıf ve Dönem:', bold: true, size: 18 })] })]
              }),
              new TableCell({
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: `${classYear}. Sınıf (${term} Dönemi)`, size: 18 })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: 'EAEFEF' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Değerlendirilen Dersler:', bold: true, size: 18 })] })]
              }),
              new TableCell({
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: `${studentRecords.length} Ders Kaydı Bulunmaktadır`, size: 18, bold: true })] })]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                shading: { type: ShadingType.CLEAR, fill: 'EAEFEF' },
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
      }),

      new Paragraph({ spacing: { before: 300, after: 150 }, children: [] }),

      // Table of evaluated courses by this student
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [
          new TextRun({
            text: `Öğrencinin İncelediği Derslerin Özet Tablosu`,
            bold: true,
            size: 20,
            color: '1A5C4A'
          })
        ]
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          // Header Row
          new TableRow({
            children: [
              new TableCell({
                width: { size: 15, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Ders Kodu', bold: true, size: 16, color: 'FFFFFF' })] })]
              }),
              new TableCell({
                width: { size: 35, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Ders Adı', bold: true, size: 16, color: 'FFFFFF' })] })]
              }),
              new TableCell({
                width: { size: 22, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ children: [new TextRun({ text: 'Öğretim Elemanı', bold: true, size: 16, color: 'FFFFFF' })] })]
              }),
              new TableCell({
                width: { size: 14, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Haftalar', bold: true, size: 16, color: 'FFFFFF' })] })]
              }),
              new TableCell({
                width: { size: 14, type: WidthType.PERCENTAGE },
                shading: { type: ShadingType.CLEAR, fill: '1A5C4A' },
                borders: cellBorders,
                children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Genel Durum', bold: true, size: 16, color: 'FFFFFF' })] })]
              })
            ]
          }),
          // Data Rows
          ...studentRecords.map((r, idx) =>
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
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.reviewed_weeks || '-', size: 16 })] })]
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
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: r.general_status, size: 14, bold: true })] })]
                })
              ]
            })
          )
        ]
      }),

      new Paragraph({ spacing: { before: 300 }, children: [] }),

      // Detailed feedback per course by this student
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [
          new TextRun({
            text: `Ders Bazında Ayrıntılı Değerlendirme Raporları`,
            bold: true,
            size: 20,
            color: '1A5C4A'
          })
        ]
      })
    ];

    // Append each course report card
    studentRecords.forEach((record, index) => {
      children.push(
        new Paragraph({
          spacing: { before: 200, after: 100 },
          children: [
            new TextRun({
              text: `${index + 1}. ${record.course_code} - ${record.course_name}`,
              bold: true,
              size: 18,
              color: '1A5C4A'
            }),
            new TextRun({
              text: ` (${record.instructor})`,
              size: 16,
              color: '666666'
            })
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'İncelenen Hafta Aralığı: ', bold: true, size: 16 }),
            new TextRun({ text: `${record.reviewed_weeks}    `, size: 16 }),
            new TextRun({ text: 'Genel Durum: ', bold: true, size: 16 }),
            new TextRun({ text: record.general_status, bold: true, size: 16, color: record.general_status === 'Büyük ölçüde örtüşüyor' ? '0E7044' : 'A05500' })
          ]
        }),
        new Paragraph({
          spacing: { before: 80, after: 80 },
          shading: { type: ShadingType.CLEAR, fill: 'F7F9FA' },
          children: [
            new TextRun({
              text: 'Resmi Bildirim Metni:\n',
              bold: true,
              size: 16,
              color: '333333'
            }),
            new TextRun({
              text: record.summary_report,
              size: 16,
              font: 'Consolas'
            })
          ]
        })
      );

      if (record.example_note) {
        children.push(
          new Paragraph({
            spacing: { after: 150 },
            children: [
              new TextRun({ text: 'Öğrencinin Somut Örnek ve Notu: ', bold: true, size: 16 }),
              new TextRun({ text: record.example_note, size: 16, italics: true })
            ]
          })
        );
      }
    });

    // Student Signature Block
    children.push(
      new Paragraph({ spacing: { before: 500 }, children: [] }),
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
                      new TextRun({ text: 'Raporu Düzenleyen Öğrenci / Temsilci', bold: true, size: 17 }),
                      new TextRun({ text: `\n\n${studentName}`, size: 17, bold: true }),
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

    sections.push({
      properties: {},
      children
    });
  }

  const doc = new Document({ sections });
  const filename = `Bologna_Ogrenci_Bazli_Degerlendirme_Raporu_${new Date().toISOString().slice(0, 10)}.docx`;
  await saveDocx(doc, filename);
}

// Render weekly breakdown if available
function renderWeeklyDetails(record: EvaluationRecordDoc): any[] {
  let answers: any[] = [];
  if (Array.isArray(record.week_answers)) {
    answers = record.week_answers;
  } else if (typeof record.week_answers === 'string') {
    try {
      const parsed = JSON.parse(record.week_answers);
      if (Array.isArray(parsed)) answers = parsed;
    } catch {}
  }

  if (!answers.length) return [];

  const rows: TableRow[] = [
    new TableRow({
      children: [
        new TableCell({
          width: { size: 12, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: 'EAEFEF' },
          borders: cellBorders,
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Hafta', bold: true, size: 16 })] })]
        }),
        new TableCell({
          width: { size: 48, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: 'EAEFEF' },
          borders: cellBorders,
          children: [new Paragraph({ children: [new TextRun({ text: 'Bologna Konu Başlığı', bold: true, size: 16 })] })]
        }),
        new TableCell({
          width: { size: 20, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: 'EAEFEF' },
          borders: cellBorders,
          children: [new Paragraph({ children: [new TextRun({ text: 'Değerlendirme', bold: true, size: 16 })] })]
        }),
        new TableCell({
          width: { size: 20, type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: 'EAEFEF' },
          borders: cellBorders,
          children: [new Paragraph({ children: [new TextRun({ text: 'Öğrenci Notu', bold: true, size: 16 })] })]
        })
      ]
    }),
    ...answers.map(
      (a: any) =>
        new TableRow({
          children: [
            new TableCell({
              borders: cellBorders,
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${a.week}. Hafta`, size: 16 })] })]
            }),
            new TableCell({
              borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun({ text: a.topic || '-', size: 16 })] })]
            }),
            new TableCell({
              borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun({ text: a.ratingLabel || a.rating || '-', size: 16 })] })]
            }),
            new TableCell({
              borders: cellBorders,
              children: [new Paragraph({ children: [new TextRun({ text: a.note || '-', size: 16, italics: true })] })]
            })
          ]
        })
    )
  ];

  return [
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [
        new TextRun({
          text: '3. Hafta Bazında Detaylı Bologna Konu Karşılaştırması',
          bold: true,
          size: 20,
          color: '1A5C4A'
        })
      ]
    }),
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows
    })
  ];
}
