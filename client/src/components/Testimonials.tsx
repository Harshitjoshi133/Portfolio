import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jacob Williams",
    position: "Product Manager, TechCorp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    quote: "Harshit Joshi delivered our project ahead of schedule with exceptional attention to detail. His ability to translate our vision into a functioning website while adding valuable insights made the entire process smooth and successful."
  },
  {
    name: "Lucas Alexander",
    position: "Creative Director, DesignHub",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    quote: "Working with Harshit Joshi was a revelation. His technical expertise combined with an eye for design resulted in a product that exceeded our expectations. He's responsive, proactive, and consistently delivers high-quality work."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-extrabold text-5xl md:text-6xl text-primary mb-4">
            WHAT PEOPLE SAYS ABOUT ME
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Feedback from clients and collaborators about my work ethic, development skills, and project delivery.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                  src={testimonial.image} 
                  alt={`${testimonial.name}'s portrait`} 
                />
                <div>
                  <h4 className="font-montserrat font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
