import { Briefcase, GraduationCap, ArrowLeft, Mail, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function CAP() {
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
            <h1 className="text-3xl font-bold text-gray-900">Christians Against Poverty (CAP)</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-50 text-blue-600 rounded-lg p-3">
                <Heart className="w-12 h-12" />
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
                Financial Freedom & Support Services
              </h2>

              <p className="text-gray-600 mb-8">
                Revival Christian Church Enfield proudly partners with Christians Against Poverty (CAP) 
                to provide practical solutions for those struggling with debt, unemployment, and financial hardship.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Job Club</h3>
                  </div>
                  <p className="text-gray-600 mb-4">A supportive community program offering:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      CV and application assistance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Interview skills training
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Job search strategies
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Confidence building workshops
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      One-to-one mentoring
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Life Skills Program</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Practical courses covering:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Budget management and financial planning
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Cooking nutritious meals on a limited budget
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Shopping strategies to save money
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Energy conservation tips
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Building healthy relationships
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose CAP?</h3>
                <p className="text-gray-600">
                  Our programs are completely free, confidential, and open to everyone regardless of 
                  religious beliefs. We've helped countless individuals in Enfield gain financial 
                  stability and independence.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us:</h3>
                <p className="text-gray-600 mb-6">
                  If you or someone you know could benefit from our CAP services, contact our CAP 
                  coordinator Kemi Falomo:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href="mailto:info@rcceenfield.org"
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@rcceenfield.org</span>
                  </a>
                  <a 
                    href="tel:07534625399"
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
                  >
                    <Phone className="w-5 h-5" />
                    <span>07534 625399</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="https://rcce.churchsuite.com/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our CAP Ministry
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CAP;