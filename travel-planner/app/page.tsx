import TopNavbar from "./components/TopNavbar";
import Background from "./components/LandingPage/Background";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Background />
      <TopNavbar />
      <div className="hero bg-base min-h-screen">
        <div className="hero-content text-center mt-[-160px]">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Planlæg din næste rejse</h1>
            <p className="py-6">
              Indtast blot din ønskede destination, og vi vil finde de bedste rejsemuligheder til dig.
            </p>
            <label className="input">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Destination" />
            </label>
          </div>
        </div>
      </div>
    </div>
    );
}
