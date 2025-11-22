import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { CONTENT, STAFF_DATA, EXAM_RESULTS } from '../constants';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Academics: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const content = CONTENT[language];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">{content.sections.results}</h2>
            <p className="mt-2 text-gray-500">
              {language === 'en' ? 'Performance of Class 10 and 12 over the years (Pass %)' : 'विगत वर्षों में कक्षा 10 और 12 का प्रदर्शन (उत्तीर्ण %)'}
            </p>
          </div>

          <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={EXAM_RESULTS}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="year" tick={{fontSize: 12}} />
                  <YAxis tick={{fontSize: 12}} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Legend />
                  <Bar dataKey="class10" name={language === 'en' ? 'Class 10' : 'कक्षा 10'} fill="#FF9933" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="class12" name={language === 'en' ? 'Class 12' : 'कक्षा 12'} fill="#000080" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

           {/* Toppers List (Last 3 Years) */}
           <div className="mt-10 grid gap-6 md:grid-cols-2">
                {EXAM_RESULTS.slice(-3).reverse().map((res) => (
                    <div key={res.year} className="bg-gray-50 rounded-lg p-6 border-l-4 border-gov-blue">
                        <h4 className="font-bold text-lg mb-2 text-gray-800">{res.year} {language === 'en' ? 'Toppers' : 'टॉपर'}</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-semibold text-gov-orange block">Class 10</span>
                                {res.toppers10.map((t, i) => <div key={i} className="text-gray-600">{t}</div>)}
                            </div>
                            <div>
                                <span className="font-semibold text-gov-blue block">Class 12</span>
                                {res.toppers12.map((t, i) => <div key={i} className="text-gray-600">{t}</div>)}
                            </div>
                        </div>
                    </div>
                ))}
           </div>
        </div>

        {/* Staff Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">{content.sections.staff}</h2>
            <div className="mt-4 max-w-xs mx-auto h-1 bg-gov-orange rounded"></div>
          </div>

          <div className="bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    {language === 'en' ? 'Name' : 'नाम'}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {language === 'en' ? 'Designation' : 'पदनाम'}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    {language === 'en' ? 'Subject' : 'विषय'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {STAFF_DATA.map((person) => (
                  <tr key={person.id} className="hover:bg-gray-50 transition-colors">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.designation}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.subject}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Academics;