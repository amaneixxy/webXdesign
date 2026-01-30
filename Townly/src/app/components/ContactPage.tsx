import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Star } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Outstanding work on our kitchen remodel! The team was professional, on time, and the quality exceeded our expectations. Highly recommend!',
      project: 'Kitchen Remodeling',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'We are thrilled with our new bathroom. The attention to detail and craftsmanship is exceptional. Thank you for making our vision a reality!',
      project: 'Bathroom Renovation',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Professional from start to finish. They transformed our outdated living room into a modern, beautiful space. Could not be happier!',
      project: 'Interior Design',
    },
    {
      name: 'David Thompson',
      rating: 5,
      text: 'The team did an amazing job on our flooring installation. Clean, efficient, and the results are stunning. Great value for the quality!',
      project: 'Flooring Installation',
    },
    {
      name: 'Jennifer Lee',
      rating: 5,
      text: 'Best contractor we have ever worked with! Excellent communication, fair pricing, and beautiful work. Will definitely use them again!',
      project: 'Home Addition',
    },
    {
      name: 'Robert Martinez',
      rating: 5,
      text: 'Fantastic experience from quote to completion. The crew was respectful of our home and cleaned up thoroughly each day. Highly professional!',
      project: 'Full Home Renovation',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300">
              Ready to start your project? Get in touch for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Thank you! We've received your message and will contact you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="flooring">Flooring Installation</option>
                    <option value="painting">Interior Painting</option>
                    <option value="addition">Home Addition</option>
                    <option value="electrical">Electrical Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-sm text-slate-600">
                  * Required fields. We typically respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border-2 border-blue-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                    <a
                      
                      className="text-blue-600 hover:text-blue-700 transition-colors text-xl font-semibold"
                    >
                      (123) 456-7890
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                    <a
                      href="mailto:info@business.com"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      info@business.com
                    </a>
                    <p className="text-sm text-slate-600 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      +1 (123) 456-7890
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Chat with us instantly</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Visit Our Showroom</h3>
                    <p className="text-slate-600">
                      123 Business Street, Suite 100<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Schedule a Free Consultation</h3>
                <p className="mb-6">
                  Get expert advice and a detailed quote for your project at no cost or obligation.
                </p>
                <a
                  
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Call to Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600">
              Real reviews from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-3xl font-extrabold">4.9/5.0</div>
                  <div className="flex items-center gap-1 justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                </div>
                <div className="text-left border-l border-blue-400 pl-4">
                  <div className="text-lg font-semibold">Average Rating</div>
                  <div className="text-sm text-blue-100">Based on 250+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do you offer free estimates?',
                a: 'Yes! We provide free, no-obligation estimates for all our services. Contact us to schedule a consultation.',
              },
              {
                q: 'Are you licensed and insured?',
                a: 'Absolutely. We are fully licensed, bonded, and insured to protect you and your property.',
              },
              {
                q: 'What is your typical project timeline?',
                a: 'Timelines vary by project size and scope. Most kitchen remodels take 4-6 weeks, while bathroom renovations typically take 2-3 weeks. We provide detailed timelines during consultation.',
              },
              {
                q: 'Do you offer financing options?',
                a: 'Yes, we work with several financing partners to help make your project affordable. Ask us about available options.',
              },
              {
                q: 'What areas do you serve?',
                a: 'We serve the greater metropolitan area and surrounding suburbs. Contact us to confirm we serve your location.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
