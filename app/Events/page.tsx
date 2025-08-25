'use client';

import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

export default function EventPage(){
  const allEvents = [
    {
      id: 1,
      image: 'https://placehold.co/400x250/A084E8/ffffff?text=Event+Image+1',
      date: 'AUG 19',
      category: 'Technical',
      title: 'Odoo Technical Training (IN) - August 2025',
      location: 'Online event',
      status: 'Registrations Closed',
      topic: 'Software Development'
    },
    {
      id: 2,
      image: 'https://placehold.co/400x250/A084E8/ffffff?text=Event+Image+2',
      date: 'AUG 19',
      category: 'Academy',
      title: 'Accounting 1-Day Masterclass - Kuala Lumpur',
      location: 'Kuala Lumpur, Malaysia',
      status: 'Sold Out',
      topic: 'Finance'
    },
    {
      id: 3,
      image: 'https://placehold.co/400x250/3498DB/ffffff?text=Event+Image+3',
      date: 'AUG 19',
      category: 'Business Show',
      title: 'Odoo Business Show 2025 - Mataram',
      location: 'Mataram, NB, Indonesia',
      status: 'Registrations Closed',
      topic: 'Business Strategy'
    },
    {
      id: 4,
      image: 'https://placehold.co/400x250/A084E8/ffffff?text=Event+Image+4',
      date: 'AUG 20',
      category: 'Academy',
      title: 'Formation - Facturation',
      location: 'Louvain-La-Neuve, Belgium',
      status: 'Sold Out',
      topic: 'Finance'
    },
    {
        id: 5,
        image: 'https://placehold.co/400x250/A084E8/ffffff?text=Event+Image+5',
        date: 'SEP 01',
        category: 'Conference',
        title: 'Global Tech Summit 2025',
        location: 'Berlin, Germany',
        status: 'Available',
        topic: 'Technology'
      },
      {
        id: 6,
        image: 'https://placehold.co/400x250/3498DB/ffffff?text=Event+Image+6',
        date: 'SEP 15',
        category: 'Workshop',
        title: 'Advanced AI & ML Workshop',
        location: 'San Francisco, USA',
        status: 'Limited Seats',
        topic: 'Artificial Intelligence'
      },
      {
        id: 7,
        image: 'https://placehold.co/400x250/A084E8/ffffff?text=Event+Image+7',
        date: 'OCT 10',
        category: 'Webinar',
        title: 'Future of Cloud Computing',
        location: 'Online event',
        status: 'Free Registration',
        topic: 'Technology'
      },
      {
        id: 8,
        image: 'https://placehold.co/400x250/3498DB/ffffff?text=Event+Image+8',
        date: 'NOV 20',
        category: 'Summit',
        title: 'Innovation Leaders Summit',
        location: 'Tokyo, Japan',
        status: 'Early Bird',
        topic: 'Business Strategy'
      },
  ];

  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedUpcoming, setSelectedUpcoming] = useState(''); 

  const topics = ['All Topics', 'Software Development', 'Finance', 'Business Strategy', 'Technology', 'Artificial Intelligence'];
  const types = ['All Types', 'Conference', 'Workshop', 'Webinar', 'Summit'];
  const upcomingOptions = ['All', 'Upcoming', 'Past'];
  const filteredEvents = allEvents.filter((event) => {
    const matchesSearchTerm = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTopic = selectedTopic === 'All Topics' || !selectedTopic || event.topic === selectedTopic;
    const matchesType = selectedType === 'All Types' || !selectedType || event.category === selectedType;
    const matchesUpcoming = selectedUpcoming === 'All' || !selectedUpcoming || 
                            (selectedUpcoming === 'Upcoming' && (event.status !== 'Registrations Closed' && event.status !== 'Sold Out')) ||
                            (selectedUpcoming === 'Past' && (event.status === 'Registrations Closed' || event.status === 'Sold Out'));


    return matchesSearchTerm && matchesTopic && matchesType && matchesUpcoming;
  });

  return (
    <div className="font-sans antialiased bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-800 to-indigo-900 text-white py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
         <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
           <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
            <p className="text-lg md:text-xl font-light mb-2">
              <span className="font-semibold">Upcoming Events &gt; 20 September 2025</span>
            </p>
        <p className="text-md md:text-lg opacity-80 mb-6">StarBrand East Africa, the largest tech and business conference in Africa</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Join the biggest <span className="text-yellow-300">PollTrack & Business</span> event
            </h1>
            <div className-="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                src="logo.jpg"
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
        <div className="flex flex-wrap gap-4 mb-12 items-center">
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none bg-white border border-gray-300 text-gray-700 px-4 py-2 pr-8 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          {/* Topic Dropdown */}
          <div className="relative">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="appearance-none bg-white border border-gray-300 text-gray-700 px-4 py-2 pr-8 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {topics.map((topic, index) => (
                <option key={index} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          {/* Upcoming Dropdown */}
          <div className="relative">
            <select
              value={selectedUpcoming}
              onChange={(e) => setSelectedUpcoming(e.target.value)}
              className="appearance-none bg-white border border-gray-300 text-gray-700 px-4 py-2 pr-8 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {upcomingOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>


          {/* Search Bar */}
          <div className="flex-grow flex items-center border border-gray-300 rounded-md bg-white">
            <input
              type="text"
              placeholder="Search an event..."
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="px-4 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="relative">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 right-3 bg-white text-gray-800 font-semibold px-3 py-1 rounded-full text-sm">
                    {event.date}
                  </div>
                </div>
                <div className="p-5">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    event.category === 'Technical' ? 'bg-green-100 text-green-700' :
                    event.category === 'Academy' ? 'bg-purple-100 text-purple-700' :
                    event.category === 'Business Show' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {event.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{event.title}</h3>
                  <p className="text-gray-600 text-sm flex items-center mb-4">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {event.location}
                  </p>
                  <div className={`text-sm font-semibold ${
                    event.status === 'Registrations Closed' || event.status === 'Sold Out' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {event.status}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg">No events found matching your criteria.</p>
          )}
        </div>
      </section>
    </div>
  );
}
