import React, { useState } from 'react';
import './Sermons.css'; // Make sure this CSS file exists

const sermons = [
  {
    title: "It pains to Love",
    description: "Explore the depths of God's love even in moments of trial and difficulty. Learn how His love transforms us even when it’s hard to understand.",
    image: "/images/sermons/pains3.jpg",
    videoUrl: "https://www.youtube.com/embed/CvqmS_etFq8",
  },
  {
    title: "Mifupa Mikavu",
    description: "A powerful sermon on faith and restoration from the story of Ezekiel's dry bones. Be inspired by how God can breathe new life into hopeless situations.",
    image: "/images/sermons/pains.jpg",
    videoUrl: "https://www.youtube.com/embed/eKuKujkxEys",
  },
];

const Sermons = () => {
  const [activeSermon, setActiveSermon] = useState(null);

  const handlePlaySermon = (index) => {
    setActiveSermon(index);
  };

  return (
    <section className="py-16 bg-gray-100" id="sermons">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Inspirational Sermons
        </h2>
        <h3 className="text-xl text-center mb-12 text-gray-600">
          Experience powerful sermons inspired to enrich your spiritual journey and increase in faith
        </h3>

        {/* Sermon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sermons.map((sermon, index) => (
            <div key={index} className="sermon-card p-6 bg-white rounded-lg shadow-lg flex flex-col">
              {/* Sermon Image */}
              <img 
                src={sermon.image} 
                alt={sermon.title} 
                className="rounded-lg mb-4 h-48 object-cover"
              />

              {/* Sermon Title */}
              <h3 className="sermon-title mb-3">{sermon.title}</h3>

              {/* Sermon Description */}
              <p className="sermon-description mb-4">{sermon.description}</p>

              {/* Listen Button or Embedded Video */}
              {activeSermon === index ? (
                // Show YouTube embed when "Listen to Sermon" is clicked
                <div className="relative overflow-hidden rounded-lg">
                  <iframe 
                    width="100%" 
                    height="315" 
                    src={sermon.videoUrl} 
                    title={sermon.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                // Button to play the sermon
                <button 
                  onClick={() => handlePlaySermon(index)}
                  className="mt-auto px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                >
                  Listen to Sermon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* View All Sermons Button */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/@Comeandreason5540"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="view-all-button">
              View All Sermons
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sermons;
