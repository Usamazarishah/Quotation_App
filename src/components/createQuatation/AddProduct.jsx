import React from 'react'

export default function addProduct({ addProduct, setAddProduct }) {
    return (
        <div className='flex flex-col gap-[14px]'>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-3'>
                <div>
                    <label className="block text-sm font-medium  mb-2">Product Name</label>
                    <input
                        type="text"
                        placeholder="Product Name "
                        onChange={(e) => setAddProduct({ ...addProduct, productName: e.target.value })}
                        className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium  mb-2">Category</label>
                    <select
                        onChange={(e) => setAddProduct({ ...addProduct, category: e.target.value })}
                        className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Contruction">Contruction</option>
                        <option value="Home">Home</option>
                        <option value="England">Office</option>

                    </select>

                </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div>
                    <label className="block text-sm font-medium  mb-2">Unit Measure</label>
                    <select
                        onChange={(e) => setAddProduct({ ...addProduct, unitMeasure: e.target.value })}
                        className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="pcs">pcs</option>
                        <option value="kg">kg</option>
                        <option value="packet">packet</option>

                    </select>

                </div>
                <div>
                    <label className="block text-sm font-medium  mb-2">Quantity</label>
                    <select
   
                        onChange={(e) => setAddProduct({ ...addProduct, quantity: e.target.value })}
                        className="w-full px-3  py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>



                    </select>

                </div>

            </div>

              <div className='grid grid-cols-2 gap-3'>
                <div>
                    <label className="block text-sm font-medium  mb-2">City</label>
                    <select
                        onChange={(e) => setAddProduct({ ...addProduct, city: e.target.value })}
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
                        onChange={(e) => setAddProduct({ ...addProduct, phoneNumber: e.target.value })}

                        className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

            </div>
           
           <div className='grid grid-cols-2 gap-3'>
                <div>
                    <label className="block text-sm font-medium  mb-2">Unit Price</label>
                    <select
                        onChange={(e) => setAddProduct({ ...addProduct, unitPrice: e.target.value })}
                        className="w-full px-3 py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="40.00$">40.00$</option>
                        <option value="25.00$">25.00$</option>
                        <option value="England">50.00$</option>
                         <option value="England">60.00$</option>
                        <option value="England">15.00$</option>


                    </select>

                </div>
                <div>
                    <label className="block text-sm font-medium  mb-2">Discount Applied</label>
                    <select
   
                        onChange={(e) => setAddProduct({ ...addProduct, discount: e.target.value })}
                        className="w-full px-3  py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="6%">6%</option>
                        <option value="7%">7%</option>
                        <option value="8%">8%</option>
                        <option value="9%">9%</option>
                        <option value="10%">10%</option>


                    </select>

                </div>

            </div>

                <div>
                    <label className="block text-sm font-medium  mb-2">Tax Applied</label>
                    <select
   
                        onChange={(e) => setAddProduct({ ...addProduct, tax: e.target.value })}
                        className="w-full px-3  py-2.5 border border-[#C7C7C7] rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="2%">2%</option>
                        <option value="3%">3%</option>
                        <option value="4%">4%</option>
                        <option value="6%">6%</option>
                        <option value="8%">8%</option>


                    </select>

                </div>
        </div>


    )
}
