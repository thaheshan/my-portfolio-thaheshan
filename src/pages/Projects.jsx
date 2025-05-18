import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "VITISCO",

    description: "Developed a machine learning model for real-timeHand Gesture Detection and Convert it into text and voice for Hearing Aid Individuals And give Customized lessons, ML Based Automized Feedback, and Progress Tracking As For My SDGP Project.",

    technologies: ["Python", "TensorFlow", "React Native", "Node.js"],

    link: "https://vitisco.netlify.app/"
  },
  {
    title: "Real-time Movie Review System",
    description: "Integrated a real-time Movie API to dynamically fetch and render movie data, enabling users to explore and review films effortlessly, while focusing on clean layouts, responsive design, and intuitive navigation to enhance user experience.",
    technologies: ["React", "Javascript", "API"],
    link: "https://moviereviewexploreroffocoal.netlify.app/"
  },
  {
    title: "Breast Cancer Predicting Model",
    description: "Developed a Machine Learning-based Predictive Model to estimate breast cancer patient survival by integrating multimodal clinical data, including cancer stage, demographics, and pathological features.Built an Interactive Interface that enables real-time survival predictions with model explainability, aimed at supporting clinical decision-making and enhancing early prognosis, especially in low-resource healthcare settings.",
    technologies: ["Python", "Machine Learning"],
    link: "https://github.com/thaheshan/Breast_Cancer_Prediction_Model"
  },
  {
    title: "EcoShift prototype",
    description: "Built a Ui/Ux design using figma platform for a better eco-friendly system.",
    technologies: ["Figma"],
    link: "https://github.com/thaheshan/ECO-SHIFT"
  },
  {
    title: "VITISCO Prototype",
    description: "Built a Ui/Ux design using figma platform for language learning for deaf individuals.",
    technologies: ["Figma"],
    link: "https://github.com/thaheshan/vitisco_prototype"
  },
  {
    title: "Mentora prototype",
    description: "Built a Ui/Ux design using figma platform for manage user healthy habits.",
    technologies: ["Figma"],
    link: "https://github.com/thaheshan/MENTORA"
  },

  {
    title: "SMART TOUCH PC",
    description: "Developed a React and Node.js-based web application for SmartTouch PC From Our Startup Company, enabling seamless product management, secure checkout, and efficient order tracking with an intuitive user experience.",
    technologies: ["Java Script", "React", "node js", "Express .js"],
    link: "https://smtlap.netlify.app/"
  },
  // Add more projects as needed
];


const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="card p-6 rounded-lg"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-white hover:text-gray-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;