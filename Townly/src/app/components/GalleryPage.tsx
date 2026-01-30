import { useState } from 'react';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: 'Modern Kitchen Renovation',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1609280069678-ab9ef26a0b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVtb2RlbHxlbnwxfHx8fDE3Njk3NjI0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Luxury Bathroom',
      category: 'Bathroom',
      image: 'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbm92YXRpb24lMjBsdXh1cnl8ZW58MXx8fHwxNzY5Njg5MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Hardwood Flooring',
      category: 'Flooring',
      image: 'https://images.unsplash.com/photo-1693948568453-a3564f179a84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vcmluZyUyMGluc3RhbGxhdGlvbiUyMGhhcmR3b29kfGVufDF8fHx8MTc2OTY5NDU0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Interior Transformation',
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1738817628138-b794ed944ed5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBob21lJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2OTc2MjQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Modern Living Room',
      category: 'Living Space',
      image: 'https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY5NzYyNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Outdoor Deck',
      category: 'Outdoor',
      image: 'https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZGVjayUyMHBhdGlvJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3Njk3NjI2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Professional Painting',
      category: 'Painting',
      image: 'https://images.unsplash.com/photo-1513612027093-46da490bbd5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcGFpbnRpbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc2OTY4MDM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Custom Closet',
      category: 'Organization',
      image: 'https://images.unsplash.com/photo-1594883422096-c7f0b81e0133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBjbG9zZXQlMjBvcmdhbml6YXRpb258ZW58MXx8fHwxNzY5NzYyNjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Electrical Upgrades',
      category: 'Electrical',
      image: 'https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwd29yayUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3Njk3NjI1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Portfolio</h1>
            <p className="text-xl text-slate-300">
              Browse our collection of completed projects and see the quality of our work
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm font-semibold text-blue-300 mb-1">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              See the Transformation
            </h2>
            <p className="text-xl text-slate-600">
              Real projects, real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="bg-slate-900 text-white px-4 py-2 rounded-t-lg text-center font-bold">
                BEFORE
              </div>
              <div className="rounded-b-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1513612027093-46da490bbd5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcGFpbnRpbmclMjBzZXJ2aWNlfGVufDF8fHx8MTc2OTY4MDM5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Before renovation"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
            <div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg text-center font-bold">
                AFTER
              </div>
              <div className="rounded-b-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1609280069678-ab9ef26a0b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVtb2RlbHxlbnwxfHx8fDE3Njk3NjI0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="After renovation"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 mb-6">
              Every project is an opportunity to transform spaces and exceed expectations
            </p>
            <a
              
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </section>

      {/* Modal for fullscreen image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-xl hover:text-blue-300 transition-colors"
            >
              Close ✕
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
