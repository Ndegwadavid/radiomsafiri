import React, { useEffect } from 'react';

const Team = () => {
  useEffect(() => {
    // Add the Voiceflow script dynamically to the page
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '67b4eb18ab4534bbe160925a' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });
    };
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Team Member Card */}
        <div className="flex justify-center">
          <div className="transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm hover:shadow-2xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/images/sermons/pains3.jpg"
                  alt="Pastor Daniel Kimani"
                  className="w-full h-full object-cover transform hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-8 bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Daniel Kimani
                </h2>
                <p className="text-lg text-indigo-600 font-medium mb-4">
                  Pastor
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Leading our community with wisdom, compassion, and dedication to spiritual growth.
                </p>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-center space-x-4">
                    <button className="p-2 text-gray-600 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                      </svg>
                    </button>
                    <button className="p-2 text-gray-600 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
