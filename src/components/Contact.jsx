import React from 'react'
import Navbar from '../components/Navbar'
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Navbar />

      <div className="max-w-md mx-auto mt-24 p-6">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full focus:outline-none focus:ring-0"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full focus:outline-none focus:ring-0"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">Valid email is required</span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full focus:outline-none focus:ring-0"
              placeholder="Type your message"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Submit */}
          <button className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;