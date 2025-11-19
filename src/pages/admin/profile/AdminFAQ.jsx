
import React, { useState } from 'react';
import AdminProfileSide from '../../../components/layout/AdminProfileSide'
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../../../Utils/faqData';

export default function AdminFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=''>
            <AdminProfileSide />
       <div className="min-h-screen bg-white pt-10 px-6 sm:px-12 lg:px-24">
         <div className="ml-[180px]">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-[26px] font-bold">FAQS</h1>
        </div>

        {/* FAQ List */}
        <div className="space-y-0 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#D7D7D7] rounded-[10px] mb-3">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-3 px-4 flex items-center justify-between text-left  hover:bg-gray-50 transition-colors rounded-[10px]"
              >
                <span className="text-lg font-semibold text-gray-900 ">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-cyan-500">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>

              {/* Answer (slides down when open) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 ' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-5 pt-2 text-sm font-light text-gray-600 leading-relaxed border-t border-t-[#D7D7D7]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
)}
