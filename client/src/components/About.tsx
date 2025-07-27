import { motion } from "framer-motion";
import { 
  Code,
  Server,
  PenTool,
  Zap,
} from "lucide-react";

const skillsData = [
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: "Frontend Dev",
    description: "Creating responsive, accessible web interfaces with modern frameworks."
  },
  {
    icon: <Server className="w-6 h-6 text-white" />,
    title: "Backend Dev",
    description: "Building scalable and efficient server-side applications and APIs."
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user experiences."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Performance",
    description: "Optimizing website speed and responsiveness for all devices."
  }
];

const illustrationImages = [
  {
    src: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    alt: "Web development illustration",
    className: "w-full h-auto rounded-lg shadow-lg"
  },
  {
    src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    alt: "UI/UX design process illustration",
    className: "w-full h-auto rounded-lg shadow-lg mt-8"
  },
  {
    src: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    alt: "Mobile app development illustration",
    className: "w-full h-auto rounded-lg shadow-lg"
  },
  {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    alt: "Web development tools illustration",
    className: "w-full h-auto rounded-lg shadow-lg mt-8"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-extrabold text-5xl md:text-6xl text-primary mb-8">
              PASSIONATE<br />ABOUT<br />DEVELOPMENT
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              I specialize in building backend systems, scalable APIs, and intuitive UIs. I love turning ideas into production-grade apps.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              My approach combines technical expertise with creative problem-solving to deliver solutions that exceed client expectations while prioritizing accessibility and performance.
            </p>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-secondary p-6 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <h3 className="font-montserrat font-bold text-lg">{skill.title}</h3>
                  </div>
                  <p className="text-gray-700">{skill.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              href="#contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded font-medium hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LET'S WORK TOGETHER
            </motion.a>
          </motion.div>
          
          {/* 3D Illustrations */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {illustrationImages.map((image, index) => (
              <motion.img
                key={index}
                className={image.className}
                src={image.src}
                alt={image.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
