// components/VisitorForm.tsx
// import { FaUpload } from "react-icons/fa";

export default function VisitorForm() {
  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 p-4 lg:p-12 max-w-7xl mx-auto">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="/images/vistior-image.jpg"
          alt="Exhibition"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl font-bold mb-2">Welcome to PharmmaEx</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Join the largest pharmaceutical formulation exhibition in Ahmedabad...
        </p>

        <h2 className="text-xl font-semibold mb-4">Visitor Registration Form</h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Row 1 */}
          <input type="text" placeholder="Full name" className="inputStyle" />
          <input type="email" placeholder="Email Address" className="inputStyle" />

          {/* Row 2 */}
          <input type="tel" placeholder="Phone" className="inputStyle" />
          <input type="text" placeholder="Company/Organization" className="inputStyle" />

          {/* Row 3 */}
          <input type="text" placeholder="Designation/Job Title" className="inputStyle" />
          <select className="inputStyle">
            <option>Purpose of Visit</option>
            <option>Business</option>
            <option>Networking</option>
          </select>

          {/* Row 4 */}
          <select className="inputStyle">
            <option>Days Attending</option>
            <option>Day 1</option>
            <option>Day 2</option>
          </select>
          <input type="text" placeholder="City" className="inputStyle" />

          {/* Row 5 - File upload */}
          <div className="col-span-1 sm:col-span-2">
            <label className="flex items-center justify-between inputStyle cursor-pointer">
              <span>Upload Your Business Card / ID Proof (Optional)</span>
              {/* <FaUpload className="text-gray-400" /> */}
              <input type="file" hidden />
            </label>
          </div>

          {/* Checkboxes */}
          <div className="col-span-1 sm:col-span-2 space-y-2 text-sm text-gray-700 mt-2">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              I agree to receive communications from PharmmaEx and its partners.
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              I accept the terms and conditions.
            </label>
          </div>

          {/* CAPTCHA and Submit */}
          <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center  gap-4 mt-4">
           
            <div className="w-full sm:w-auto border rounded-lg px-4 py-3 bg-gray-100 text-gray-500 text-sm">
              [I'm not a robot]
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
