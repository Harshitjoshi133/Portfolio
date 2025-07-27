import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <motion.h2 
            className="font-montserrat text-2xl md:text-3xl text-dark mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            HI THERE, I'M Harshit Joshi
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Full Stack Developer | MERN | Spring Boot | FastAPI
          </motion.p>
        </div>

        <div className="relative">
          {/* Main hero content with image and overlaid text */}
          <div className="relative overflow-hidden bg-white rounded-lg shadow-xl">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img 
                  className="w-full h-auto md:h-[500px]" 
                  src="/images/pp.jpg" 
                  alt="Portrait of Harshit Joshi, Frontend Developer"
                  style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-white bg-opacity-20"></div>
              </div>
              
              {/* Overlaid text on image */}
              <div className="absolute inset-0 flex items-center justify-start p-8 lg:p-16">
                <motion.h1 
                  className="font-montserrat font-extrabold text-6xl md:text-7xl lg:text-9xl text-primary leading-tight z-10"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  FULL <span className="text-stroke">STACK</span><br />
                  DEVELOPER<span className="text-primary">&lt;/&gt;</span>
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <motion.p 
            className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
           Crafting Scalable Web Experiences with Modern Technologies
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#works"
              className="border-2 border-primary text-primary px-6 py-3 rounded font-medium hover:bg-primary hover:text-white transition duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW MY WORK
            </motion.a>
            <motion.a
              href="#contact"
              className="border-2 border-primary text-primary px-6 py-3 rounded font-medium hover:bg-primary hover:text-white transition duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT ME
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
