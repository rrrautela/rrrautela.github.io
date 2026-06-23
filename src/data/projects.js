import img from "../assets/spotify.jpg";
import img1 from "../assets/logician.png";
import img2 from "../assets/dopamile.jpg";
import img3 from "../assets/minesweeperx.png";
import img4 from "../assets/taskify.png";
import img5 from "../assets/andromedadb.png";


// projects data (now defined directly in this file)
export const projects = [
  {
  title: "AndromedaDB",
  desc: "A fault-tolerant LSM-tree storage engine built from scratch in Java, featuring WAL-based crash recovery, SSTables, Bloom Filters, metadata indexing, and background compaction for high-throughput persistent storage.",
  image: img5,
  link: "#",
  repo: "https://github.com/rrrautela/AndromedaDB",
  tags: [
    "Java",
    "LSM Tree",
    "Database Systems",
    "Bloom Filters",
    "Concurrency",
    "File I/O",
    "Storage Engine",
    "System Design"
  ]
},
  
  {
    title: "Wordle PvP",
    desc: "A real-time multiplayer Wordle clone built with React, featuring sleek UI, game logic, and socket-based interactions for challenging friends live.",
    image: "https://imgs.search.brave.com/0TdRcWMrIBaJLJsPAQ15Om1C8YgbDhtZy-nggsHlDw8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/ODI0MzkzNC9waG90/by93b3JkbGUtZ2Ft/ZS1kaXNwbGF5ZWQt/b24tYS1waG9uZS1h/bmQtYS1sYXB0b3At/c2NyZWVucy1pcy1z/ZWVuLWluLXRoaXMt/aWxsdXN0cmF0aW9u/LXBob3RvLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1qMkl5/Unp0QzBVRThUSHUy/TDB1RzdyOHY1ZTJt/NzZKRnpTeGdyZDZy/M0M0PQ",
    link: "https://wordle-pvp.vercel.app/",
    repo: "https://github.com/rrrautela/wordle-pvp",
    tags: ["React", "Socket.IO", "Multiplayer", "Real-Time", "Game Logic", "UI/UX"]
  },
  {
    title: "Logician",
    desc: "A clean, minimal logic-explanation playground where algorithms are broken down step-by-step with interactive visuals. Built for learners who want clarity without the clutter.",
    image: img1,
    link: "https://logician.vercel.app",
    repo: "https://github.com/rrrautela/logician",
    tags: ["Vanilla JS", "Algorithms", "Visualization", "UI/UX", "Education"]
  },
  {
    title: "MinesweeperX",
    desc: "A fast, modern Minesweeper with sharp UX, smooth animations, and precise grid logic. Built to feel snappy, responsive, and instantly addictive.",
    image: img3,
    link: "https://minesweeperxx.vercel.app/",
    repo: "https://github.com/rrrautela/minesweeperX",
    tags: ["Vanilla JS", "Game Logic", "Grid Systems", "Animations", "UI/UX"]
  },
  {
    title: "DopaMile",
    desc: "A gamified productivity tracker that rewards real-life tasks with points, streaks, and progress visuals—turning discipline into dopamine.",
    image: img2,
    link: "https://dopamile.vercel.app",
    repo: "https://github.com/rrrautela/DopaMile",
    tags: ["MERN", "TypeScript", "Gamification", "Productivity", "MongoDB", "UI/UX"]
  },
  {
    title: "Spotify Reccer",
    desc: "Spotify-powered tool that recommends 5 random songs from the developer’s playlists using scraped JSON data. A clean dark UI and instant shuffle.",
    image: img,
    link: "https://spotifyreccer.vercel.app",
    repo: "https://github.com/rrrautela/spotifyreccer",
    tags: ["JavaScript", "Spotify API", "Web Scraping", "JSON Handling", "Dark Mode UI", "UX Design"]
  },
  {
    title: "Taskify",
    desc: "A slick, minimal to-do manager with categories, persistence, and clean UI. Built to keep daily workflows simple and distraction-free.",
    image: img4,
    link: "https://taskify-five-eosin.vercel.app",
    repo: "https://github.com/rrrautela/Taskify",
    tags: ["HTML", "CSS", "JavaScript", "Productivity", "LocalStorage"]
  },
  {
    title: "Hacktype",
    desc: "A hacker-style typing simulator made for cinematic scenes—press random keys and auto-type cool-looking code in real time.",
    image: "https://imgs.search.brave.com/M5CXGQiDKvwngR0r4vH1qev8OKBkFzkMRWmCCRG_WBM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNTM4/MDc5Mi9wZXhlbHMt/cGhvdG8tNTM4MDc5/Mi5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA",
    link: "https://hack-type.vercel.app",
    repo: "https://github.com/rrrautela/HackType",
    tags: ["Vanilla JS", "HTML", "CSS", "DOM Manipulation", "Interactive UI", "Fun/Playful"]
  },
  {
    title: "Stone Paper Scissors",
    desc: "A classic Stone Paper Scissors game built with HTML, CSS, and JavaScript, featuring animations and interactive UI.",
    image: "https://imgs.search.brave.com/gMtRq_XU5nL-iHJ7YTAaWgu0pjJLBVp61SObBcfir68/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zdG9u/ZS1zY2lzc29ycy1w/YXBlci1jaGlsZHJl/bi1zLWdhbWUtbGVh/ZGVyc2hpcC1wYXBl/ci1zY2lzc29ycy1y/b2NrLWdhbWUtY29u/Y2VwdC13aGl0ZS1z/dG9uZS1uYXR1cmUt/ZGVjaXNpb24tYmFj/a2dyb3VuZC1zaWdu/LTEyMDcwMjY1Ni5q/cGc",
    link: "https://ston-pap-sciss.vercel.app",
    repo: "https://github.com/rrrautela/StonPapSciss",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];


