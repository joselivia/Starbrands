"use client";

interface TicketProps {
  eventTitle: string;
  eventLocation: string;
  startDate: string;
  name: string;
  phone: string;
  email: string;
  model: string;
  qr: string; 
  ticketCode: string;
}

export default function TicketCard({
  eventTitle,
  eventLocation,
  startDate,
  name,
  phone,
  email,
  model,
  qr,
  ticketCode
}: TicketProps) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
      <h2 className="text-xl font-bold mb-2">{eventTitle}</h2>
      <p className="text-gray-600">{eventLocation}</p>
      <p className="text-gray-500 text-sm">{new Date(startDate).toLocaleString()}</p>

      <div className="my-4">
        <img src={qr} alt="Ticket QR Code" width={180} height={180} className="mx-auto" />
      </div>

      <div className="text-left text-sm text-gray-700 space-y-1 mt-4">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>BMW Model:</strong> {model}</p>
      </div>

      <p className="text-xs text-gray-400 mt-4">Ticket ID: {ticketCode}</p>
    </div>
  );
}
