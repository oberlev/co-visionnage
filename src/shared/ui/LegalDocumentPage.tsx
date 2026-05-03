import type { LegalDocument } from '@/shared/legal/documents';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <main className='brutal-font min-h-screen bg-blue-500 p-6 md:p-10'>
      <div className='mx-auto max-w-4xl border-4 border-black bg-white p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:p-10'>
        <Link
          className='mb-6 inline-flex items-center gap-2 border-4 border-black bg-cyan-300 px-4 py-3 text-sm font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none'
          href='/'
        >
          <ArrowLeft className='h-4 w-4' />
          Назад домой
        </Link>
        <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
          <div>
            <h1 className='mb-4 text-4xl font-black uppercase'>
              {document.title}
            </h1>
            <p className='text-sm font-bold text-gray-700'>
              Редакция от {document.updatedAt}
            </p>
          </div>

          <a
            download
            className='inline-flex items-center justify-center border-4 border-black bg-yellow-300 px-5 py-3 text-sm font-black uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none'
            href={`/api/legal/${document.slug}`}
          >
            Скачать документ
          </a>
        </div>

        <div className='space-y-8'>
          {document.sections.map((section) => (
            <section key={section.title}>
              <h2 className='mb-3 text-2xl font-black uppercase'>
                {section.title}
              </h2>
              <p className='text-base leading-7 text-black'>{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
