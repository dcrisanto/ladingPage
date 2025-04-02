"use client";

import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FaRegCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { useGenerals } from "@/app/context/generals.context";

const Form = () => {
  const { multilanguage: {form}, general } = useGenerals(); // 🔹 Obtenemos multilanguage desde el contexto
  const { register, handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log("Form completo:", JSON.stringify(form, null, 2));


  const onSubmit = (data: any) => {
    console.log("Form Data:", { ...data, date: selectedDate });
  };

  return (
    <div className="container__section-form w-full bg-white rounded-lg shadow-md border-2 border-blue-500">
      {/* Título */}
      <h2 className="title__form font-bold text-secundary mb-2">
        {form.title}
      </h2>
      
      {/* Subtítulo */}
      <p className="text__subtitle text-secundary flex items-center flex-wrap mb-4">
        <FaPhoneAlt className="text-secundary mr-2" />
        Call us at<strong className="ml-1 whitespace-nowrap">{general.phone}</strong><span className="ml-2">or fill out our quick form below:</span>
      </p>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)} className="container__form space-y-4">
        {/* Company Name */}
        <div>
          <label className="text__label block font-medium text-primary">{form.name.label}</label>
          <input
            type="text"
            {...register("companyName")}
            className="text__label w-full border p-2 rounded-md placeholder-primary placeholder-opacity-50 border-primary" 
            placeholder={form.name.placeholder}
          />
        </div>
        {/* Email */}
        <div>
          <label className="text__label block font-medium text-primary">{form.email.label}</label>
          <input
            type="email"
            {...register("email")}
            className="text__label w-full border p-2 rounded-md placeholder-primary placeholder-opacity-50 border-primary" 
            placeholder={form.email.placeholder}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="text__label block font-medium text-primary">{form.phone.label}</label>
          <input
            type="tel"
            {...register("phone")}
            className="text__label w-full border p-2 rounded-md placeholder-primary placeholder-opacity-50 border-primary"
            placeholder={form.phone.placeholder}
          />
        </div>

        {/* Services */}
        <div>
          <label className="text__label block font-medium text-primary">{form.service.label}</label>
          <select
            {...register("service")}
            className="text__label w-full border p-2 rounded-md text-primary"
          >
            <option className="text-primary text-opacity-50 border-primary">Select a service</option>
            <option>Web Development</option>
            <option>SEO Optimization</option>
            <option>Marketing Strategy</option>
          </select>
        </div>

        {/* Preferred Date & Time */}
        <div>
          <label className="text__label block font-medium text-primary">
            {form.dateTime.label}
          </label>
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date!)}
              showTimeSelect
              dateFormat="MM/dd/yyyy - hh:mm aa"
              className="text__label w-full border p-2 rounded-md text-primary border-primary"
            />
            <FaRegCalendarAlt className="w-full absolute top-3 right-3 text-primary text-opacity-50 border-primary" />
          </div>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="text__label w-full bg-primary text-white py-4 rounded-md hover:bg-secundary"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
