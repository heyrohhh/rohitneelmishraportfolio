import { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubStats() {
  const [selectedYear, setSelectedYear] = useState(2026); // Default year

  const githubTheme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  const years = [2026, 2025];

  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500">
          05. Contribution Graph
        </h2>
        
        {/* Year Selection Tabs */}
        <div className="flex bg-[#111] p-1 border border-gray-800 rounded-md">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-1 text-xs font-mono transition-all ${
                selectedYear === year 
                ? 'bg-blue-600 text-white rounded-sm shadow-lg' 
                : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#111] p-6 border border-gray-800 rounded-sm flex flex-col items-center min-h-[200px] justify-center transition-all">
        {/* Calendar updates automatically when selectedYear changes */}
        <GitHubCalendar 
          username="heyrohhh"
          year={selectedYear}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          colorScheme="dark"
          theme={githubTheme}
        />
        
        <p className="text-[10px] text-gray-600 mt-6 font-mono uppercase tracking-widest">
          Viewing Activity for Calendar Year {selectedYear}
        </p>
      </div>
    </section>
  );
}