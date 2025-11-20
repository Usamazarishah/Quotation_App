import React from 'react'

export default function PriceSummary({ priceSummary, setPriceSummary }) {
  return (
        <div className='flex flex-col gap-[14px]'>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-3'>
        <div>
          <label className="block text-sm font-medium  mb-2">Sub Total</label>
          <input
            type="text"
            placeholder="Customer Name "
            onChange={(e) => setPriceSummary({ ...priceSummary, subTotal: e.target.value })}
            className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium  mb-2">Total Discount Applied</label>
          <input
            type="text"
            placeholder="Company Name"
            onChange={(e) => setPriceSummary({ ...priceSummary, totalDiscount: e.target.value })}

            className="w-full  px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2  gap-3'>
        <div>
          <label className="block text-sm font-medium  mb-2">Total Tax Applied</label>
          <input
            type="text"
            placeholder="Customer Name "
            onChange={(e) => setPriceSummary({ ...priceSummary, totalTax: e.target.value })}
            className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium  mb-2">Grand Total</label>
          <input
            type="text"
            placeholder="Company Name"
            onChange={(e) => setPriceSummary({ ...priceSummary, grandTotal: e.target.value })}

            className="w-full  px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  )
}

