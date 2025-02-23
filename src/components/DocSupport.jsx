import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../firebase/server"; 

const DocSupport = () => {
  const [doctor, setDoctor] = useState({
    fullName: "",
    registrationNumber: "",
    issuingCouncil: "",
    password: "",
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const q = query(
        collection(db, "doctors"),
        where("registrationNumber", "==", doctor.registrationNumber),
        where("password", "==", doctor.password) // Check if password matches
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("Doctor verified! Access granted.");
      } else {
        alert("Not a doctor or incorrect password. Please check your details.");
      }
    } catch (error) {
      console.error("Error checking doctor details: ", error);
    }
  };

  return (
    <div className="p-7">
      <h2 className="text-2xl font-bold mb-4">Doctor Verification</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={doctor.fullName}
            onChange={handleChange}
            className="border p-2 w-[40%] rounded rounded-4xl outline-none"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Medical Registration Number</label>
          <input
            type="text"
            name="registrationNumber"
            placeholder="Medical Registration Number"
            value={doctor.registrationNumber}
            onChange={handleChange}
            className="border p-2 w-[40%] rounded rounded-4xl outline-none"
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Issuing Medical Council</label>
          <input
            type="text"
            name="issuingCouncil"
            placeholder="Issuing Medical Council"
            value={doctor.issuingCouncil}
            onChange={handleChange}
            className="border p-2 w-[40%] rounded rounded-4xl outline-none "
            required
          />
        </div>

        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={doctor.password}
            onChange={handleChange}
            className="border p-2 w-[40%] rounded rounded-4xl outline-none "
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-[40%] rounded rounded-4xl outline-none ">
          Verify Doctor
        </button>
      </form>
    </div>
  );
};

export default DocSupport;
