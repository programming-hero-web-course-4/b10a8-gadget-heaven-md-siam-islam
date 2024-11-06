
const Contact = () => {
    return (
        <div>
           <div className="flex justify-center items-center min-h-screen bg-gray-100 my-36 py-6">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white p-10 rounded-lg shadow-lg">
        
        <div className="flex-1">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8">CONTACT US</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Phone</label>
              <input type="tel" placeholder="Your Phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Interest</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Select an interest</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200">Send Message</button>
          </form>
        </div>

        <div className="flex-1 mt-8 md:mt-0 md:ml-10">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Contact Details</h3>
          <p className="text-gray-600">Email: <a href="mdsiamislam663@gmail.com" className="text-purple-500">mdsiamislam663@gmail.com</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+9086861200" className="text-purple-500"> 01951737356 </a></p>

          <div className="mt-6 space-y-4">
            <div>
              <h4 className="text-gray-800 font-semibold">Westfield</h4>
              <p className="text-gray-600">233 North Avenue E.<br /> Westfield, NJ 07090</p>
            </div>
            <div>
              <h4 className="text-gray-800 font-semibold">Summit</h4>
              <p className="text-gray-600">357 Springfield Ave.<br /> Short Hills, NJ 07901</p>
            </div>
            <div>
              <h4 className="text-gray-800 font-semibold">Short Hills Office</h4>
              <p className="text-gray-600">549 Millburn Ave.<br /> Short Hills, NJ 07078</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Contact;