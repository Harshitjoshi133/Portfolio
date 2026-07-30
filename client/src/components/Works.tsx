import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Chat Application",
    description: "Real Time Chatting application",
    imageUrl: "/images/chat.png",
    overlayTitle: "Chat Application",
    overlayDescription: "A real-time chat application with authentication, MongoDB-based storage, and instant messaging using Socket.io.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveLink: "https://chat-app-tan-six-70.vercel.app/",
    githubLink: "https://github.com/Harshitjoshi133/ChatApp",
  },
  {
    id: 2,
    title: "Move with Aman - SaaS Platform",
    description: "Fitness & Wellness Platform",
    imageUrl: "/images/mwa.png",
    overlayTitle: "Move with Aman",
    overlayDescription: "A subscription-based SaaS fitness platform offering workout plans, personalized coaching, and video content.",
    technologies: ["Next.js", "Stripe", "Firebase", "Tailwind CSS"],
    liveLink: "https://mwa-frontend.onrender.com/",
    githubLink: "#",
  },
  {
    id: 3,
    title: "HouseHold Management System",
    description: "Manage daily household activities",
    imageUrl: "/images/household.png",
    overlayTitle: "HouseHold Management",
    overlayDescription: "Household task manager with role-based access control, reminders, and analytics dashboard.",
    technologies: ["Vue.js", "Flask", "Redis", "SQLite", "Chart.js"],
    liveLink: "https://house-hold-one.vercel.app/",
    githubLink: "https://github.com/Harshitjoshi133/HouseHold",
  },
  {
    id: 4,
    title: "Firebase Contact App",
    description: "Contact management application",
    imageUrl: "/images/contact.png",
    overlayTitle: "Firebase Contact App",
    overlayDescription: "A CRUD contact manager app using Firebase Realtime Database and Authentication.",
    technologies: ["React", "Firebase Auth", "Firebase Realtime DB", "Bootstrap"],
    liveLink: "https://contact-app-two-theta.vercel.app/",
    githubLink: "https://github.com/Harshitjoshi133/Contact-App",
  },
  {
    id: 6,
    title: "Batch Marks Management System",
    description: "Academic marking & reports",
    imageUrl: "/images/batch-marks.png",
    overlayTitle: "Marks Management System",
    overlayDescription: "Student marking system with role-based access, branch allocation, performance tracking, and report generation.",
    technologies: ["FastAPI", "Firebase", "HTML", "CSS", "JavaScript"],
    liveLink: "https://batch-marks-system.vercel.app/",
    githubLink: "#",
  }
];


const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-extrabold text-5xl md:text-6xl lg:text-7xl text-primary mb-4">
            WORKS
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A selection of my recent projects that showcase my expertise in front-end development, UI/UX design, and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative group">
                  <img 
                    className="w-full h-64 object-cover" 
                    src={project.imageUrl} 
                    alt={project.title} 
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 p-6">
                    <h4 className="text-white font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.overlayTitle}</h4>
                    <p className="text-white text-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{project.overlayDescription}</p>
                    <div className="flex flex-wrap gap-2 justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-white text-primary text-xs px-2 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between">
                    {project.liveLink=="#"?"":<a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline flex items-center">
                      Live Link
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>}
                    
                    {project.githubLink=="#"?"":<a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline flex items-center">
                      GitHub
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: 0 }}
            initial={{ y: 10 }}
          >
            {showAll ? "VIEW LESS PROJECTS" : "VIEW ALL PROJECTS"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Works;
