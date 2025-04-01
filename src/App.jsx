// import React, { useState, useEffect } from 'react';
// import { 
//   Github, 
//   Linkedin, 
//   Mail, 
//   ExternalLink, 
//   Code2, 
//   User2, 
//   FileText, 
//   MessageSquare, 
//   Moon,
//   Sun,
//   Download,
//   Briefcase,
//   GraduationCap,
//   Award
// } from 'lucide-react';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const skills = [
//     { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS"] },
//     { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
//     { category: "Tools", items: ["Git", "VS Code","Postman"] },
//     { category: "Other", items: ["Responsive Design", "SEO", "Web Performance", "UI/UX"] }
//   ];

//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
//       image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=500",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//       github: "#",
//       demo: "#"
//     },
//     {
//       title: "Task Manager",
//       description: "Smart task management app with prioritization and scheduling features.",
//       image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=500",
//       technologies: ["React", "Firebase", "Material UI", "Redux"],
//       github: "#",
//       demo: "#"
//     },
//     {
//       title: "Social Media Dashboard",
//       description: "Comprehensive analytics dashboard for social media management and reporting.",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500",
//       technologies: ["React", "Chart.js", "Firebase", "Bootstrap"],
//       github: "#",
//       demo: "#"
//     },
//     {
//       title: "Real-time Chat App",
//       description: "Feature-rich chat application with real-time messaging and file sharing capabilities.",
//       image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=500",
//       technologies: ["React", "Socket.io", "Express", "MongoDB"],
//       github: "#",
//       demo: "#"
//     }
//   ];

