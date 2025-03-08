import React, { useState, useEffect } from 'react';
import './App.css';
import ThoughtTree from './components/ThoughtTree';
import VisualizationPanel from './components/VisualizationPanel';
import DetailsPanel from './components/DetailsPanel';
import { VisualizationType, NodeDetail } from './types';
import { cctThoughtTree, nodeDetails } from './data/cctData';

function App() {
  const [activeNodeId, setActiveNodeId] = useState<number | null>(1); // Default to root node
  const [activeVisualization, setActiveVisualization] = useState<VisualizationType>('overview');
  const [activeNodeDetail, setActiveNodeDetail] = useState<NodeDetail | null>(null);
  
  // Update node details when active node changes
  useEffect(() => {
    if (activeNodeId === null) {
      setActiveNodeDetail(null);
      return;
    }
    
    const detail = nodeDetails[activeNodeId];
    if (detail) {
      setActiveNodeDetail(detail);
    } else {
      setActiveNodeDetail({
        description: "No detailed information available for this component.",
        yaml: "# No YAML representation available",
        code: "// No code representation available"
      });
    }
  }, [activeNodeId]);
  
  const handleNodeClick = (nodeId: number) => {
    setActiveNodeId(nodeId);
  };
  
  const handleVisualizationChange = (type: VisualizationType) => {
    setActiveVisualization(type);
  };
  
  return (
    <div className="container">
      <h1>Recursive CCT Integration Explorer</h1>
      
      <div className="visualization-container">
        <ThoughtTree 
          rootNode={cctThoughtTree} 
          activeNodeId={activeNodeId} 
          onNodeClick={handleNodeClick} 
        />
        
        <VisualizationPanel 
          visualizationType={activeVisualization} 
          onVisualizationChange={handleVisualizationChange}
          onNodeClick={handleNodeClick}
        />
      </div>
      
      <DetailsPanel nodeDetail={activeNodeDetail} />
    </div>
  );
}

export default App;