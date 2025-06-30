import React from 'react';

const ExhibitorRegistrationForm = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-12 lg:px-24">

      
      {/* Heading Section */}
      <div className="text-center space-y-2 mb-6">
        <h1 className="heading mb-10">Exhibitor Space Registration Form</h1>
        <p className="text-gray-700 text-[22px]">
          Exhibition Date & Time: <span className="text-green-600 font-medium">October 3rd–4rd, 2025, 10:00 AM to 6:00 PM</span><br />
          Exhibition Venue: <span className="text-green-600 font-medium">Bombay Exhibition Centre NESCO, Goregaon, Mumbai, Maharashtra 400063</span>
        </p>
      </div>

      {/* Image Banner */}
      <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden mb-8 shadow-md z-10">
        <img
          src="/images/space-exhibitor.jpg" // Replace with your actual path
          alt="Exhibition Banner"
          className="w-full object-cover h-[300px]"
        />
      </div>

      {/* Form Section */}
      <div class=" !mt-[100px] w-full bg-[linear-gradient(to_bottom,_white_10%,_white_25%,_gray-100_100%)]">
      {/* <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-transparent via-white to-white z-10"></div> */}
        <h2 className="text-2xl font-bold mb-4 text-center">Exhibitor Registration Form</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input Fields */}
          <input type="text" placeholder="Contact Person" className="inputStyle" />
          <input type="text" placeholder="Designation" className="inputStyle" />
          <input type="text" placeholder="Company" className="inputStyle" />
          <input type="text" placeholder="Phone Number" className="inputStyle" />
          <input type="email" placeholder="Email ID" className="inputStyle" />
          <input type="text" placeholder="Company Address" className="inputStyle" />
          <input type="text" placeholder="City" className="inputStyle" />
          <input type="text" placeholder="State" className="inputStyle" />
          <input type="text" placeholder="Pincode" className="inputStyle" />
          <input type="url" placeholder="Enter website URL" className="inputStyle" />
          <input type="text" placeholder="GST No." className="inputStyle" />
          <input type="text" placeholder="Other TAX (if you want add)" className="inputStyle" />

          {/* Full Width */}
          <input type="text" placeholder="Stall Fascia Name (In Capital Letters)" className="input col-span-1 md:col-span-2" />

          {/* Checkboxes */}
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Bare Space</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Shell Space</label>
          </div>

          {/* Space Size */}
          <input type="text" placeholder="W..." className="inputStyle" />
          <input type="text" placeholder="L..." className="inputStyle" />
          <input type="text" placeholder="Stall No." className="inputStyle" />
          <input type="text" placeholder="Stall Number" className="inputStyle" />
          <input type="text" placeholder="Charges" className="inputStyle" />

          {/* Grand Total */}
          <div className="col-span-1 md:col-span-2 flex justify-between items-center mt-4">
            <label className="font-semibold">Grand Total</label>
            <span className="text-gray-700 font-bold">0.00</span>
          </div>

          {/* Payment Mode */}
          <div className="col-span-1 md:col-span-2 mt-4 space-x-4">
            <label className="font-semibold">Payment Mode:</label>
            <label><input type="checkbox" /> NEFT</label>
            <label><input type="checkbox" /> RTGS</label>
            <label><input type="checkbox" /> UPI</label>
            <label><input type="checkbox" /> Cheque</label>
          </div>

          {/* Upload Logo */}
          <div className="mt-4">
            <label className="block mb-1 font-medium">Upload your business logo:</label>
            <input type="file" className='inputStyle' accept=".ai,.png,.jpg,.jpeg,.svg,.pdf,.cdr" />
          </div>

          {/* Agreement Checkboxes */}
          <div className="col-span-1 md:col-span-2 mt-4 space-y-2">
            <label><input type="checkbox" className="mr-2" /> I agree to receive communications from PharmaEx and its partners.</label><br />
            <label><input type="checkbox" className="mr-2" /> I accept the terms and conditions.</label>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 flex justify-between items-center mt-6">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label>I'm not a robot</label>
            </div>
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExhibitorRegistrationForm;