//   return (
//     <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
//       {/* Navigation */}
//       <nav className={`fixed w-full ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 shadow-sm`}>
//         <div className="max-w-6xl mx-auto px-4 py-3">
//           <div className="flex justify-between items-center">
//             <a href="#" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>JD</a>
//             <div className="flex items-center gap-6">
//               <div className="hidden md:flex gap-6">
//                 <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
//                 <a href="#projects" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Projects</a>
//                 <a href="#resume" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Resume</a>
//                 <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
//               </div>
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-gray-100 text-gray-600'}`}
//               >
//                 {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="flex-1">
//               <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
//                 Hi, I'm John Doe
//                 <br />
//                 <span className="text-blue-600">Full Stack Developer</span>
//               </h1>
//               <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
//                 I build exceptional and accessible digital experiences for the web.
//               </p>
//               <div className="flex gap-4">
//                 <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
//                   Hire Me
//                 </a>
//                 <a href="#projects" className={`border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} px-6 py-3 rounded-lg transition`}>
//                   View my work
//                 </a>
//               </div>
//             </div>
//             <div className="flex-1">
//               <img 
//                 src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&h=600" 
//                 alt="Profile" 
//                 className="rounded-full w-72 h-72 object-cover mx-auto border-8 border-white shadow-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} px-4`}>
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center gap-2 mb-8">
//             <User2 className="w-6 h-6 text-blue-600" />
//             <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
//                 With over 5 years of experience in web development, I specialize in building modern web applications using React and Node.js. I'm passionate about creating intuitive user interfaces and writing clean, maintainable code.
//               </p>
//               <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8`}>
//                 When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts.
//               </p>
//               <div className="flex items-center gap-2 mb-4">
//                 <GraduationCap className="w-5 h-5 text-blue-600" />
//                 <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
//               </div>
//               <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg mb-4`}>
//                 <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Bachelor of Computer Science</h4>
//                 <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Stanford University • 2018-2022</p>
//               </div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Award className="w-5 h-5 text-blue-600" />
//                 <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Certifications</h3>
//               </div>
//               <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
//                 <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
//                   <li>Meta Frontend Developer Certificate</li>
//                   <li>AWS Cloud Practitioner</li>
//                   <li>MongoDB Developer Certificate</li>
//                 </ul>
//               </div>
//             </div>
//             <div>
//               <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Technical Skills</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 {skills.map((skillGroup) => (
//                   <div key={skillGroup.category} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
//                     <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{skillGroup.category}</h4>
//                     <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                       {skillGroup.items.map((item) => (
//                         <li key={item}>{item}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} px-4`}>
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center gap-2 mb-8">
//             <Code2 className="w-6 h-6 text-blue-600" />
//             <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md overflow-hidden`}>
//                 <img 
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{project.title}</h3>
//                   <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span 
//                         key={techIndex}
//                         className={`text-sm px-3 py-1 rounded-full ${
//                           darkMode 
//                             ? 'bg-gray-700 text-gray-300' 
//                             : 'bg-gray-100 text-gray-600'
//                         }`}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex gap-4">
//                     <a href={project.github} className={`flex items-center gap-1 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
//                       <Github className="w-4 h-4" />
//                       Code
//                     </a>
//                     <a href={project.demo} className={`flex items-center gap-1 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
//                       <ExternalLink className="w-4 h-4" />
//                       Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Resume Section */}
//       <section id="resume" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} px-4`}>
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center gap-2 mb-8">
//             <FileText className="w-6 h-6 text-blue-600" />
//             <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Resume</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                 <Briefcase className="w-5 h-5 text-blue-600" />
//                 <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Work Experience</h3>
//               </div>
//               <div className="space-y-6">
//                 {[
//                   {
//                     title: "Senior Frontend Developer",
//                     company: "Tech Corp",
//                     period: "2022 - Present",
//                     description: "Led development of enterprise React applications, mentored junior developers, and implemented modern frontend practices."
//                   },
//                   {
//                     title: "Frontend Developer",
//                     company: "StartupX",
//                     period: "2020 - 2022",
//                     description: "Developed and maintained multiple client projects using React and modern JavaScript."
//                   }
//                 ].map((job, index) => (
//                   <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
//                     <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{job.title}</h4>
//                     <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>{job.company} • {job.period}</p>
//                     <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{job.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex flex-col justify-between">
//               <div>
//                 <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Download Resume</h3>
//                 <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
//                   Get a complete overview of my experience, skills, and qualifications.
//                 </p>
//                 <a 
//                   href="#" 
//                   className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   <Download className="w-5 h-5" />
//                   Download PDF
//                 </a>
//               </div>
//               <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg mt-8`}>
//                 <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Additional Skills</h4>
//                 <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
//                   <li>• Project Management</li>
//                   <li>• Team Leadership</li>
//                   <li>• Technical Writing</li>
//                   <li>• Problem Solving</li>
//                   <li>• Code Review</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} px-4`}>
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center gap-2 mb-8">
//             <MessageSquare className="w-6 h-6 text-blue-600" />
//             <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
//                 I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
//               </p>
//               <div className="flex flex-col gap-4">
//                 <a href="mailto:john@example.com" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
//                   <Mail className="w-5 h-5" />
//                   john@example.com
//                 </a>
//                 <a href="https://github.com" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
//                   <Github className="w-5 h-5" />
//                   github.com/johndoe
//                 </a>
//                 <a href="https://linkedin.com" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
//                   <Linkedin className="w-5 h-5" />
//                   linkedin.com/in/johndoe
//                 </a>
//               </div>
//             </div>
//             <form className="space-y-4">
//               <div>
//                 <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   className={`w-full px-4 py-2 rounded-lg ${
//                     darkMode 
//                       ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' 
//                       : 'border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
//                   }`}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className={`w-full px-4 py-2 rounded-lg ${
//                     darkMode 
//                       ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' 
//                       : 'border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
//                   }`}
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Message</label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className={`w-full px-4 py-2 rounded-lg ${
//                     darkMode 
//                       ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500' 
//                       : 'border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
//                   }`}
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-8 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-xl font-bold mb-4">John Doe</h3>
//               <p className="text-gray-400">Full Stack Developer building exceptional digital experiences.</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//               <div className="flex flex-col gap-2">
//                 <a href="#about" className="text-gray-400 hover:text-white">About</a>
//                 <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
//                 <a href="#resume" className="text-gray-400 hover:text-white">Resume</a>
//                 <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-bold mb-4">Connect</h3>
//               <div className="flex gap-4">
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <Github className="w-6 h-6" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <Linkedin className="w-6 h-6" />
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <Mail className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//             <p className="text-gray-400">© 2025 John Doe. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;













