import FlowArt, { FlowSection } from './story-scroll';

// Correctly re-mapped image variables for the 4 swapped events:
import expoImg from './images/race.jpeg';        // Blue robot photo goes to Robotics Race
import raceImg from './images/soccer.jpeg';      // Running robots photo goes to Robot Soccer
import soccerImg from './images/ideathon.jpeg';  // Football match photo goes to Ideathon
import ideathonImg from './images/expo.jpeg';    // Typing robot photo goes to Tech Exhibition

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
            Kalam Robotics Society (KRS) &bull; IILM University
          </p>
          <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            AURIX 2026
          </span>
        </div>

        <div className="space-y-4 my-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none text-blue-950">
            AURIX <span className="text-blue-600">2026</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-700 max-w-2xl">
            Advanced Unified Robotics &amp; Innovation Xperience. Welcome to the ultimate tech fest.
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm font-semibold text-blue-900">
          <span className="flex items-center gap-2">📍 Greater Noida</span>
          <span>&bull;</span>
          <span className="flex items-center gap-2">🚀 Oct 28-29, 2026</span>
        </div>
      </FlowSection>

      {/* Section 2: Robotics Race */}
      <FlowSection
        aria-label="Robotics Race Event"
        style={{ backgroundColor: '#FFFFFF', color: '#0A2540' }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              High Speed Arena
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950">Robotics Race</h2>
            <p className="text-slate-600 text-lg">
              Design, build, and race custom autonomous bots through complex obstacle tracks to claim ultimate speed dominance.
            </p>
          </div>
          <div className="h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <img src={expoImg} alt="Robotics Race" className="w-full h-full object-cover" />
          </div>
        </div>
      </FlowSection>

      {/* Section 3: Robot Soccer */}
      <FlowSection
        aria-label="Robot Soccer Event"
        style={{ backgroundColor: '#F8FAFC', color: '#0A2540' }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="order-2 md:order-1 h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img src={raceImg} alt="Robot Soccer" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
              Robotic Sports
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950">Robot Soccer</h2>
            <p className="text-slate-600 text-lg">
              Strategy meets mechanical engineering in this high-octane robotic football match where bots battle for goals.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* Section 4: Ideathon */}
      <FlowSection
        aria-label="Ideathon Event"
        style={{ backgroundColor: '#FFFFFF', color: '#0A2540' }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
              Brainstorm &amp; Pitch
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950">Ideathon</h2>
            <p className="text-slate-600 text-lg">
              Pitch breakthrough ideas that solve real-world problems using automation, artificial intelligence, and smart tech.
            </p>
          </div>
          <div className="h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <img src={soccerImg} alt="Ideathon" className="w-full h-full object-cover" />
          </div>
        </div>
      </FlowSection>

      {/* Section 5: Tech Exhibition */}
      <FlowSection
        aria-label="Tech Exhibition Event"
        style={{ backgroundColor: '#F8FAFC', color: '#0A2540' }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="order-2 md:order-1 h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img src={ideathonImg} alt="Tech Exhibition" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              Innovation Showcase
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950">Tech Exhibition</h2>
            <p className="text-slate-600 text-lg">
              Witness cutting-edge prototypes, futuristic gadgets, and visionary technological marvels built by brilliant minds.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* Section 6: Hackathon */}
      <FlowSection
        aria-label="Hackathon Event"
        style={{ backgroundColor: '#FFFFFF', color: '#0A2540' }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-rose-100 text-rose-700 px-3 py-1 rounded-full">
              24-Hour Code Sprint
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950">Hackathon</h2>
            <p className="text-slate-600 text-lg">
              Code through the clock, collaborate with elite developers, and build working software solutions under intense deadlines.
            </p>
          </div>
          <div className="h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <img src={hackathonImg} alt="Hackathon" className="w-full h-full object-cover" />
          </div>
        </div>
      </FlowSection>

      {/* Section 7: Innovation Showcase / Perks */}
      <FlowSection
        aria-label="Perks and Highlights"
        style={{ backgroundColor: '#F8FAFC', color: '#0A2540' }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="order-2 md:order-1 h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img src={extraImg} alt="Innovation Perks" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
              Why Attend?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950">Unlock Your Potential</h2>
            <ul className="space-y-2 text-slate-700 font-medium">
              <li className="flex items-center gap-3">✅ Win exciting cash prizes &amp; goodies</li>
              <li className="flex items-center gap-3">✅ Network with industry experts &amp; mentors</li>
              <li className="flex items-center gap-3">✅ Build leadership &amp; teamwork experience</li>
              <li className="flex items-center gap-3">✅ Be part of an innovative tech community</li>
            </ul>
          </div>
        </div>
      </FlowSection>

      {/* Section 8: Registration Opening Soon (New Section Added) */}
      <FlowSection
        aria-label="Registration Opening Soon"
        style={{ backgroundColor: '#FFFFFF', color: '#0A2540' }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center py-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-4 max-w-2xl w-full mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">🚀 Registration Opening Soon!</h2>
            <p className="text-blue-100 text-lg">
              Get ready to showcase your robotics and innovation skills at AURIX 2026. Stay tuned for updates!
            </p>
            <span className="inline-block bg-white text-blue-700 font-bold px-6 py-2.5 rounded-full shadow-md text-sm mt-2">
              Coming Soon
            </span>
          </div>
        </div>
      </FlowSection>

      {/* Footer Details / Copyright */}
      <FlowSection
        aria-label="Event Details and Footer"
        style={{ backgroundColor: '#F0F6FF', color: '#0A2540' }}
      >
        <div className="space-y-6 my-auto max-w-xl">
          <h3 className="text-2xl font-extrabold text-blue-900">Event Details</h3>
          <p className="text-slate-600">Join us at IILM University, Greater Noida for two days of relentless technology and innovation.</p>
          <div className="pt-4 border-t border-blue-200 flex flex-col gap-2 font-semibold">
            <span>📅 Dates: 28th &amp; 29th October 2026</span>
            <span>📍 Venue: IILM University, Greater Noida</span>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-slate-200" />
        <div className="text-center pb-4">
          <p className="text-sm font-bold tracking-widest uppercase text-blue-600">
            Kalam Robotics Society &bull; IILM University, Greater Noida
          </p>
        </div>
      </FlowSection>

    </FlowArt>
  );
}

export default App;