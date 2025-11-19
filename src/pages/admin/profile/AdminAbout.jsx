import React from 'react'
import AdminProfileSide from '../../../components/layout/AdminProfileSide'
import { features } from '../../../Utils/AboutData'

export default function AdminAbout() {

    return (

        <div className='flex justify-between '>
            <AdminProfileSide />

    <div className="min-h-screen bg-white ml-28 w-full  py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-[25px] font-bold">About App</h1>
        </div>

        {/* Features List */}
        <div className="space-y-9">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-2">
              <h2 className="text-xl font-semibold">
                <span className="mr-2">{feature.id}</span>
                {feature.title}
              </h2>
              <p className="text-lg font-medium text-[#00000099]  pl-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    )
}


