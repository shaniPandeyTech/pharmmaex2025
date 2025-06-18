export default function PrivacyPolicytext() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>
            At PharmmaEx, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            and safeguard your personal information when you visit our website or interact with our services.
          </p>
          <p className="mt-2">By using our website, you agree to the terms of this Privacy Policy.</p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <p className="mb-2">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact
              details provided via forms (e.g., contact, registration, or downloads).
            </li>
            <li>
              <strong>Event Information:</strong> Details you submit during exhibitor registration, visitor registration,
              or inquiry about sponsorships or booths.
            </li>
            <li>
              <strong>Automatically Collected Data:</strong> Device information, browser type, IP address, pages visited,
              and browsing behavior using cookies and analytics tools (e.g., Google Analytics).
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
          <p className="mb-2">We may use your data for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>To respond to your inquiries or requests</li>
            <li>To process registrations and send confirmations</li>
            <li>To send updates about the exhibition or future events</li>
            <li>To improve our website and user experience</li>
            <li>
              To send marketing communications, newsletters, or promotional materials (you can opt out anytime)
            </li>
          </ul>
        </section>
      </div>
    );
  }
  