import { ShoppingBag, Mail, Phone, Globe, Clock, MapPin, Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function FoodPantry() {
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
            <h1 className="text-3xl font-bold text-gray-900">Food Pantry</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-emerald-50 text-emerald-600 rounded-lg p-3">
                <ShoppingBag className="w-12 h-12" />
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
                Revival Christian Church Enfield Community Food Pantry
              </h2>

              <p className="text-gray-600 mb-8">
                Our Food Pantry is open every Saturday at 10am at the Revive Centre, 47 London Road, Enfield EN2 6DS. 
                We provide essential groceries and supplies to anyone facing financial hardship or food insecurity in our community.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Offer:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Fresh and non-perishable food items
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Personal care and toiletry products
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Baby essentials
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Household supplies
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works:</h3>
                <p className="text-gray-600">
                  The items are freely donated and freely given - no questions asked. Our pantry operates on the biblical principle 
                  from Matthew 25:35: "For I was hungry and you gave me something to eat, I was thirsty and you gave me something 
                  to drink, I was a stranger and you invited me in."
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Involved:</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    Need assistance? Simply visit us on Saturday mornings
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    Want to donate? Use the GIVE button below or bring items during church hours
                  </li>
                  <li className="flex items-start">
                    <ShoppingBag className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    Know someone in need? Share this information or contact us
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information:</h3>
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
                  <a 
                    href="https://www.rcceenfield.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
                  >
                    <Globe className="w-5 h-5" />
                    <span>www.rcceenfield.org</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>47 London Road, Enfield EN2 6DS</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href="https://rcce.churchsuite.com/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Food Pantry
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FoodPantry;