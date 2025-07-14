import { motion } from "framer-motion";
import { useState } from "react";
const projectsData = [
  {
    id: 1,
    title: "Chat Application",
    description: "Real Time Chatting application",
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    overlayTitle: "Chat Application",
    overlayDescription: "A Real Time Chatting application with authentication and real time messaging.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
  },
  {
    id: 2,
    title: "HouseHold Management System",
    description: "HouseHold Management System",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    overlayTitle: "HouseHold Management System",
    overlayDescription: "A HouseHold Management System with role based access control, task management, and notification system.",
    technologies: ["Vue.js", "Flask", "Redis", "SQLite","Chart.js"],
  },
  {
    id: 3,
    title: "TRADITIONAL INSIGHTS",
    description: "Data visualization platform",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    overlayTitle: "Analytics Dashboard",
    overlayDescription: "An interactive dashboard for visualizing complex data with customizable widgets.",
    technologies: ["React", "D3.js", "Node.js"],
  },
   {
    id: 4,
    title: "TRADITIONAL INSIGHTS",
    description: "Data visualization platform",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    overlayTitle: "Analytics Dashboard",
    overlayDescription: "An interactive dashboard for visualizing complex data with customizable widgets.",
    technologies: ["React", "D3.js", "Node.js"],
  }
];


const Works = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine how many projects to show
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img 
                  className="w-full h-64 object-cover" 
                  src={project.imageUrl} 
                  alt={project.title} 
                />
                <div className="project-overlay absolute inset-0 bg-primary bg-opacity-80 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-6">
                  <h4 className="text-white font-bold text-xl mb-2">{project.overlayTitle}</h4>
                  <p className="text-white text-center mb-4">{project.overlayDescription}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-white text-primary text-xs px-2 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="text-primary font-medium hover:underline flex items-center">
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "VIEW LESS PROJECTS" : "VIEW ALL PROJECTS"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Works;