import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  User2, 
  FileText, 
  MessageSquare, 
  Moon,
  Sun,
  Download,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    { category: "Technical", items: ["React", "Redux", "Node.js", "Express"] },
    { category: "Databases", items: ["MongoDB", "MySQL"] },
    { category: "Tools", items: ["Git", "GitHub", "Scikit-learn"] },
    { category: "Other", items: ["Machine Learning", "Problme Solving Skills"] }
  ];

  const projects = [
    {
      title: "Text-to-Image Generation Website",
      description: "Engineered a full-stack AI image generation web application using MERN stack .",
      image: "/p1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "ClipDrop API"],
      github: "https://github.com/Harsha120903/Text-Image-Generation-AI-website",
    },
    {
      title: "React-Based Post Management",
      description: "Designed a React application with routing to manage posts using DummyJSON API integration.",
      image: "/p2.jpg",
      technologies: ["React", "JavaScript", "DummyJSON API"],
      github: "https://github.com/Harsha120903/Add-View-Post-React-",
    },
    {
      title: "Heart Failure Prediction",
      description: "Built a ML-based heart failure prediction model with 95% accuracy, deployed using Streamlit.",
      image: "/p3.jpg",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Random Forest"],
      github: "https://github.com/Harsha120903/heart_failure_prediction",
      demo: "https://heartfailureprediction-de2wmdtb7cz6zdcfbewx8j.streamlit.app/"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 shadow-sm`}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>HR</a>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6">
                <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
                <a href="#projects" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Projects</a>
                <a href="#resume" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Resume</a>
                <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-500' : 'bg-gray-100 text-gray-600'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Hi, I'm Harshavardhan
                <br />
                <span className="text-blue-600">Full-Stack Enthusiast</span>
              </h1>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                B.Tech Computer Science student specializing in Data Science at BVRIT
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Contact Me
                </a>
                <a href="#projects" className={`border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-300 hover:border-gray-400'} px-6 py-3 rounded-lg transition`}>
                  View Projects
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&h=600" 
                alt="Profile" 
                className="rounded-full w-72 h-72 object-cover mx-auto border-8 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} px-4`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User2 className="w-6 h-6 text-blue-600" />
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                I'm a passionate Computer Science student specializing in Data Science, currently pursuing my B.Tech at BVRIT with a CGPA of 9.21. I'm passionate in building full-stack applications and machine learning models.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8`}>
                My interests lie in Machine Learning and web development. I actively participate in coding events and contribute to technical communities at BVRIT.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
              </div>
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg mb-4`}>
                <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>B.Tech - Computer Science (Data Science)</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>BVRIT • Nov 2022 - Present • CGPA: 9.21</p>
              </div>
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg mb-4`}>
                <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Intermediate</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Narayana Junior College • 98%</p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-600" />
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Certifications</h3>
              </div>
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>AI-ML Virtual Internship (AICTE)</li>
                  <li>The Joy of Computing with Python</li>
                  <li>Programming in Java</li>
                  <li>Problem Solving Through Programming in C</li>
                  <li>Soft Skills</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Skills</h3>
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                    <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{skillGroup.category}</h4>
                    <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {skillGroup.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} px-4`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="w-6 h-6 text-blue-600" />
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-md overflow-hidden`}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`text-sm px-3 py-1 rounded-full ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className={`flex items-center gap-1 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a href={project.demo} className={`flex items-center gap-1 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}` }>
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} px-4`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Resume</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Experience</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "AI-ML Virtual Internship",
                    company: "AICTE Certified",
                    period: "Sep-Nov 2023",
                    description: "Gained hands-on experience in AI and ML concepts, data preprocessing, feature engineering, and model deployment."
                  }
                ].map((job, index) => (
                  <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
                    <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{job.title}</h4>
                    <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>{job.company} • {job.period}</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{job.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Academic Achievements</h3>
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
                  <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                    <li>Runner-up in Code Breakers (Promethean Event-2022)</li>
                    <li>Participation in BVRIT-MUN (DISEC)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Download Resume</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  Detailed overview of my academic journey, projects, and technical skills.
                </p>
                <a 
                  href="/Harsha_Resume.pdf" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </div>
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg mt-8`}>
                <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Extra-Curricular</h4>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>Club Lead, English Readers Club (2023-2024)</li>
                  <li>IEEE Department Coordinator (2025-Present)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} px-4`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                Interested in collaborating on projects or discussing opportunities? Feel free to reach out!
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:kharsha122231@gmail.com" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Mail className="w-5 h-5" />
                  kharsha122231@gmail.com
                </a>
                <a href="https://github.com/Harsha120903" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/harsha1209/" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">K Harshavardhan Reddy</h3>
              <p className="text-gray-400">Data Science Student & Full Stack Developer</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="flex flex-col gap-2">
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
                <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
                <a href="#resume" className="text-gray-400 hover:text-white">Resume</a>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:kharsha122231@gmail.com" className="text-gray-400 hover:text-white">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 K Harshavardhan Reddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;