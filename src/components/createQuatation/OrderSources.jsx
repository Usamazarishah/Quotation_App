import React from 'react'

export default function OrderSources({ orderSources, setOrderSources }) {
  return (
    <div className='flex flex-col gap-[14px]'>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-3'>
        <div>
          <label className="block text-sm font-medium  mb-2">Order Sources</label>
          <input
            type="text"
            placeholder="Customer Name "
            onChange={(e) => setOrderSources({ ...orderSources, orderSource: e.target.value })}
            className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium  mb-2">Order Date</label>
          <input
            type="date"
            placeholder="Company Name"
            onChange={(e) => setOrderSources({ ...orderSources, orderDate: e.target.value })}

            className="w-full  px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className=''>
        <label className="block text-sm font-medium  mb-2">Delivery Address</label>
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setOrderSources({ ...orderSources, address: e.target.value })}

          className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className='grid grid-cols-2 gap-3'>
        <div>
          <label className="block text-sm font-medium  mb-2">City</label>
          <select
            onChange={(e) => setOrderSources({ ...orderSources, city: e.target.value })}
            className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Houston">Houston</option>
            <option value="Newyork">Newyork</option>
            <option value="England">England</option>

          </select>

        </div>
        <div>
          <label className="block text-sm font-medium  mb-2">Phone Number</label>
          <input
            type="number"
            placeholder="Phone Number"
            onChange={(e) => setOrderSources({ ...orderSources, phoneNumber: e.target.value })}

            className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-3'>
        <div>
          <label className="block text-sm font-medium  mb-2">Issue Date</label>
          <input
            type="date"
            placeholder="Enter Your Email"
            onChange={(e) => setOrderSources({ ...orderSources, issueDate: e.target.value })}

            className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium  mb-2">Due Date</label>
          <input
            type="date"
            placeholder="Phone Number"
            onChange={(e) => setOrderSources({ ...orderSources, dueDate: e.target.value })}

            className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-3'>
                <div>
                    <label className="block text-sm font-medium  mb-2">Payment Method</label>
                    <select
   
                        onChange={(e) => setOrderSources({ ...orderSources, paymentMethod: e.target.value })}
                        className="w-full px-3  py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Texas">Cheque</option>
                        <option value="Karachi">Cash</option>
                        <option value="Lahore">Transfer</option>

                    </select>

                </div>
        <div>
          <label className="block text-sm font-medium  mb-2">Advance</label>
          <input
            type="text"
            placeholder="30% Mandatary"
            onChange={(e) => setOrderSources({ ...orderSources, advance: e.target.value })}

            className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium  mb-2">Special Instruction</label>
        <textarea
          type="text"
          placeholder="Type Special Notes"
          onChange={(e) => setOrderSources({ ...orderSources, instruction: e.target.value })}

          className="w-full px-3 pt-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        </textarea>
      </div>
    </div>

  )
}
