import React, { useState } from 'react';
import { NodeDetail, TabType } from '../types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface DetailsPanelProps {
  nodeDetail: NodeDetail | null;
}

const DetailsPanel: React.FC<DetailsPanelProps> = ({ nodeDetail }) => {
  const [activeTab, setActiveTab] = useState<TabType['id']>('details');
  
  const tabs: TabType[] = [
    { id: 'details', label: 'Details' },
    { id: 'yaml', label: 'YAML' },
    { id: 'code', label: 'Code' }
  ];
  
  return (
    <div className="details-panel">
      <div className="tabs">
        {tabs.map(tab => (
          <div 
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      
      <div className="tab-content" style={{ display: activeTab === 'details' ? 'block' : 'none' }}>
        <h3>Component Details</h3>
        {nodeDetail ? (
          <p>{nodeDetail.description}</p>
        ) : (
          <p>Select a component from the thought structure or visualization to see details.</p>
        )}
      </div>
      
      <div className="tab-content" style={{ display: activeTab === 'yaml' ? 'block' : 'none' }}>
        <h3>YAML Structure</h3>
        <SyntaxHighlighter language="yaml" style={docco}>
          {nodeDetail?.yaml || '# Click on a thought node to see its YAML representation'}
        </SyntaxHighlighter>
      </div>
      
      <div className="tab-content" style={{ display: activeTab === 'code' ? 'block' : 'none' }}>
        <h3>Generated Code</h3>
        <SyntaxHighlighter language="java" style={docco}>
          {nodeDetail?.code || '// Click on a thought node to see its code representation'}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DetailsPanel;