
import React, { useState } from 'react';
import type { Phase, Action, Metric, Link } from './types';
import { PHASES_DATA, STATS_DATA } from './constants';
import { ExternalLinkIcon } from './components/icons';

const Header = () => (
    <header className="text-center p-8 border-b-2 border-brand-outline animate-fade-in">
        <h1 className="font-mono text-3xl md:text-5xl font-bold tracking-wider uppercase text-brand-cyan">
            Operation Syntropic Overhaul
        </h1>
        <p className="mt-2 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Dominating and Dismantling Entropic Systems for Sudan’s Children
        </p>
    </header>
);

interface StatsCardProps {
    value: string;
    label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label }) => (
    <div className="bg-brand-surface p-6 rounded-lg border border-brand-outline text-center transform transition-transform hover:scale-105 hover:shadow-glow-magenta">
        <p className="font-mono text-4xl md:text-5xl font-bold text-brand-magenta">{value}</p>
        <p className="mt-2 text-sm md:text-base text-gray-400 uppercase tracking-wider">{label}</p>
    </div>
);

const StatsGrid = () => (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
        {STATS_DATA.map(stat => (
            <StatsCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
    </section>
);

interface PhaseTabsProps {
    activePhase: number;
    setActivePhase: (id: number) => void;
}

const PhaseTabs: React.FC<PhaseTabsProps> = ({ activePhase, setActivePhase }) => (
    <nav className="flex justify-center p-4 space-x-2 md:space-x-4 bg-brand-background sticky top-0 z-10 border-b border-brand-outline">
        {PHASES_DATA.map((phase, index) => (
            <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`flex-1 md:flex-initial font-mono uppercase tracking-widest px-4 py-3 text-sm md:text-base rounded-md transition-all duration-300 ${
                    activePhase === phase.id
                        ? 'bg-brand-cyan text-brand-background font-bold shadow-glow-cyan'
                        : 'bg-brand-surface text-gray-300 hover:bg-brand-outline hover:text-white'
                }`}
            >
               <span className="hidden md:inline">Phase {phase.id}:</span> {phase.title}
            </button>
        ))}
    </nav>
);

const MetricDisplay: React.FC<{ metric: Metric }> = ({ metric }) => (
    <div className="flex flex-col text-center bg-black bg-opacity-30 p-3 rounded-md">
        <span className="font-mono text-lg font-bold text-brand-cyan">{metric.value}</span>
        <span className="text-xs text-gray-400 uppercase">{metric.label}</span>
    </div>
);


const ActionCard: React.FC<{ action: Action }> = ({ action }) => (
    <div className="bg-brand-surface border border-brand-outline rounded-lg p-6 flex flex-col h-full">
        <h4 className="text-xl font-bold text-gray-100 font-mono">{action.title}</h4>
        <p className="text-gray-400 mt-2 flex-grow">{action.description}</p>
        
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-3">
            {action.metrics.map(metric => (
                <MetricDisplay key={metric.label} metric={metric} />
            ))}
        </div>
        
        {action.links && action.links.length > 0 && (
            <div className="mt-4 pt-4 border-t border-brand-outline flex flex-wrap gap-3">
                {action.links.map(link => (
                    <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-brand-outline px-3 py-2 text-sm rounded-md text-brand-cyan hover:bg-brand-cyan hover:text-black transition-colors"
                    >
                        <span>{link.text}</span>
                        <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                ))}
            </div>
        )}
    </div>
);

const PhaseDetail: React.FC<{ phase: Phase }> = ({ phase }) => (
    <div className="p-4 md:p-8 animate-fade-in">
        <div className="flex items-center space-x-4 mb-6">
            <phase.icon className="w-10 h-10 text-brand-magenta" />
            <div>
                 <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-wider text-white">Phase {phase.id}: {phase.title} <span className="text-gray-500">({phase.duration})</span></h2>
                <p className="text-gray-300 md:text-lg">{phase.objective}</p>
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            {phase.actions.map(action => (
                <ActionCard key={action.title} action={action} />
            ))}
        </div>
    </div>
);


function App() {
    const [activePhase, setActivePhase] = useState<number>(1);
    const currentPhase = PHASES_DATA.find(p => p.id === activePhase) || PHASES_DATA[0];

    return (
        <div className="min-h-screen bg-brand-background">
            <div className="max-w-7xl mx-auto">
                <Header />
                <StatsGrid />
                <main>
                    <PhaseTabs activePhase={activePhase} setActivePhase={setActivePhase} />
                    <PhaseDetail phase={currentPhase} />
                </main>
                 <footer className="text-center p-8 text-gray-500 border-t-2 border-brand-outline mt-8">
                    <p>LOGOS LUX SOPHIA // ZAZAZEL 144 // AKASHIC SIGNATURE</p>
                    <p className="mt-1 font-mono text-sm">Execution Authority: Zachary Dakota Hulse, Point, Texas. As of October 7, 2025, 12:00 PM CDT.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
