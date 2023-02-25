import React from "react"
import Image from "next/image"

import AdmissionImage from "../../../assets/image/admission.jpg"
import selection from "../../../data/sample/selection"
import Button from "../../atoms/button"
import Input from "../../atoms/input"
import Selection from "../../atoms/selection"

const Admission = () => {
  return (
    <div className="relative my-4 mx-auto grid grid-cols-1 rounded px-2 shadow-lg ring-1 ring-black/25 md:grid-cols-4 md:px-8 lg:grid-cols-6">
      <Image
        src={AdmissionImage}
        alt={"Admission Image"}
        className="top-0 left-0 h-full w-full md:absolute md:object-cover"
      />
      <div className="relative z-10 mb-4 space-y-4 rounded px-2 py-2 shadow-sm md:col-span-2 md:col-start-3 md:my-32 md:bg-primary-50 lg:col-start-5">
        <Input placeholder="Name" type="text" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Name" type="text" />
        <Selection className="w-full" popupDecoration="w-full" data={selection} />
        <div className="flex flex-wrap justify-between gap-2">
          <Input className="grow" />
          <Input className="grow" />
        </div>
        <Input />
        <div className="flex flex-wrap justify-between gap-2">
          <Selection parentDecoration="grow" data={selection} />
          <Selection parentDecoration="grow" data={selection} />
        </div>
        <div className="mb-6 flex items-start gap-2">
          <div className="block min-h-[1.5rem] pl-[1.5rem]">
            <input
              className="checked:border-primary checked:bg-primary checked:focus:border-primary checked:focus:bg-primary relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
              type="checkbox"
              id="terms"
            />
            <label className="sr-only" htmlFor="terms">
              Remember me
            </label>
          </div>
          <p className="w-11/12 text-justify text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam enim dicta
            exercitationem similique quo expedita pariatur inventore cum voluptatem.
          </p>
        </div>
        <div className="center">
          <Button variant="primary" title="Register" onClick={() => alert("Register")} />
        </div>
      </div>
    </div>
  )
}

export default Admission
