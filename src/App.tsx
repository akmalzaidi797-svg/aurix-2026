import FlowArt, { FlowSection } from './story-scroll';

// Correctly re-mapped image variables for the 4 swapped events:
import expoImg from './images/race.jpeg';         // Blue robot photo goes to Robo Race
import raceImg from './images/soccer.jpeg';     // Running robots photo goes to Robo Race -> Robo Soccer shift
import soccerImg from './images/ideathon.jpeg'; // Football match photo goes to Robo Soccer
import ideathonImg from './images/expo.jpeg';     // Typing robot photo goes to Robo Ideathon

// Keeping Hackathon and Innovation Showcase as they were:
import hackathonImg from './images/hackathon.jpeg'; 
import extraImg from './images/extra.jpeg';       



export function App() {
  return (
    <FlowArt aria-label="AURIX 2026 Story Scroll">
      
      {/* Section 1: Hero / Welcome */}
      <FlowSection 
        aria-label="Kalam Robotics Society Introduction" 
        style={{ backgroundColor: '#F0F6FF', color: '#0A2540' }}
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Kalam Robotics Society (KRS) &middot; IILM University
          </p>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">
            AURIX 2026
          </span>
        </div>
        <hr className="my-[2vw] border-none border-t border-blue-200" />
        <div>
          <h1 className="text-[clamp(3rem,10vw,12rem)] font-extrabold leading-[0.85] uppercase tracking-tight text-blue-900">
            AURIX <br />
            <span className="text-blue-600">2026</span>
          </h1>
          <p className="mt-4 text-xl font-medium tracking-wide text-blue-700">
            Advanced Unified Robotics & Innovation Xperience
          </p>
        </div>
        <hr className="my-[2vw] border-none border-t border-blue-200" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <p className="max-w-[45ch] text-[clamp(1rem,1.8vw,1.5rem)] font-normal leading-relaxed text-slate-700">
            The Ultimate Tech Fest. Build | Compete | Innovate. A national-level robotics and innovation event bringing together bright minds and future innovators.
          </p>
          <div className="text-sm font-semibold bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
            📅 28th & 29th October 2026
          </div>
        </div>
      </FlowSection>

      {/* Section 2: Events & Competitions */}
      <FlowSection 
        aria-label="Events and Competitions" 
        style={{ backgroundColor: '#0052CC', color: '#FFFFFF' }}
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
            02 &mdash; Competitions Arena
          </p>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-700 text-white">
            Show Your Talent
          </span>
        </div>
        <hr className="my-[2vw] border-none border-t border-blue-400 opacity-40" />
        <div>
          <h2 className="text-[clamp(2.5rem,5vw,7rem)] font-extrabold leading-[0.9] uppercase tracking-tight text-white">
            Events &amp; Competitions
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-blue-400 opacity-40" />
        
        {/* 6 Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Robo Race", img: raceImg },
            { name: "Robo Soccer", img: soccerImg },
            { name: "Robotics & AI Hackathon", img: hackathonImg },
            { name: "Robo Ideathon", img: ideathonImg },
            { name: "Robo Expo", img: expoImg },
            { name: "Innovation Showcase", img: extraImg },
          ].map((event, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden flex flex-col group shadow-lg">
              <div className="h-52 w-full bg-black/40 overflow-hidden relative flex items-center justify-center p-3">
                <img 
                  src={event.img} 
                  alt={event.name} 
                  className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-4 text-center bg-black/30">
                <span className="text-sm font-bold tracking-wide text-white">{event.name}</span>
              </div>
            </div>
          ))}
        </div>
      </FlowSection>

      {/* Section 3: Why Join & Venue */}
      <FlowSection 
        aria-label="Why Join AURIX 2026" 
        style={{ backgroundColor: '#FFFFFF', color: '#0A2540' }}
      >
        <div className="flex justify-between items-center w-full">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            03 &mdash; Why Participate
          </p>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600">
            Innovate &bull; Technology &bull; Together
          </span>
        </div>
        <hr className="my-[2vw] border-none border-t border-slate-200" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[clamp(2.5rem,6vw,7rem)] font-extrabold leading-[0.9] uppercase tracking-tight text-blue-900">
              Shape Your <span className="text-blue-600">Future</span>
            </h2>
            <ul className="mt-6 space-y-4 text-slate-700 text-lg">
              <li className="flex items-center gap-3">✅ Work on a national-level event.</li>
              <li className="flex items-center gap-3">✅ Gain real event and technical experience.</li>
              <li className="flex items-center gap-3">✅ Build leadership &amp; teamwork skills.</li>
              <li className="flex items-center gap-3">✅ Be part of an innovative and passionate community.</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-8 rounded-3xl flex flex-col gap-4 shadow-xl">
            <h3 className="text-2xl font-extrabold text-blue-900">Event Details</h3>
            <p className="text-slate-600">Join us at IILM University, Greater Noida for two power-packed days of robotics, coding, and innovation.</p>
            <div className="pt-4 border-t border-blue-200 flex flex-col gap-2 font-semibold text-blue-900">
              <span>📅 Dates: 28th &amp; 29th October 2026</span>
              <span>📍 Venue: IILM University, Greater Noida</span>
            </div>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-slate-200" />
        <div className="text-center pb-4">
          <p className="text-sm font-bold tracking-widest uppercase text-blue-600">
            Kalam Robotics Society &bull; IILM University, Greater Noida
          </p>
        </div>
      </FlowSection>
      <FlowSection>
  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-3xl text-center shadow-xl flex flex-col items-center justify-center gap-4 my-6">
    <h2 className="text-3xl font-extrabold tracking-tight">🚀 Registration Opening Soon!</h2>
    <p className="text-blue-100 text-lg max-w-xl">
      Get ready to showcase your robotics and innovation skills at AURIX 2026. Stay tuned for updates!
    </p>
    <span className="inline-block bg-white text-blue-700 font-bold px-6 py-2 rounded-full shadow-md text-sm mt-2">
      Coming Soon
    </span>
  </div>
</FlowSection>

    </FlowArt>
  );
}
export default App;