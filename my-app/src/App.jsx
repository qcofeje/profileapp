import React, { useState } from 'react';
import './App.css';

const userProfile = {
  name: "Constantine Feje",
  title: "The Great and Mighty",
  
  personalBackground: "I am a 19-year-old Computer Science student, currently in my second year at the Technological Institute of the Philippines. I am driven by a passion for technology and software development, actively learning to build scalable and functional applications. My leisure time is focused on refining my coding skills, enjoying games, and reading.",
  
  education: [
    { school: "Technological Institute of the Philippines", degree: "BS in Computer Science (2nd Year)", years: "Present" },
  ],
  
  careers: [], 
  leisure: [
    "Coding (as a hobby and skill development)",
    "Playing (gaming and sports)",
    "Reading (technology, literature, and science fiction)"
  ],
};


const EducationEntry = ({ school, degree, years }) => (
  <div className="mb-4 p-3 bg-gray-700/50 rounded-lg shadow-inner">
    <h4 className="text-lg font-bold text-white">{degree}</h4>
    <p className="text-sky-400 font-medium">{school}</p>
    <p className="text-sm text-gray-400">{years}</p>
  </div>
);

const CareerEntry = ({ company, role, years, desc }) => (
  <div className="mb-4 p-3 bg-gray-700/50 rounded-lg shadow-inner border-l-4 border-sky-600">
    <p className="text-sm text-gray-400 float-right">{years}</p>
    <h4 className="text-lg font-bold text-white">{role}</h4>
    <p className="text-sky-400 font-medium mb-1">{company}</p>
    <p className="text-sm text-gray-300">{desc}</p>
  </div>
);


const PersonalBackgroundScreen = ({ goToMenu }) => (
  <>
    <div className="mb-6 p-4 bg-gray-700/50 rounded-lg shadow-inner">
      <p className="text-sm text-gray-300 leading-relaxed italic">
        "{userProfile.personalBackground}"
      </p>
    </div>
    <div className="mt-8 text-center">
      <button onClick={goToMenu} className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 transition duration-200 shadow-md">
        Back to Menu
      </button>
    </div>
  </>
);

const EducationScreen = ({ goToMenu }) => (
  <>
    <div className="mt-4">
      {userProfile.education.length > 0 ? (
        userProfile.education.map((item, index) => (
          <EducationEntry key={index} {...item} />
        ))
      ) : (
        <p className="text-gray-400 text-center py-8">No education details available yet.</p>
      )}
    </div>
    <div className="mt-8 text-center">
      <button onClick={goToMenu} className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 transition duration-200 shadow-md">
        Back to Menu
      </button>
    </div>
  </>
);

const CareersScreen = ({ goToMenu }) => (
  <>
    <div className="mt-4">
      {userProfile.careers.length > 0 ? (
        userProfile.careers.map((item, index) => (
          <CareerEntry key={index} {...item} />
        ))
      ) : (
        <p className="text-gray-400 text-center py-8">No career or work experience listed yet.</p>
      )}
    </div>
    <div className="mt-8 text-center">
      <button onClick={goToMenu} className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 transition duration-200 shadow-md">
        Back to Menu
      </button>
    </div>
  </>
);

const LeisureScreen = ({ goToMenu }) => (
  <>
    <div className="mt-4">
      {userProfile.leisure.length > 0 ? (
        <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
          {userProfile.leisure.map((item, index) => (
            <li key={index} className="text-gray-300 text-base">
              <span className="text-sky-400 font-semibold">•</span> {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center py-8">No leisure or hobby information available yet.</p>
      )}
    </div>
    <div className="mt-8 text-center">
      <button onClick={goToMenu} className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 transition duration-200 shadow-md">
        Back to Menu
      </button>
    </div>
  </>
);

const MainMenu = ({ setPage }) => {
  const menuItems = [
    { label: "Personal Background", page: "background", color: "bg-indigo-600" },
    { label: "Education", page: "education", color: "bg-green-600" },
    { label: "Careers", page: "careers", color: "bg-red-600" },
    { label: "Leisure", page: "leisure", color: "bg-yellow-600" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {menuItems.map(({ label, page, color }) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          className={`flex flex-col items-center justify-center p-6 rounded-xl text-white font-bold text-lg h-32 transform transition duration-300 hover:scale-[1.03] ${color} shadow-lg hover:shadow-xl`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};


const ProfileCard = () => {
  const [currentPage, setCurrentPage] = useState('menu');

  const goToMenu = () => setCurrentPage('menu');
  
  const renderScreen = () => {
    switch (currentPage) {
      case 'background':
        return <PersonalBackgroundScreen goToMenu={goToMenu} />;
      case 'education':
        return <EducationScreen goToMenu={goToMenu} />;
      case 'careers':
        return <CareersScreen goToMenu={goToMenu} />;
      case 'leisure':
        return <LeisureScreen goToMenu={goToMenu} />;
      case 'menu':
      default:
        return <MainMenu setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">

      {/* Profile Card Container (Fixed Dark Mode) */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border-t-4 border-sky-500 min-h-[450px]">
        
        {/* Name and Title (Always visible) */}
        <div className="text-center pb-6 border-b border-gray-700 mb-6">
          <h1 className="text-4xl font-extrabold text-white">
            {userProfile.name}
          </h1>
          <p className="text-xl text-sky-400 font-medium mt-1">
            {userProfile.title}
          </p>
        </div>

        {/* Dynamic Content Area */}
        {renderScreen()}
        
      </div>
      
      {/* Footer / Attribution */}
      <div className="text-center mt-8 text-sm text-gray-400">
        Profile application built with React & Tailwind CSS
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className={'dark'}>
      <div 
        className="min-h-screen flex items-start sm:items-center justify-center p-4 sm:p-6 bg-gray-900 font-[Inter]">
        <ProfileCard />
      </div>
    </div>
  );
};

export default App;
