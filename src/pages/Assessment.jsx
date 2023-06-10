import React from 'react'
import { Sidebar } from "../components"
import { Link } from "react-router-dom";
import { useState } from 'react';

function Assessment() {
  const [addiction, setAddiction] = useState("");

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center py-10">
            <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
              <div className="w-full">
                <div className="m-8 my-20 max-w-[400px] mx-auto">
                  <div className="mb-8">
                    <h1 className="mb-4 text-3xl font-extrabold text-center">Ready to take assessment</h1>
                    <p className="text-gray-600 text-center">Choose what suits the most to you</p>
                  </div>
                  <div className="space-y-4">
                    <Link to = "/drugs"><button className="p-3 bg-white border rounded-full w-full font-semibold hover:bg-black hover:text-white mb-4 " value="drugs" onClick={(e) => { setAddiction( addiction => e.target.value) }}>Drugs</button></Link> 
                    <Link to = "/devices"><button className="p-3 bg-white border rounded-full w-full font-semibold hover:bg-black hover:text-white mb-4 " value="devices" onClick={(e) => { setAddiction(addiction => e.target.value) }}>Devices</button></Link>
                    <Link to = "/alcohol"><button className="p-3 bg-white border rounded-full w-full font-semibold hover:bg-black hover:text-white mb-4 " value="alcohol" onClick={(e) => { setAddiction(addiction => e.target.value) }}>Alcohol</button></Link>
                    <Link to = "/assessment"><button className="p-3 bg-white border rounded-full w-full font-semibold hover:bg-black hover:text-white">Other</button></Link>
                  </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}


export default Assessment
