import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function LocationPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Location</h1>
            <p className="text-xl text-slate-300">
              Visit our showroom or give us a call to discuss your project
            </p>
          </div>
        </div>
      </section>

      {/* Map and Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">
                      123 Business Street<br />
                      Suite 100<br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                    <a
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@business.com"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      info@business.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Business Hours</h3>
                    <div className="text-slate-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                Find Us
              </h2>
              <div className="rounded-xl overflow-hidden shadow-xl h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6174339699834!2d-73.98823492346678!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1705321963943!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Business Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Service Area
            </h2>
            <p className="text-xl text-slate-600">
              We proudly serve the following areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Downtown',
              'Northside',
              'Eastside',
              'Westside',
              'Southside',
              'Suburbs North',
              'Suburbs East',
              'Suburbs West',
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="font-semibold text-slate-900">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              Don't see your area listed? Contact us to see if we can help!
            </p>
            <a
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call to Inquire
            </a>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Directions to Our Showroom
            </h2>
            <p className="text-xl text-slate-600">
              Easy to find with convenient parking available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">From North</h3>
              <p className="text-slate-600">
                Take Highway 101 South to Exit 42. Turn right onto Main Street, then left on Business Street. We're on the right in Suite 100.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">From South</h3>
              <p className="text-slate-600">
                Take Highway 101 North to Exit 42. Turn left onto Main Street, then left on Business Street. We're on the right in Suite 100.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Parking</h3>
              <p className="text-slate-600">
                Free parking available in our lot at the rear of the building. Accessible parking spaces available near the main entrance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
