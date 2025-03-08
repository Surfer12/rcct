import React, { useState } from 'react';

const CrossDomainIntegrationMap = () => {
  // State management for interactive elements
  const [activeElement, setActiveElement] = useState(null);
  const [activeIsomorphism, setActiveIsomorphism] = useState(null);
  const [activeDomain, setActiveDomain] = useState(null);
  
  // Integration points data
  const integrationPoints = {
    A: {
      title: "Neural-Inspired Algorithms",
      domains: ["Computational", "Cognitive"],
      description: "Algorithms that mirror neural pattern recognition while maintaining computational efficiency.",
      applications: [
        "Biologically-plausible learning algorithms",
        "Self-modifying computational graphs",
        "Dynamic memory allocation mirroring attention mechanisms"
      ]
    },
    B: {
      title: "Executable Knowledge Graphs",
      domains: ["Computational", "Representational"],
      description: "Knowledge representations that are simultaneously declarative and procedural.",
      applications: [
        "Self-describing code structures",
        "Runtime-modifiable type systems",
        "Graph-based computation with semantic tagging"
      ]
    },
    C: {
      title: "Cognitive YAML Processing",
      domains: ["Cognitive", "Representational"],
      description: "Systems that process structured knowledge representations using cognitive chunking principles.",
      applications: [
        "Attention-weighted knowledge structures",
        "Context-sensitive reference resolution",
        "Hierarchical concept encoding with chunking"
      ]
    },
    D: {
      title: "Recursive Meta-Cognitive CCT",
      domains: ["Computational", "Cognitive", "Representational"],
      description: "Systems that integrate all three domains to create self-improving, meta-aware reasoning frameworks.",
      applications: [
        "Self-improving reasoning frameworks",
        "Reflective judgment systems with performance optimization",
        "Domain-agnostic abstraction mechanisms with transfer learning"
      ]
    }
  };
  
  // Isomorphism data
  const isomorphisms = {
    recursion: {
      title: "Recursive Self-Reference",
      description: "The capability of structures to reference themselves, creating 'strange loops' that enable self-modification.",
      manifestations: {
        computational: "Self-referential pointers in ThoughtNode structures",
        cognitive: "Meta-cognitive awareness in neural feedback systems",
        representational: "Anchors and aliases in YAML-like knowledge structures"
      }
    },
    compression: {
      title: "Compression/Chunking",
      description: "Optimization of memory utilization through pattern recognition across different domains.",
      manifestations: {
        computational: "Memoization caches to avoid redundant processing",
        cognitive: "Neural chunking for expertise development",
        representational: "Reference reuse in YAML to compress redundant structures"
      }
    },
    meta: {
      title: "Meta-Observational Capacity",
      description: "Systems' ability to observe and modify their own processes.",
      manifestations: {
        computational: "Recursive evaluation functions in code",
        cognitive: "Reflective judgment in human cognition",
        representational: "Self-documenting structures in knowledge representations"
      }
    }
  };
  
  // Domain data
  const domains = {
    computational: {
      title: "Computational Domain",
      description: "Implementation structures in programming languages like Mojo",
      elements: ["ThoughtNode structures", "Memoization cache", "Recursive functions"]
    },
    cognitive: {
      title: "Cognitive Domain",
      description: "Neural processes and cognitive structures in thinking systems",
      elements: ["Working memory", "Long-term memory", "Meta-cognitive reflection"]
    },
    representational: {
      title: "Representational Domain",
      description: "Knowledge representation systems like YAML",
      elements: ["Anchors", "References", "Hierarchical structures"]
    }
  };
  
  // Handle circle hover/click events
  const handleDomainInteraction = (domain) => {
    setActiveDomain(domain);
    setActiveElement(null);
    setActiveIsomorphism(null);
  };
  
  // Handle integration point interaction
  const handleIntegrationPointInteraction = (point) => {
    setActiveElement(point);
    setActiveDomain(null);
    setActiveIsomorphism(null);
  };
  
  // Handle isomorphism interaction
  const handleIsomorphismInteraction = (iso) => {
    setActiveIsomorphism(iso);
    setActiveDomain(null);
    setActiveElement(null);
  };
  
  // Generate domain circle classes based on active state
  const getDomainClasses = (domain) => {
    const baseClasses = "transition-all duration-300 cursor-pointer ";
    
    if (domain === "computational") {
      return baseClasses + (activeDomain === "computational" 
        ? "fill-blue-200 stroke-blue-500 stroke-2" 
        : "fill-blue-100/20 stroke-blue-500 hover:fill-blue-100/40");
    }
    
    if (domain === "cognitive") {
      return baseClasses + (activeDomain === "cognitive" 
        ? "fill-green-200 stroke-green-500 stroke-2" 
        : "fill-green-100/20 stroke-green-500 hover:fill-green-100/40");
    }
    
    if (domain === "representational") {
      return baseClasses + (activeDomain === "representational" 
        ? "fill-pink-200 stroke-pink-500 stroke-2" 
        : "fill-pink-100/20 stroke-pink-500 hover:fill-pink-100/40");
    }
    
    return baseClasses;
  };
  
  // Generate integration point classes
  const getIntegrationPointClasses = (point) => {
    const baseClasses = "transition-all duration-300 cursor-pointer ";
    
    return baseClasses + (activeElement === point 
      ? "fill-white stroke-orange-500 stroke-2" 
      : "fill-white stroke-orange-400 hover:stroke-orange-500");
  };
  
  // Generate isomorphism classes
  const getIsomorphismClasses = (iso) => {
    const baseClasses = "transition-all duration-300 cursor-pointer ";
    
    return baseClasses + (activeIsomorphism === iso 
      ? "text-purple-700 font-bold" 
      : "text-purple-600 hover:text-purple-700");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Cross-Domain Integration: Cognitive-Computational-Representational Isomorphisms</h2>
      
      <div className="flex w-full">
        {/* SVG Visualization */}
        <div className="w-2/3 relative">
          <svg viewBox="0 0 900 700" className="w-full h-full">
            {/* Background */}
            <rect width="900" height="700" className="fill-gray-50" />
            
            {/* Domain Circles */}
            <circle 
              cx="380" cy="300" r="200" 
              className={getDomainClasses("computational")}
              onClick={() => handleDomainInteraction("computational")}
            />
            <text x="380" y="160" className="text-lg font-bold text-center fill-gray-800">Computational Domain</text>
            
            <circle 
              cx="520" cy="300" r="200" 
              className={getDomainClasses("cognitive")}
              onClick={() => handleDomainInteraction("cognitive")}
            />
            <text x="520" y="160" className="text-lg font-bold text-center fill-gray-800">Cognitive Domain</text>
            
            <circle 
              cx="450" cy="440" r="200" 
              className={getDomainClasses("representational")}
              onClick={() => handleDomainInteraction("representational")}
            />
            <text x="450" y="620" className="text-lg font-bold text-center fill-gray-800">Representational Domain</text>
            
            {/* Integration Points */}
            <circle 
              cx="450" cy="245" r="15" 
              className={getIntegrationPointClasses("A")}
              onClick={() => handleIntegrationPointInteraction("A")}
            />
            <text x="450" y="250" className="text-lg font-bold text-center fill-orange-500">A</text>
            
            <circle 
              cx="380" cy="400" r="15" 
              className={getIntegrationPointClasses("B")}
              onClick={() => handleIntegrationPointInteraction("B")}
            />
            <text x="380" y="405" className="text-lg font-bold text-center fill-orange-500">B</text>
            
            <circle 
              cx="520" cy="400" r="15" 
              className={getIntegrationPointClasses("C")}
              onClick={() => handleIntegrationPointInteraction("C")}
            />
            <text x="520" y="405" className="text-lg font-bold text-center fill-orange-500">C</text>
            
            <circle 
              cx="450" cy="350" r="25" 
              className={getIntegrationPointClasses("D")}
              onClick={() => handleIntegrationPointInteraction("D")}
            />
            <text x="450" y="358" className="text-2xl font-bold text-center fill-orange-500">D</text>
            
            {/* Integration Center */}
            <circle 
              cx="450" cy="350" r="100" 
              className="fill-yellow-100/25 stroke-yellow-400 stroke-dashed opacity-70"
            />
            <text x="450" y="320" className="text-lg font-bold text-center fill-gray-800">Integration</text>
            <text x="450" y="345" className="text-base text-center fill-gray-800">Isomorphic</text>
            <text x="450" y="365" className="text-base text-center fill-gray-800">Structures</text>
            
            {/* Isomorphism Box */}
            <rect 
              x="100" y="70" width="220" height="120" rx="10" ry="10" 
              className="fill-white stroke-gray-800"
            />
            <text x="210" y="95" className="text-base font-bold text-center fill-gray-800">Structural Isomorphisms</text>
            <line x1="120" y1="115" x2="300" y2="115" className="stroke-gray-800" />
            
            <text 
              x="140" y="135" 
              className={getIsomorphismClasses("recursion")}
              onClick={() => handleIsomorphismInteraction("recursion")}
            >• Recursive Self-Reference</text>
            
            <text 
              x="140" y="155" 
              className={getIsomorphismClasses("compression")}
              onClick={() => handleIsomorphismInteraction("compression")}
            >• Compression/Chunking</text>
            
            <text 
              x="140" y="175" 
              className={getIsomorphismClasses("meta")}
              onClick={() => handleIsomorphismInteraction("meta")}
            >• Meta-Observational Capacity</text>
            
            {/* Meta-Cognitive Loop */}
            <path 
              d="M 450 100 C 700 100 700 600 450 600 C 200 600 200 100 450 100" 
              className="fill-none stroke-purple-500 stroke-dashed opacity-70"
            />
            <text x="750" y="190" className="text-base font-bold text-center fill-purple-500">Meta-Cognitive</text>
            <text x="750" y="210" className="text-base font-bold text-center fill-purple-500">Observation Loop</text>
          </svg>
        </div>
        
        {/* Information Panel */}
        <div className="w-1/3 p-4 bg-white rounded-lg shadow-md border border-gray-200 h-96 overflow-y-auto">
          {activeElement && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-orange-500">{integrationPoints[activeElement].title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {integrationPoints[activeElement].domains.map(domain => (
                  <span key={domain} className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700">{domain}</span>
                ))}
              </div>
              <p className="text-gray-700">{integrationPoints[activeElement].description}</p>
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Applications:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {integrationPoints[activeElement].applications.map((app, i) => (
                    <li key={i} className="text-gray-600">{app}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {activeDomain && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">{domains[activeDomain].title}</h3>
              <p className="text-gray-700">{domains[activeDomain].description}</p>
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Key Elements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {domains[activeDomain].elements.map((element, i) => (
                    <li key={i} className="text-gray-600">{element}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {activeIsomorphism && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-600">{isomorphisms[activeIsomorphism].title}</h3>
              <p className="text-gray-700">{isomorphisms[activeIsomorphism].description}</p>
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Domain Manifestations:</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-blue-50 rounded">
                    <span className="font-medium text-blue-600">Computational:</span>
                    <p className="text-gray-700">{isomorphisms[activeIsomorphism].manifestations.computational}</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <span className="font-medium text-green-600">Cognitive:</span>
                    <p className="text-gray-700">{isomorphisms[activeIsomorphism].manifestations.cognitive}</p>
                  </div>
                  <div className="p-2 bg-pink-50 rounded">
                    <span className="font-medium text-pink-600">Representational:</span>
                    <p className="text-gray-700">{isomorphisms[activeIsomorphism].manifestations.representational}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {!activeElement && !activeDomain && !activeIsomorphism && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Interactive Cross-Domain Map</h3>
              <p className="text-gray-600 mb-4">Click on any element to explore cross-domain isomorphisms and integration potentials.</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Click <span className="text-blue-500 font-medium">domain circles</span> to explore domain-specific elements</li>
                <li>• Click <span className="text-orange-500 font-medium">integration points (A-D)</span> to learn about cross-domain applications</li>
                <li>• Click <span className="text-purple-600 font-medium">isomorphisms</span> to understand structural equivalences across domains</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 w-full">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Implementation Strategy</h3>
        <div className="grid grid-cols-5 gap-2">
          {['Domain-specific optimization', 'Dual-domain integration', 'Comprehensive integration', 'Meta-cognitive loop', 'Cross-domain optimization'].map((phase, i) => (
            <div key={i} className="bg-white p-3 rounded border border-gray-200">
              <div className="text-sm font-medium text-gray-700 mb-1">Phase {i+1}</div>
              <div className="text-xs text-gray-600">{phase}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrossDomainIntegrationMap;
