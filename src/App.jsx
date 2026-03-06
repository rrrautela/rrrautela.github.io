import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { projects } from './data/projects';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaTerminal, FaExternalLinkAlt, FaJava, FaLayerGroup, FaBrain, FaNetworkWired } from 'react-icons/fa';
import { SiLeetcode, SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiPython, SiGit, SiTypescript } from 'react-icons/si';

// --- Components ---

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-purple-500 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <div className="w-2 h-2 bg-purple-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
};

const SpotlightBackground = () => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed inset-0 z-0 pointer-events-none"
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(120, 50, 255, 0.1), transparent 40%)`,
        }}
      />
    </div>
  );
};

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 glass-panel border-b-0 rounded-b-xl mx-4 mt-4 max-w-7xl lg:mx-auto"
    >
      <div className="text-xl font-bold tracking-tighter font-mono text-white">
        <span className="text-purple-500">&lt;</span>
        HSR
        <span className="text-purple-500">/&gt;</span>
      </div>
      <div className="flex gap-4 text-gray-400">
        <SocialLink href="https://github.com/rrrautela" icon={<FaGithub />} />
        <SocialLink href="https://www.linkedin.com/in/rrrautela/" icon={<FaLinkedin />} />
        <SocialLink href="https://leetcode.com/rrrautela" icon={<SiLeetcode />} />
        <SocialLink href="https://twitter.com/rrrautela" icon={<FaTwitter />} />
      </div>
    </motion.nav>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors duration-300 text-xl"
  >
    {icon}
  </a>
);

const TerminalHero = () => {
  const [text, setText] = useState('');
  const fullText = "> The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination. \n \t \t";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 lg:mt-0">
      <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm sm:text-base">
        <div className="bg-[#2d2d2d] px-4 py-2 flex gap-2 items-center border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-2 text-gray-400 text-xs">bash — 80x24</div>
        </div>
        <div className="p-6 text-green-400 min-h-[150px]">
          <p className="mb-2"><span className="text-blue-400">user@einstein:~/portfolio (main) </span>:<span className="text-purple-400">~</span>$ cat quote.txt</p>
          <p className="leading-relaxed">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-2 h-5 bg-green-400 ml-1 align-middle"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

const SkillBadge = ({ icon, name }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/50 transition-colors cursor-none">
    <span className="text-xl text-gray-300">{icon}</span>
    <span className="text-sm font-medium text-gray-300">{name}</span>
  </div>
);

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/10"
    >
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.target.src = `https://placehold.co/600x400/1a1a1a/ffffff?text=${project.title}`;
          }}
        />
      </div>

      <div className="p-6 relative z-20">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
          <div className="flex gap-3">
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaExternalLinkAlt size={18} /></a>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DSAStats = () => {
  const [stats, setStats] = useState({
    solved: '561',
    globalRank: '131,366',
    contestRating: '1,688',
    contestRank: '107,488',
    contestTop: '13.8%',
    globalTop: '0.51'
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contestRes, profileRes] = await Promise.all([
          fetch('https://alfa-leetcode-api.onrender.com/rrrautela/contest'),
          fetch('https://alfa-leetcode-api.onrender.com/userProfile/rrrautela')
        ]);

        const contestData = await contestRes.json();
        const profileData = await profileRes.json();

        if (contestData && profileData) {
          const calculatedGlobalTop = (profileData.ranking / 26000000 * 100).toFixed(2);
          setStats({
            solved: profileData.totalSolved.toLocaleString(),
            globalRank: profileData.ranking.toLocaleString(),
            contestRating: Math.round(contestData.contestRating).toLocaleString(),
            contestRank: contestData.contestGlobalRanking.toLocaleString(),
            contestTop: `${contestData.contestTopPercentage}%`,
            globalTop: calculatedGlobalTop
          });
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12 glass-panel p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-colors duration-500">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-mono flex items-center gap-3 mb-4">
              <span className="text-purple-500 text-2xl">&lt;</span>
              <span className="text-purple-100">DSA Logs</span>
              <span className="text-purple-500 text-2xl">/&gt;</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Building real problem solving skills in a shortcut generation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="text-green-400 text-sm font-mono mb-1">Total Solved</div>
              <div className="text-3xl font-bold text-white">{stats.solved}</div>
              <div className="text-xs text-gray-500 mt-1">Problems</div>
            </div>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="text-blue-400 text-sm font-mono mb-1">Global Ranking</div>
              <div className="text-3xl font-bold text-white">{stats.globalRank}</div>
              <div className="text-xs text-gray-500 mt-1">Top {stats.globalTop}% out of 26,000,000 users</div>
            </div>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="text-purple-400 text-sm font-mono mb-1">Contest Rating</div>
              <div className="text-3xl font-bold text-white">{stats.contestRating}</div>
              <div className="text-xs text-gray-500 mt-1">Next Stop => Knight (1850+) </div>
            </div>
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="text-yellow-400 text-sm font-mono mb-1">Contest Ranking</div>
              <div className="text-3xl font-bold text-white">{stats.contestRank}</div>
              <div className="text-xs text-gray-500 mt-1">Top {stats.contestTop} out of 8,00,000 users</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">Divide & Conquer</span>
            <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">Backtracking</span>
            <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">Dynamic Programming</span>
            <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">Graph Algorithms</span>
            <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">Bit Manipulation</span>
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col items-center gap-6 relative">
          <div className="relative w-full flex justify-center">
            <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full opacity-20 animate-pulse"></div>
            <img
              src="https://leetcard.jacoblin.cool/rrrautela?theme=dark&font=JetBrains%20Mono&ext=heatmap"
              alt="LeetCode Stats"
              className="w-full max-w-md rounded-xl shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500 border border-white/10"
            />
          </div>

          <a
            href="https://leetcode.com/u/rrrautela/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600/20 text-purple-300 font-bold rounded-full hover:bg-purple-600/30 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 group z-10"
          >
            View LeetCode Profile
            <FaExternalLinkAlt size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default function App() {


  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-purple-200 cursor-none">
      <CustomCursor />
      <SpotlightBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-24 pb-12 max-w-7xl mx-auto gap-12 relative z-10">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-purple-500 font-mono mb-4 text-lg">Hello, World! I'm</h2>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 glitch-wrapper">
              <span className="glitch" data-text="Harshit Singh">Harshit Singh</span> <br />
              <span className="text-gradient">Rautela</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Natural intelligence in an artificially intelligent world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            <SkillBadge icon={<FaJava />} name="Java" />
            <SkillBadge icon={<SiPython />} name="Python" />
            <SkillBadge icon={<SiJavascript />} name="JavaScript" />
            <SkillBadge icon={<SiTypescript />} name="TypeScript" />
            <SkillBadge icon={<SiReact />} name="React" />
            <SkillBadge icon={<SiTailwindcss />} name="Tailwind" />
            <SkillBadge icon={<SiNodedotjs />} name="Node.js" />
            <SkillBadge icon={<SiGit />} name="Git" />
            <SkillBadge icon={<FaLayerGroup />} name="Data Structures" />
            <SkillBadge icon={<FaBrain />} name="Algorithms" />
            <SkillBadge icon={<FaNetworkWired />} name="System Design" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
            >
              View Projects <FaExternalLinkAlt size={14} />
            </a>
          </motion.div>
        </div>

        <div className="flex-1 w-full">
          <TerminalHero />
        </div>
      </section>

      {/* DSA Journey Section */}
      <DSAStats />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-400">A selection of my recent work</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/10 ml-8 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-gray-500 text-sm relative z-10">
        <p>© {new Date().getFullYear()} @rrrautela. All rights reserved.</p>
        <p className="mt-2">Built with React, Tailwind & Curiosity</p>
      </footer>
    </div>
  );
}
