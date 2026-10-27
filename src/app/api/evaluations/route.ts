import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      class_year,
      semester,
      term,
      course_id,
      course_code,
      course_name,
      instructor,
      student_name,
      reviewed_weeks,
      general_status,
      example_note,
      week_answers,
      summary_report,
    } = body;

    if (!course_code || !course_name || !general_status) {
      return NextResponse.json(
        { error: 'Ders kodu, ders adı ve genel durum zorunludur.' },
        { status: 400 }
      );
    }

    // Ensure table exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS bologna_evaluations (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        class_year INT NOT NULL,
        semester INT NOT NULL,
        term VARCHAR(20) NOT NULL,
        course_id VARCHAR(50) NOT NULL,
        course_code VARCHAR(50) NOT NULL,
        course_name VARCHAR(255) NOT NULL,
        instructor VARCHAR(255),
        student_name VARCHAR(255),
        reviewed_weeks VARCHAR(100),
        general_status VARCHAR(100) NOT NULL,
        example_note TEXT,
        week_answers JSONB,
        summary_report TEXT
      );
    `);

    const insertQuery = `
      INSERT INTO bologna_evaluations (
        class_year,
        semester,
        term,
        course_id,
        course_code,
        course_name,
        instructor,
        student_name,
        reviewed_weeks,
        general_status,
        example_note,
        week_answers,
        summary_report
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *;
    `;

    const values = [
      class_year || 1,
      semester || 1,
      term || 'Güz',
      course_id || '',
      course_code,
      course_name,
      instructor || '',
      student_name || 'Öğrenci Temsilcisi',
      reviewed_weeks || '1-7. haftalar',
      general_status,
      example_note || '',
      JSON.stringify(week_answers || []),
      summary_report || '',
    ];

    const result = await pool.query(insertQuery, values);
    return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error: any) {
    console.error('Error inserting evaluation:', error);
    return NextResponse.json(
      { error: 'Veritabanına kaydedilirken hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get('course_id');
    const classYear = searchParams.get('class_year');

    let query = 'SELECT * FROM bologna_evaluations';
    const params: any[] = [];
    const conditions: string[] = [];

    if (courseId) {
      params.push(courseId);
      conditions.push(`course_id = $${params.length}`);
    }

    if (classYear) {
      params.push(parseInt(classYear));
      conditions.push(`class_year = $${params.length}`);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY created_at DESC LIMIT 100;';

    const result = await pool.query(query, params);
    return NextResponse.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (error: any) {
    console.error('Error fetching evaluations:', error);
    return NextResponse.json(
      { error: 'Değerlendirmeler çekilirken hata oluştu: ' + error.message },
      { status: 500 }
    );
  }
}
