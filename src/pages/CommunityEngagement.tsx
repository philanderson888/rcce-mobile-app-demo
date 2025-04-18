import { Link } from 'react-router-dom';
import { Heart, Coffee, ShoppingBag, Users } from 'lucide-react';
import Navigation from '../components/Navigation';

function CommunityEngagement() {
  const initiatives = [
    {
      title: 'Food Pantry',
      icon: <ShoppingBag className="w-12 h-12" />,
      path: '/community/food-pantry',
      description: 'Supporting our community with essential food supplies',
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Christians Against Poverty (CAP)',
      icon: <Heart className="w-12 h-12" />,
      path: '/community/cap',
      description: 'Free debt counselling and support services',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Town Hall Breakfast',
      icon: <Coffee className="w-12 h-12" />,
      path: '/community/town-hall-breakfast',
      description: 'Monthly community breakfast program',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'Illumination Care Home Visits',
      icon: <Users className="w-12 h-12" />,
      path: '/community/care-home-visits',
      description: 'Regular visits to local care homes',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Community Engagement</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((initiative) => (
            <Link
              key={initiative.title}
              to={initiative.path}
              className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-8">
                <div className={`inline-block rounded-lg p-3 ${initiative.color}`}>
                  {initiative.icon}
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {initiative.title}
                </h2>
                <p className="mt-2 text-gray-600">
                  {initiative.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CommunityEngagement;