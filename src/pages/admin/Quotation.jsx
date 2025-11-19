
import React, { useState } from 'react';
import SideMenu from '../../components/layout/SideMenu';
import Notification from '../../components/common/Notification';
import Profile from '../../components/common/Profile';
import { ChevronRight, ChevronDown, Save, Send } from 'lucide-react';
import { IoMdArrowDropright } from "react-icons/io";
import { LuEyeClosed } from "react-icons/lu";
import Vector from '../../assets/images/Vector1.png'
import CustomerDetails from '../../components/createQuatation/CustomerDetails';
import OrderSources from '../../components/createQuatation/OrderSources';
import AddProduct from '../../components/createQuatation/AddProduct';
import PriceSummary from '../../components/createQuatation/PriceSummary';




export default function Quotation() {
    const [open, setOpen] = useState(true);
    const [products] = useState([
        { id: '01', name: 'Gas torch', quantity: '60pcs', unitPrice: '40.00$', discount: '6%', tax: '2%' },
        { id: '02', name: 'Scraper\'s', quantity: '40pcs', unitPrice: '25.00$', discount: '8%', tax: '2%' },
        { id: '03', name: 'Sealant guns', quantity: '30pcs', unitPrice: '50.00$', discount: '5%', tax: '3%' },
        { id: '04', name: 'Heat gun', quantity: '90pcs', unitPrice: '60.00$', discount: '9%', tax: '4%' },
        { id: '05', name: 'Mixing paddles', quantity: '16pcs', unitPrice: '15.00$', discount: '8%', tax: '2%' }
    ]);
    const [step, setStep] = useState(1);
    const [customerDetails, setCustomerDetails] = useState({
        customerName: "",
        companyName: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        email: "",
        phoneNumber: "",
        instruction: "",
    });
    const [orderSources, setOrderSources] = useState({});
    const [addProduct, setAddProduct] = useState({});
    const [priceSummary, setPriceSummary] = useState({});

    // Step functions
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const goToStep = (num) => setStep(num);




    return (
        <div className="flex min-h-screen bg-white">
            {/* Side Menu */}
            <SideMenu open={open} setOpen={setOpen} />

            <div className={`flex-1 transition-all duration-300 ${open ? 'ml-64' : 'ml-20'}`}>
                <div className="px-6 py-3 flex justify-between">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#000000] font-semibold text-sm">Invoices</span>
                        <IoMdArrowDropright className="w-4 h-4 text-[#008CFF99]" />
                        <span className="text-[#000000] font-semibold text-sm">New Invoices</span>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <Notification />
                        <Profile collapse={false} showEmail={false} />
                    </div>
                </div>

                {/* Header */}
                <div className="px-6 pt-1 pb-2">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-semibold text-gray-900">New Invoice</h1>
                        <div className="flex items-center gap-3">
                            <button className="w-[140px] h-10  flex items-center gap-2 px-2.5 py-2 text-sm  bg-[#F9F9F9] rounded-lg  hover:bg-gray-100 cursor-pointer ">
                                <LuEyeClosed className="w-4 h-4" />
                                Hide Preview
                            </button>
                            <button className="w-[140px] h-10 flex items-center gap-2 px-2.5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 text-sm font-medium">
                                <Save className="w-4 h-4" />
                                Save as Draft
                            </button>
                            <button className="w-[140px] h-10 flex items-center gap-2 px-2.5 py-2 bg-[#F9F9F9] rounded-lg  hover:bg-gray-100 cursor-pointer text-sm font-medium">
                                <Send className="w-4 h-4" />
                                Send Invoice
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="px-4 py-2.5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px] ">
                        {/* Form Section  */}
                        <div className="space-y-4  bg-[#F9F9F9] rounded-lg border border-gray-200 p-4">
                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-2 ">
                                <button onClick={() => goToStep(1)} className="px-2 py-2 border-2 border-blue-[#007AFF] hover:bg-[#DCEEFF] cursor-pointer text-[#007AFF] rounded-full text-xs font-bold ">
                                    Customer Details
                                </button>
                                <button onClick={() => goToStep(2)} className="px-2 py-2 border-2 border-blue-[#007AFF] hover:bg-[#DCEEFF] cursor-pointer text-[#007AFF] rounded-full text-xs font-bold">
                                    Order Sources
                                </button>
                                <button onClick={() => goToStep(3)} className="px-2 py-2 border-2 border-blue-[#007AFF] hover:bg-[#DCEEFF] cursor-pointer text-[#007AFF] rounded-full text-xs font-bold">
                                    Add Product
                                </button>
                                <button onClick={() => goToStep(4)} className="px-2 py-2 border-2 border-blue-[#007AFF] hover:bg-[#DCEEFF] cursor-pointer text-[#007AFF] rounded-full text-xs font-bold ">
                                    Price Summary
                                </button>
                                <button className="">
                                    <IoMdArrowDropright className="w-5 h-5 text-[#008CFF]" />
                                </button>
                            </div>

                            {/* Form Fields Grid */}
                            <div className="">
                                {/* <CustomerDetails customerDetails={customerDetails} setCustomerDetails={setCustomerDetails} /> */}
                                {/* RENDERING BASED ON STEP */}
                                {step === 1 && (
                                    <CustomerDetails
                                        customerDetails={customerDetails}
                                        setCustomerDetails={setCustomerDetails}
                                        nextStep={nextStep}
                                    />
                                )}

                                {step === 2 && (
                                    <OrderSources
                                        orderSource={orderSources}
                                        setOrderSource={setOrderSources}
                                        nextStep={nextStep}
                                        prevStep={prevStep}
                                    />
                                )}

                                {step === 3 && (
                                    <AddProduct
                                        addProduct={addProduct}
                                        setAddProduct={setAddProduct}
                                        nextStep={nextStep}
                                        prevStep={prevStep}
                                    />
                                )}

                                {step === 4 && (
                                    <PriceSummary
                                        priceSummary={priceSummary}
                                        setPriceSummary={setPriceSummary}
                                        prevStep={prevStep}
                                    />
                                )}
                            </div>

                            {/* Submit Buttons */}
                            <div className="grid grid-cols-2 gap-4 mt-92">
                                <button onClick={nextStep}
                                    className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-950 hover:cursor-pointer">
                                    Submit
                                </button>
                                <button className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-950 hover:cursor-pointer">
                                    Preview
                                </button>
                            </div>
                        </div>

                        {/* Invoice Preview */}
                        <div className="bg-[#F9F9F9] border border-gray-200 rounded-lg px-4 p-2 mr-2 h-[686px]">
                            {/* Header with Logo */}
                            <div className="flex justify-between items-start mb-2">
                                <div className=" flex items-center justify-center">
                                    {/* <div className="text-white text-3xl">💎</div> */}
                                    <img src={Vector} alt="" className='w-[50px] h-[72px]' />
                                </div>
                                <div className='flex flex-col items-end gap-1'>
                                    <p className="text-xs font-semibold">{customerDetails?.address}</p>
                                    <p className="text-xs font-semibold">{customerDetails?.companyName}</p>
                                    <p className="text-xs font-semibold">{customerDetails?.phoneNumber}</p>
                                </div>

                            </div>

                            {/* Invoice Details Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-2 py-2 border-b-2 border-b-[#008CFF]">
                                <div>
                                    <p className="text-sm font-semibold mb-1">
                                        Invoice Number : <span className="text-sm font-semibold"> INV-04568</span>
                                    </p>
                                    <p className="text-sm font-semibold mb-1">
                                        Date Issued : <span className="text-sm font-semibold"> Nov 01, 2025</span>
                                    </p>
                                    <p className="text-sm font-semibold mb-1">
                                        Due Date : <span className="text-sm font-semibold"> Nov 10, 2025</span>
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900 mt-2">07528</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-gray-900 mb-1">{customerDetails?.customerName}</p>
                                    <p className="text-sm font-semibold mt-1">{customerDetails?.email}</p>
                                    <p className="text-sm font-semibold mt-1">{customerDetails?.city}, {customerDetails?.state}</p>
                                    <p className="text-sm font-semibold  mt-2">{customerDetails?.postalCode}</p>
                                </div>
                            </div>

                            {/* Project Description */}
                            <div className="mb-4">
                                <p className="text-sm font-semibold text-gray-900 mb-1">Project Description:</p>
                                <p className="text-xs ">
                                    {customerDetails?.instruction} </p>
                            </div>

                            {/* Product Details */}
                            <div className="mb-4">
                                <p className="text-sm font-semibold text-gray-900 -mt-3">Product Details</p>

                                {/* Table Header */}
                                <div className="grid grid-cols-6 gap-2 mt-2">
                                    <div className=" bg-[#DCEEFF] border-2 flex items-center justify-center border-[#007AFF] rounded-full">
                                        <p className="text-[10px] font-bold text-[#007AFF] text-center">S.no</p>
                                    </div>
                                    <div className=" bg-[#DCEEFF] border-2 flex items-center justify-center border-[#007AFF] rounded-full">
                                        <p className="text-[10px] font-bold text-[#007AFF] text-center">Product Name</p>
                                    </div>
                                    <div className=" bg-[#DCEEFF] border-2 flex items-center justify-center border-[#007AFF] rounded-full">
                                        <p className="text-[10px] font-bold text-[#007AFF] text-center">Quantity</p>
                                    </div>
                                    <div className=" bg-[#DCEEFF] border-2 flex items-center justify-center border-[#007AFF] rounded-full">
                                        <p className="text-[10px] font-bold text-[#007AFF] text-center">Unit Price</p>
                                    </div>
                                    <div className=" bg-[#DCEEFF] border-2 flex items-center justify-center border-[#007AFF] rounded-full">
                                        <p className="text-[10px] font-bold text-[#007AFF] text-center">Discount %</p>
                                    </div>
                                    <div className=" bg-[#DCEEFF] border-2 flex items-center justify-center border-[#007AFF] rounded-full">
                                        <p className="text-[10px] font-bold text-[#007AFF] text-center">Tax %</p>
                                    </div>
                                </div>

                                {/* Table Rows */}
                                {products.map((product) => (
                                    <div key={product.id} className="grid grid-cols-6 gap-2 mb-1.5 mt-2">
                                        <div className="text-center">
                                            <p className="text-xs font-light">{product.id}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-light">{product.name}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-light">{product.quantity}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-light">{product.unitPrice}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-light">{product.discount}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-light">{product.tax}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Totals */}
                            <div className=" ml-[310px] space-y-1.5">
                                <div className="flex justify-between gap-1.5">
                                    <p className="text-sm ">Subtotal</p>
                                    <p className="text-sm font-semibold ">190.00$</p>
                                </div>
                                <div className="flex justify-between gap-1.5">
                                    <p className="text-sm ">Discount Applied</p>
                                    <p className="text-sm font-semibold ">36%</p>
                                </div>
                                <div className="flex justify-between gap-1.5">
                                    <p className="text-sm ">Tax Applied</p>
                                    <p className="text-sm font-semibold ">13%</p>
                                </div>
                                <div className="flex justify-between gap-1.5">
                                    <p className="text-sm  ">Grand Total</p>
                                    <p className="text-sm font-semibold ">137.408$</p>
                                </div>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="mt-[6px] pt-[6px] border-t-2 border-[#008CFF]">
                                <p className="text-xs font-semibold text-gray-900 mb[2px]">Terms & Conditions:</p>
                                <p className="text-xs text-gray-600 leading-relaxed mb-1">
                                    Above information is not an invoice and only a estimate goods services. Payment will be due prior to provision or delivery of goods / services.
                                </p>
                                <p className="text-xs font-semibold text-gray-900">
                                    Please Confirm Your Acceptance Of This Quote
                                </p>
                            </div>

                            {/* Signature */}
                            <div className="mt-6 flex justify-end">
                                <div className="text-right -mt-5">
                                    <div className="w-32 border-b-2 border-gray-900"></div>
                                    <p className="text-xs mt-1">Authorized Signature</p>
                                </div>
                            </div>

                            {/* Blue Circle Decoration */}
                            <div className="absolute bottom-4 right-4">
                                <div className="w-12 h-12 bg-blue-400 rounded-full opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}