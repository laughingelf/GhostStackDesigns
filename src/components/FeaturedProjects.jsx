import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Lone Star Property Maintenance",
    description:
      "Lone Star Property Maintenance offers expert exterior services across Texas — from pressure washing to fencing and property clean-up. Their one-page website highlights services, builds trust, and makes it easy for customers to reach out.",
    image: "/img/lonestar.png",
    url: "https://lonestarpropertymaintenance.com/",
  },
  {
    name: "Luma SportznFun",
    description:
      "Luma SportznFun brings kids and families together through sports, games, and community events. Their vibrant one-page site highlights programs, promotes upcoming events, and makes it easy for parents to get involved and stay connected.",
    image: "/img/luma.png",
    url: "https://www.sportznfun.com/",
  },
  {
    name: "Reclaim Wellness Support",
    description:
      "Reclaim Wellness Support is a veteran-owned massage practice focused on accessible care for veterans and low-income families. Their custom 5-page site highlights the mission, services, and makes booking simple through a calming, user-friendly design.",
    image: "/img/reclaim.png",
    url: "https://reclaimwellnesssupport.org/",
  },
];

const FeaturedProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="blue-word underline text-5xl uppercase tracking-wide mb-2 header-font"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto header-font"
        >
          Check out a few sites we've built. Each one custom-designed to help our clients grow their business and stand out online.
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex px-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="min-w-full sm:min-w-[80%] mr-8 last:mr-0 bg-gray-200 rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full md:h-72 h-38  w-auto md:object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl text-gray-800 font-semibold mb-2 header-font underlinef">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-4 header-font">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xl gap-2 blue-word hover:underline header-font"
                  >
                    Visit Site <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Prev/Next Buttons */}
        <div className="flex justify-between items-center mt-6 px-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="text-blue-400 hover:text-white transition disabled:opacity-30"
          >
            <ArrowLeft size={32} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="text-blue-400 hover:text-white transition disabled:opacity-30"
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
