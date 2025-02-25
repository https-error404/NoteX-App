import React from "react";

const About = () => {
  return (
    <div className="w-full font-serif">
      

      {/* About Section */}
      <section className="w-[80%] mx-auto mt-10 p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-900">About NoteX</h2>
        <p className="text-gray-700 text-lg mt-3 leading-relaxed">
          NoteX is a simple and efficient note-taking web application that allows you to create,
          edit, delete, and organize your notes seamlessly.
        </p>
        <p className="text-gray-600 text-md mt-2">
          Developed by <span className="font-semibold text-gray-900">Bapu Shelke</span>,
          this app is designed to enhance productivity and keep your ideas organized.
        </p>
      </section>

      {/* Features Section */}
      <section className="w-[80%] mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 text-center">✨ Features</h2>
        <div className="mt-6 flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          {/* Feature 1 */}
          <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <span className="text-3xl">📝</span>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">Simple Interface</h3>
              <p className="text-gray-600 text-md">Easy to use, even for beginners.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <span className="text-3xl">🗂</span>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">Efficient Organization</h3>
              <p className="text-gray-600 text-md">Keep your notes neatly categorized.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <span className="text-3xl">🚀</span>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900">Quick Access</h3>
              <p className="text-gray-600 text-md">Retrieve your notes anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
