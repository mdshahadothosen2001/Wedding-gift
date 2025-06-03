'use client';

import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/component/URLs';
import { Gift, Users } from 'lucide-react';

export default function Dashboard() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex flex-col items-center p-8 mt-5">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        Welcome to the Guest & Gift Portal
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mb-10">
        This portal helps you manage guests and their gifts efficiently. You can add, list, or track guest activities,
        and securely receive or track gifts sent with OTP verification.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mb-10">
        {/* Guest Card */}
        <div
          onClick={() => navigateTo(ROUTES.GUEST)}
          className="cursor-pointer bg-white p-6 rounded-2xl border shadow hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-3">
            <Users className="text-indigo-600 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-indigo-700">Guest Management</h2>
          </div>
          <p className="text-gray-500">
            Add new guests, view existing guest details, and manage invitations and records.
          </p>
        </div>

        {/* Gift Card */}
        <div
          onClick={() => navigateTo(ROUTES.GIFT)}
          className="cursor-pointer bg-white p-6 rounded-2xl border shadow hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-3">
            <Gift className="text-green-600 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-green-700">Gift Management</h2>
          </div>
          <p className="text-gray-500">
            Receive gifts securely using OTP, list all received items, and view gift history with details.
          </p>
        </div>
      </div>



      <div className="h-80" />
      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Insights Here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
        <span className="text-3xl font-bold text-indigo-600">120</span>
        <span className="text-gray-600 mt-2">Total Guests</span>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
        <span className="text-3xl font-bold text-green-600">85</span>
        <span className="text-gray-600 mt-2">Gifts Received</span>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
        <span className="text-3xl font-bold text-yellow-600">5</span>
        <span className="text-gray-600 mt-2">Pending Invitations</span>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-yellow-700 mb-4 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Pending Guests about to come 
          </h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-4 shadow-sm">
            <ul className="divide-y divide-yellow-100">
              <li className="py-2 flex items-center justify-between">
          <span className="font-medium text-gray-800">Ship Sorkar</span>
          <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">Invitation sent</span>
              </li>
              <li className="py-2 flex items-center justify-between">
          <span className="font-medium text-gray-800">Sinthiya Islam</span>
          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Awaiting Parking</span>
              </li>
              <li className="py-2 flex items-center justify-between">
          <span className="font-medium text-gray-800">Sohan Babu</span>
          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Pending confirmation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">How to Use</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          <li>Click on <span className="font-medium text-indigo-600">Guest Management</span> to add or view guests.</li>
          <li>Use <span className="font-medium text-green-600">Gift Management</span> to track and receive gifts.</li>
          <li>Access quick actions below for faster navigation.</li>
        </ol>
      </section>


      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Upcoming Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Export guest and gift data as CSV or PDF.</li>
          <li>Automated email reminders for pending invitations.</li>
          <li>Analytics dashboard for event insights.</li>
          <li>Customizable invitation templates.</li>
          <li>Mobile app for on-the-go management.</li>
          <li>Integration with popular calendar apps.</li>
          <li>Enhanced security features for gift verification.</li>
          <li>Guest RSVP tracking and notifications.</li>
          <li>Gift wish list feature for guests.</li>
          <li>Multi-language support for international guests.</li>
          <li>Real-time notifications for gift arrivals.</li>
          <li>Social media sharing options for event updates.</li>
          <li>Guest feedback and rating system.</li>
          <li>Customizable event themes and styles.</li>
          <li>Support for virtual events and online gifts.</li>
          <li>Integration with popular e-commerce platforms for gift suggestions.</li>
          <li>Advanced search and filtering options for guests and gifts.</li>
          <li>Guest seating arrangement tool.</li>
          <li>Gift tracking with delivery status updates.</li>
          <li>Option to set gift preferences and restrictions.</li>
          <li>Collaboration features for event planning with family and friends.</li>
          <li>Support for multiple events and guest lists.</li>
          <li>Customizable notifications for guests and gift updates.</li>
        </ul>
      </section>

      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Support & Feedback</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 shadow-sm">
          <p className="text-gray-700 mb-2">
            Need help or want to suggest a feature? Reach out to our support team or leave your feedback!
          </p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={() => window.open('mailto:support@weddinggift.com')}
          >
            Contact Support
          </button>
        </div>
      </section>



      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-purple-400 rounded-full animate-bounce"></span>
          Event Timeline
        </h2>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-1 bg-purple-200 rounded"></div>
          <ul className="space-y-8">
        <li className="relative">
          <div className="absolute -left-4 top-1 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow">
            1
          </div>
          <div className="ml-6">
            <h4 className="font-semibold text-purple-700">Invitation Sent</h4>
            <p className="text-gray-500 text-sm">All guests receive their invitations via email and SMS.</p>
            <span className="text-xs text-gray-400">June 10, 2024</span>
          </div>
        </li>
        <li className="relative">
          <div className="absolute -left-4 top-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow">
            2
          </div>
          <div className="ml-6">
            <h4 className="font-semibold text-green-700">RSVP & Confirmation</h4>
            <p className="text-gray-500 text-sm">Guests confirm their attendance and provide preferences.</p>
            <span className="text-xs text-gray-400">June 15, 2024</span>
          </div>
        </li>
        <li className="relative">
          <div className="absolute -left-4 top-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow">
            3
          </div>
          <div className="ml-6">
            <h4 className="font-semibold text-yellow-700">Gift Collection</h4>
            <p className="text-gray-500 text-sm">Gifts are received and tracked securely with OTP verification.</p>
            <span className="text-xs text-gray-400">June 20, 2024</span>
          </div>
        </li>
        <li className="relative">
          <div className="absolute -left-4 top-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow">
            4
          </div>
          <div className="ml-6">
            <h4 className="font-semibold text-blue-700">Event Day</h4>
            <p className="text-gray-500 text-sm">Celebrate with your guests and enjoy the special moments.</p>
            <span className="text-xs text-gray-400">June 25, 2024</span>
          </div>
        </li>
          </ul>
        </div>
      </section>

      <section className="w-full max-w-4xl mb-10 mt-20">
        <div className="flex items-center gap-4 mb-8 mt-2">
          <span className="inline-block w-4 h-4 bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-purple-400 rounded-full animate-pulse shadow-lg"></span>
          <h2 className="text-2xl font-bold text-pink-700 tracking-wide drop-shadow-sm flex items-center gap-2">
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recent Activity
          </h2>
        </div>
        <div className="bg-gradient-to-r from-pink-50 via-white to-purple-50 rounded-2xl shadow-lg p-6">
          <ul className="divide-y divide-gray-100">
        <li className="py-4 flex items-center justify-between group hover:bg-pink-100/40 rounded-xl transition">
          <span className="flex items-center gap-3">
            <span className="bg-indigo-100 p-2 rounded-full">
          <Users className="w-5 h-5 text-indigo-500" />
            </span>
            <span>
          <span className="font-semibold text-gray-800">Md. Shahadot Hosen</span>
          <span className="text-xs text-gray-500 ml-2">added as guest</span>
            </span>
          </span>
          <span className="text-xs text-pink-500 transition">2 min ago</span>
        </li>
        <li className="py-4 flex items-center justify-between group hover:bg-green-100/40 rounded-xl transition">
          <span className="flex items-center gap-3">
            <span className="bg-green-100 p-2 rounded-full">
          <Gift className="w-5 h-5 text-green-500" />
            </span>
            <span>
          <span className="font-semibold text-gray-800">Gift from Arif</span>
          <span className="text-xs text-gray-500 ml-2">received</span>
            </span>
          </span>
          <span className="text-xs text-green-600 transition">10 min ago</span>
        </li>
        <li className="py-4 flex items-center justify-between group hover:bg-indigo-100/40 rounded-xl transition">
          <span className="flex items-center gap-3">
            <span className="bg-indigo-100 p-2 rounded-full">
          <Users className="w-5 h-5 text-indigo-500" />
            </span>
            <span>
          <span className="font-semibold text-gray-800">Sinthiya Islam</span>
          <span className="text-xs text-gray-500 ml-2">RSVP confirmed</span>
            </span>
          </span>
          <span className="text-xs text-indigo-600 transition">30 min ago</span>
        </li>
        <li className="py-4 flex items-center justify-between group hover:bg-yellow-100/40 rounded-xl transition">
          <span className="flex items-center gap-3">
            <span className="bg-yellow-100 p-2 rounded-full">
          <Gift className="w-5 h-5 text-yellow-500" />
            </span>
            <span>
          <span className="font-semibold text-gray-800">Gift from Sohan</span>
          <span className="text-xs text-gray-500 ml-2">pending OTP</span>
            </span>
          </span>
          <span className="text-xs text-yellow-600 transition">1 hr ago</span>
        </li>
          </ul>
        </div>
      </section>



      <div className="mt-12 w-full max-w-3xl">
        <h3 className="text-xl font-semibold text-gray-700 mb-6 flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <button
        onClick={() => navigateTo(ROUTES.GUEST)}
        className="flex flex-col items-center bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl p-5 shadow transition group"
          >
        <Users className="w-8 h-8 text-indigo-600 mb-2 group-hover:scale-110 transition" />
        <span className="font-semibold text-indigo-700">Add Guest</span>
        <span className="text-xs text-gray-500 mt-1">Register a new guest</span>
          </button>
          <button
        onClick={() => navigateTo(ROUTES.GIFT)}
        className="flex flex-col items-center bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl p-5 shadow transition group"
          >
        <Gift className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition" />
        <span className="font-semibold text-green-700">Add Gift</span>
        <span className="text-xs text-gray-500 mt-1">Record a new gift</span>
          </button>
          <button
        onClick={() => navigateTo(ROUTES.GUEST)}
        className="flex flex-col items-center bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-5 shadow transition group"
          >
        <Users className="w-8 h-8 text-gray-600 mb-2 group-hover:scale-110 transition" />
        <span className="font-semibold text-gray-700">View Guests</span>
        <span className="text-xs text-gray-500 mt-1">See all guests</span>
          </button>
          <button
        onClick={() => navigateTo(ROUTES.GIFT)}
        className="flex flex-col items-center bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 rounded-xl p-5 shadow transition group"
          >
        <Gift className="w-8 h-8 text-yellow-600 mb-2 group-hover:scale-110 transition" />
        <span className="font-semibold text-yellow-700">View Gifts</span>
        <span className="text-xs text-gray-500 mt-1">See all gifts</span>
          </button>
        </div>
      </div>


      <footer className="mt-16 mb-8 flex flex-col items-center">
        <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 shadow-sm">
          <svg
        className="w-6 h-6 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
          >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        />
          </svg>
          <div className="text-left">
        <p className="text-gray-700 font-medium">
          Need help or have questions?
        </p>
        <button
          className="mt-1 text-blue-600 hover:underline font-semibold"
          onClick={() => window.open('mailto:support@weddinggift.com')}
        >
          Contact our support team
        </button>
          </div>
        </div>
      </footer>

    </main>
  );
}
