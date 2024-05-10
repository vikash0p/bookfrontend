'use client'
import React from 'react'
import { useFormStatus } from 'react-dom';

const SubmitButtton = () => {
    const{pending} =useFormStatus()
  return (
    <button
      disabled={pending}
      type="submit"
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default SubmitButtton
