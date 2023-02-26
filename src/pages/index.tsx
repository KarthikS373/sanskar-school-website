import React from "react"
import Image from "next/image"

import AdmissionProcedureImage from "../assets/image/admission-procedure.png"
import Admission from "../components/home/admission"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <Admission />
      <div className="center my-10 flex-col gap-12">
        <h1>Application Process</h1>
        <Image src={AdmissionProcedureImage} className="scale-150" alt="AdmissionProcedureImage" />
        <p className="text-center text-sm font-light text-gray-400">
          *Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi molestiae sequi ipsum?
        </p>
      </div>
    </Layout>
  )
}

export default HomePage
