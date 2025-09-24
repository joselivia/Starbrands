'use client';

import { baseURL } from "@/components/baseUrl";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { TfiArrowTopRight } from "react-icons/tfi";

interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  start_date: string;
  end_date: string;
  registration_limit: number | null;
  registered_count: number;
  registration_ends: string;
  image_data: string;
  status?: string;   
}

export default function EventPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch events from API
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/api/events`);
      const now= new Date();
      const eventWithStatus=response.data.map((event: Event) => {
      const regEnds=new Date(event.registration_ends);
      const start=new Date(event.start_date);
      const end=new Date(event.end_date);
      let status="Open";  
      if(event.registration_limit && event.registered_count>=event.registration_limit){
        status="Sold Out";
      }else if(now>regEnds){
        status="Registration Closed";
      }else if(now>end){
        status="Event Ended";
      }else if(now>=start && now<=end){
        status="Ongoing";
      }
      return {...event,status};
      })
      setEvents(eventWithStatus);
      console.log("console data",response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Filter events based on search
  const filteredEvents = events.filter((event) =>
    [event.title, event.description, event.location]
      .some(field => field?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Format date helper
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="font-sans antialiased bg-gray-100 min-h-screen">
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : events.length === 0 ? (
        <div className="text-center py-10">No events found</div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-purple-800 to-indigo-900 text-white py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
              <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
                <div className="text-lg md:text-xl font-light mb-2">
                  <p className="font-semibold">Upcoming Events &gt;<span className="text-red-600" >{events.length}</span></p>
                </div>
                <p className="text-md md:text-lg opacity-80 mb-6">
                  StarBrand East Africa, the largest tech and business conference in Africa
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Join the biggest <span className="text-yellow-300">PollTrack & Business</span> event
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="bg-white text-purple-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
                    Register
                  </button>
                  <div className="mt-4 sm:mt-0 flex items-center gap-2">
                    <MdArrowOutward size={24} />
                    <span className="text-yellow-300 font-semibold text-lg">Free entrance!</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-xl">
                  <img
                    src="logo.png"
                    alt="2025 StarBrand Experience"
                    className="w-full h-auto rounded-3xl shadow-2xl transform rotate-3 scale-105"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section className="max-w-7xl mx-auto py-16 px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Events</h2>

            {/* Search */}
            <div className="flex flex-wrap gap-4 mb-12 items-center">
              <div className="flex-grow flex items-center border border-gray-300 rounded-md bg-white">
                <input
                  type="text"
                  placeholder="Search an event..."
                  className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="px-4 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                  >
                    <div className="relative">
                      <Image
                        src={event.image_data || "/placeholder.png"}
                        alt={event.title}
                        width={500}
                        height={500}
                        className="w-full h-48 object-cover"
                      /> 
                      <div className="absolute top-3 right-3 bg-white text-gray-800 font-semibold px-3 py-1 rounded-full text-sm">
                        {formatDate(event.start_date)}
                      </div>
                    </div>
                    <div className="p-5">
             <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                      <p className="text-gray-600 text-sm flex items-center mb-2">
                        <FaMapMarkerAlt color="red" className="mr-2" />
                        {event.location}
                      </p>
<div
  className={`text-sm font-semibold mb-4 ${
    event.status === "Registration Closed" ||
    event.status === "Sold Out" ||
    event.status === "Event Ended"
      ? "text-red-600"
      : "text-green-600"
  }`}
>
  {event.status || "Open"}
</div>
<Link
  href="Events/register"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-purple-700 hover:to-indigo-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
>
  <span className="text-sm">Register</span>
  <TfiArrowTopRight className="w-4 h-4" />
</Link>

                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-600 text-lg">
                  No events found matching your criteria.
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
