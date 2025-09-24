"use client";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "@/components/baseUrl";
import TicketCard from "@/components/ticket";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  model: string;
  created_at: string;
}
interface TicketResponse {
  ticketCode: string;
  qr: string;
  event: {
    title: string;
    location: string;
    startDate: string;
  };
  user: {
    name: string;
    phone: string;
    email: string;
    model: string;
  };
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ticket, setTicket] = useState<TicketResponse | null>(null);
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    model: "",
  });

  const bmwModels = [
    "1 Series",
    "2 Series",
    "3 Series",
    "4 Series",
    "5 Series",
    "6 Series",
    "7 Series",
    "8 Series",
    "X1",
    "X2",
    "X3",
    "X4",
    "X5",
    "X6",
    "X7",
    "i3",
    "i4",
    "i5",
    "i7",
    "iX1",
    "iX3",
    "iX",
    "Z4",
    "M Series",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setSuccess(null);

  try {
    // 1. Register the user
    const userRes = await axios.post(`${baseURL}/api/users`, formData);
    const user = userRes.data;

    // 2. Create ticket for that user
    const ticketRes = await axios.post(`${baseURL}/api/tickets`, {
      eventId: 1,
      userId: user.id,
    });

    setTicket(ticketRes.data);
    setSuccess("✅ Successfully Registered & Ticket Issued!");
  } catch (err: any) {
    setError(err.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg ">
        <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1 text-black">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <div className="mt-1 text-black">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="mt-1 text-black">
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+254 12 345 678"
                value={formData.phone}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* BMW Model Dropdown */}
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700">BMW Model</label>
            <div className="mt-1 text-black">
              <select
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">-- Select BMW Model --</option>
                {bmwModels.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
            >
              {loading ? "Saving..." : "Register"}
            </button>
          </div>
        </form>

        {/* Success and Error Messages */}
        {success && (
          <div className="mt-4 text-center">
            <p className="text-green-600">{success}</p>
          </div>
        )}
        {error && (
          <div className="mt-4 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        )}

{ticket && (
  <div className="mt-6">
    <TicketCard
      eventTitle={ticket.event.title}
      eventLocation={ticket.event.location}
      startDate={ticket.event.startDate}
      name={ticket.user.name}
      phone={ticket.user.phone}
      email={ticket.user.email}
      model={ticket.user.model}
      qr={ticket.qr}
      ticketCode={ticket.ticketCode}
    />
  </div>
)}


      </div>
    </div>
  );
}