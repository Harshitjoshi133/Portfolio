import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Daksh Khosla",
    position: "Client",
    image: "https://media.licdn.com/dms/image/D5603AQH29ZJ7Q4ZJ7A/profile-displayphoto-shrink_400_400/0/1718864327549?e=1727308800&v=beta&t=jR9aYl2Q2R9lY2Q2R9lY2Q2R9lY2Q2R9lY2Q2R9lY",
    quote: "Working with Harshit was a seamless experience. His problem-solving skills and dedication to our project truly stood out. A reliable and driven developer!"
  },
  {
    name: "Vaibhav Bhatt",
    position: "Client",
    image: "https://media.licdn.com/dms/image/D5603AQH29ZJ7Q4ZJ7A/profile-displayphoto-shrink_400_400/0/1718864327549?e=1727308800&v=beta&t=jR9aYl2Q2R9lY2Q2R9lY2Q2R9lY2Q2R9lY2Q2R9lY",
    quote: "Harshit impressed me with his professionalism and commitment. He quickly understood our needs and delivered high-quality results ahead of time. Highly recommended!"
  }
  // {
  //   name: "Aman Bassi",
  //   position: "Client",
  //   image: "https://media.licdn.com/dms/image/D5603AQH29ZJ7Q4ZJ7A/profile-displayphoto-shrink_400_400/0/1718864327549?e=1727308800&v=beta&t=jR9aYl2Q2R9lY2Q2R9lY2Q2R9lY2Q2R9lY2Q2R9lY",
  //   quote: "Harshit's ability to break down complex challenges and provide simple, efficient solutions is what makes him a standout developer. I look forward to working with him again."
  // }
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <blockquote className="text-gray-700 italic border-l-4 border-primary pl-4">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
