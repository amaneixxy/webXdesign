import { CheckCircle, DollarSign } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      title: 'Kitchen Remodeling',
      image: 'https://images.unsplash.com/photo-1609280069678-ab9ef26a0b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVtb2RlbHxlbnwxfHx8fDE3Njk3NjI0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Transform your kitchen into a beautiful and functional space that enhances your home\'s value.',
      features: [
        'Custom cabinetry design',
        'Countertop installation (granite, quartz, marble)',
        'Modern appliance integration',
        'Lighting and electrical upgrades',
        'Flooring replacement',
      ],
      priceRange: 'Starting from Rs 15,000',
    },
    {
      title: 'Bathroom Renovation',
      image: 'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbm92YXRpb24lMjBsdXh1cnl8ZW58MXx8fHwxNzY5Njg5MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Create your perfect bathroom sanctuary with luxury finishes and smart design.',
      features: [
        'Walk-in shower & bathtub installation',
        'Vanity and sink upgrades',
        'Tile work and waterproofing',
        'Plumbing fixture replacement',
        'Ventilation and lighting',
      ],
      priceRange: 'Starting from Rs 8,000',
    },
    {
      title: 'Flooring Installation',
      image: 'https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vcmluZyUyMGluc3RhbGxhdGlvbiUyMGhhcmR3b29kfGVufDF8fHx8MTc2OTY5NDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Professional installation of hardwood, laminate, tile, and luxury vinyl flooring.',
      features: [
        'Hardwood floor installation',
        'Laminate and vinyl plank',
        'Tile and stone flooring',
        'Floor refinishing',
        'Subfloor preparation',
      ],
      priceRange: 'Starting from Rs 3,500',
    },
    {
      title: 'Interior Painting',
      image: 'https://images.unsplash.com/photo-1513612027093-46da490bbd5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcGFpbnRpbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc2OTY4MDM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Expert painting services to refresh and revitalize any room in your home.',
      features: [
        'Interior wall painting',
        'Ceiling painting',
        'Trim and baseboard work',
        'Color consultation',
        'Premium paint brands',
      ],
      priceRange: 'Starting from Rs 1,200',
    },
    {
      title: 'Home Additions',
      image: 'https://images.unsplash.com/photo-1738817628138-b794ed944ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2OTc2MjQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Expand your living space with custom room additions and extensions.',
      features: [
        'Room additions',
        'Second story additions',
        'Sunroom construction',
        'Garage conversions',
        'Full architectural planning',
      ],
      priceRange: 'Starting from Rs 25,000',
    },
    {
      title: 'Electrical Services',
      image: 'https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd29yayUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3Njk3NjI1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Licensed electrical work for all your home upgrade and renovation needs.',
      features: [
        'Panel upgrades',
        'Outlet and switch installation',
        'Lighting fixture installation',
        'Smart home integration',
        'Code compliance updates',
      ],
      priceRange: 'Starting from Rs 500',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">
              Comprehensive renovation solutions for every part of your home
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-blue-600">{service.priceRange}</span>
                  </div>

                  <div className="mt-6">
                    <a
                      
                      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Get a Free Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600">
              Simple steps to your dream renovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', description: 'Discuss your vision and requirements' },
              { step: '2', title: 'Design', description: 'Create detailed plans and 3D renderings' },
              { step: '3', title: 'Construction', description: 'Expert execution with quality materials' },
              { step: '4', title: 'Completion', description: 'Final walkthrough and satisfaction guarantee' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get in touch for a free, no-obligation consultation and quote
          </p>
          <a
            
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Call (123) 456-7890
          </a>
        </div>
      </section>
    </div>
  );
}
