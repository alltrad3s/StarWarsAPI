import React from 'react';

export const Dash: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Star Wars Explorer Project</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Project</h2>
        <p className="text-gray-700 mb-2">
          This Star Wars Explorer was built as part of an assignment for the KODIGO Fullstack Jr Laravel Developer Bootcamp.
          It showcases various technologies and integrations to create an interactive Star Wars information platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology Stack</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>React with TypeScript for a robust front-end architecture</li>
          <li>Tailwind CSS for responsive and customizable styling</li>
          <li>Firebase for authentication and app hosting</li>
          <li>GitHub for version control and collaboration</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">API Integration</h2>
        <p className="text-gray-700 mb-2">
          This project integrates two Star Wars APIs to provide comprehensive information:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>SWAPI (Star Wars API) for detailed Star Wars universe data</li>
          <li>Star Wars Visual Guide API for matching visual content</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>User authentication with protected routes for logged-in users</li>
          <li>Explore characters, planets, starships, and films from the Star Wars universe</li>
          <li>Add items to favorites, viewable in a dedicated favorites page</li>
          <li>Responsive design for optimal viewing on various devices</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deployment</h2>
        <p className="text-gray-700">
          The application is hosted on Firebase and accessible via a custom domain, providing a seamless and professional user experience.
        </p>
      </section>
    </div>
  );
};