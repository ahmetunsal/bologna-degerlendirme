/**
 * Türkçe metinlerdeki bozuk HTML entity'lerini (&#226;, #226;, &#194;, &#238;, &#180;, vb.)
 * doğru Türkçe şapkalı veya noktalı karakterlere dönüştüren yardımcı fonksiyon.
 */
export function sanitizeTurkishText(str?: string | null): string {
  if (!str || typeof str !== 'string') return str || '';
  return str
    .replace(/&?(?:#226|#x0*e2|acirc);?/gi, 'â')
    .replace(/&?(?:#194|#x0*c2|Acirc);?/gi, 'Â')
    .replace(/&?(?:#238|#x0*ee|icirc);?/gi, 'î')
    .replace(/&?(?:#206|#x0*ce|Icirc);?/gi, 'Î')
    .replace(/&?(?:#251|#x0*fb|ucirc);?/gi, 'û')
    .replace(/&?(?:#219|#x0*db|Ucirc);?/gi, 'Û')
    .replace(/&?(?:#180|#x0*b4|acute);?/gi, "'")
    .replace(/&?(?:#39|#x0*27|apos);?/gi, "'")
    .replace(/&?(?:#160|#x0*a0|nbsp);?/gi, ' ')
    .replace(/&?(?:#34|#x0*22|quot);?/gi, '"')
    .replace(/&?(?:#231|ccedil);?/gi, 'ç')
    .replace(/&?(?:#199|Ccedil);?/gi, 'Ç')
    .replace(/&?(?:#246|ouml);?/gi, 'ö')
    .replace(/&?(?:#214|Ouml);?/gi, 'Ö')
    .replace(/&?(?:#252|uuml);?/gi, 'ü')
    .replace(/&?(?:#220|Uuml);?/gi, 'Ü')
    .replace(/&?(?:#304|Idot);?/gi, 'İ')
    .replace(/&?(?:#305|inodot);?/gi, 'ı')
    .replace(/&?(?:#351|scedil);?/gi, 'ş')
    .replace(/&?(?:#350|Scedil);?/gi, 'Ş')
    .replace(/&?(?:#287|gbreve);?/gi, 'ğ')
    .replace(/&?(?:#286|Gbreve);?/gi, 'Ğ')
    .replace(/&amp;/g, '&');
}

/**
 * Derin nesne veya dizi içerisindeki tüm string alanları sanitize eder.
 * Date ve diğer özel nesneleri bozmaz.
 */
export function sanitizeObject<T>(obj: T): T {
  if (!obj) return obj;
  if (obj instanceof Date || Object.prototype.toString.call(obj) === '[object Date]') {
    return obj;
  }
  if (typeof obj === 'string') return sanitizeTurkishText(obj) as any;
  if (Array.isArray(obj)) return obj.map(sanitizeObject) as any;
  if (typeof obj === 'object') {
    const res: any = {};
    for (const key of Object.keys(obj as any)) {
      res[key] = sanitizeObject((obj as any)[key]);
    }
    return res;
  }
  return obj;
}
