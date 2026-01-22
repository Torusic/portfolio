import React from 'react'

function Contacts() {
  return (
    <section className="min-h-screen bg-blue-50 flex items-center">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full">
        
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
          Contact Me
        </h2>

        <div className="w-20 h-1 bg-blue-500 mb-8"></div>

        <p className="text-gray-600 mb-8 max-w-9xl">
          Feel free to reach out for collaboration, internship opportunities, project discussions, 
          or any inquiries related to software development, mobile applications, or IoT systems. 
          I am always open to connecting and exploring new opportunities.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <p><span className="font-semibold text-blue-600">Email:</span> simon.muchuku@example.com</p>
            <p><span className="font-semibold text-blue-600">Phone:</span> +254 795 629 534</p>
            <p><span className="font-semibold text-blue-600">Location:</span> Nairobi, Kenya</p>
            <p><span className="font-semibold text-blue-600">GitHub:</span><a href="github.com/Torusic">github.com/Torusic</a> </p>
            <p><span className="font-semibold text-blue-600">LinkedIn:</span><a href="https://www.linkedin.com/in/simon-muchuku-75b3082b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlLXZulhBQl6joq46Gl8Btw%3D%3D"> linkedin.com/in/simon-muchuku-75b3082b6</a></p>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input 
                type="text" 
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Email Address</label>
              <input 
                type="email" 
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea 
                rows="4"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contacts
