import { Coffee, ArrowLeft, Mail, Phone, ListChecks, Users, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function TownHallBreakfast() {
  const topics = [
    'Mental health awareness and support',
    'Prostate Cancer',
    'Diabetes and COVID-19 Vaccination',
    'Nutrition and preventative health',
    'Family wellbeing',
  ];

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
            <h1 className="text-3xl font-bold text-gray-900">Town Hall Breakfast</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-amber-50 text-amber-600 rounded-lg p-3">
                <Coffee className="w-12 h-12" />
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
                Community Health & Wellbeing Forums
              </h2>

              <p className="text-gray-600 mb-8">
                Our Town Hall Breakfast meetings bring together health professionals and community 
                members in a relaxed, informative environment to discuss important health topics 
                affecting our community.
              </p>

              <div className="bg-amber-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    Expert-led discussions on physical and mental health topics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    Nutritious complimentary breakfast
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    Interactive Q&A sessions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    Networking opportunities with healthcare providers
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    Take-home resources and information
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Attend:</h3>
                <p className="text-gray-600">
                  These gatherings have become a trusted safe space for our community members to 
                  learn about critical health issues, ask questions in a judgment-free environment, 
                  and connect with local resources and support services.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Past Topics Have Included:</h3>
                <ul className="space-y-3 text-gray-600">
                  {topics.map((topic) => (
                    <li key={topic} className="flex items-center">
                      <ListChecks className="w-5 h-5 text-gray-400 mr-3" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Get Involved</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  For information about upcoming Town Hall Breakfast events, please contact our church office:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link 
                    to="/contact"
                    className="flex items-center space-x-3 text-blue-600 hover:text-blue-800"
                  >
                    <LinkIcon className="w-5 h-5" />
                    <span>Contact Church Office</span>
                  </Link>
                  <a 
                    href="tel:07534625399"
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
                  >
                    <Phone className="w-5 h-5" />
                    <span>07534 625399</span>
                  </a>
                  <a 
                    href="mailto:info@rcceenfield.org"
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@rcceenfield.org</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TownHallBreakfast;