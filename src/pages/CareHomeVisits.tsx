import { Users, ArrowLeft, Mail, Gift, Music, Calendar, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function CareHomeVisits() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Link
              to="/community"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Community
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Illumination Care Home Visits</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-purple-50 text-purple-600 rounded-lg p-3">
                <Users className="w-12 h-12" />
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
                Bringing Joy to Our Senior Community
              </h2>

              <p className="text-gray-600 mb-8">
                The women's ministry of Revival Christian Church Enfield conducts bi-monthly visits 
                to care homes throughout the Enfield borough, bringing companionship and joy to residents.
              </p>

              <div className="bg-purple-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Illumination Program:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Calendar className="w-5 h-5 text-purple-600 mr-3" />
                    Scheduled visits twice monthly to various care facilities
                  </li>
                  <li className="flex items-center">
                    <Gift className="w-5 h-5 text-purple-600 mr-3" />
                    Thoughtful gift packages for residents
                  </li>
                  <li className="flex items-center">
                    <Music className="w-5 h-5 text-purple-600 mr-3" />
                    Uplifting hymns and familiar songs
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-5 h-5 text-purple-600 mr-3" />
                    Meaningful conversation and prayer
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-5 h-5 text-purple-600 mr-3" />
                    Seasonal celebrations and birthday acknowledgments
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact:</h3>
                <p className="text-gray-600">
                  These visits create meaningful connections between generations, reduce isolation among 
                  care home residents, and spread joy through music, gifts and companionship. Many 
                  residents eagerly anticipate our regular visits, which have become a highlight of their month.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Involved:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-3" />
                    Join our visitation team
                  </li>
                  <li className="flex items-center">
                    <Gift className="w-5 h-5 text-gray-400 mr-3" />
                    Donate items for gift packages
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-5 h-5 text-gray-400 mr-3" />
                    Sponsor special events at care homes
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                    Suggest a care home that would benefit from visits
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Visit Schedule:</h3>
                <p className="text-gray-600 mb-6">
                  Contact our Illumination Coordinator to learn about upcoming care home visits and 
                  how you can participate in this rewarding ministry:
                </p>
                <a 
                  href="mailto:info@rcceenfield.org"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Illumination Coordinator
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CareHomeVisits;