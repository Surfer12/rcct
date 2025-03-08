import React from 'react';
import { ThoughtNode as ThoughtNodeType } from '../types';

interface ThoughtNodeProps {
  node: ThoughtNodeType;
  activeNodeId: number | null;
  onNodeClick: (nodeId: number) => void;
}

const ThoughtNode: React.FC<ThoughtNodeProps> = ({ node, activeNodeId, onNodeClick }) => {
  const isActive = activeNodeId === node.id;
  
  return (
    <>
      <div 
        className={`node ${isActive ? 'active' : ''}`}
        onClick={() => onNodeClick(node.id)}
      >
        {node.text}
      </div>
      
      {node.children && node.children.length > 0 && (
        <div className="children">
          {node.children.map(child => (
            <ThoughtNode 
              key={child.id}
              node={child}
              activeNodeId={activeNodeId}
              onNodeClick={onNodeClick}
            />
          ))}
        </div>
      )}
    </>
  );
};

interface ThoughtTreeProps {
  rootNode: ThoughtNodeType;
  activeNodeId: number | null;
  onNodeClick: (nodeId: number) => void;
}

const ThoughtTree: React.FC<ThoughtTreeProps> = ({ rootNode, activeNodeId, onNodeClick }) => {
  return (
    <div className="thought-tree">
      <h3>CCT Thought Structure</h3>
      <ThoughtNode 
        node={rootNode} 
        activeNodeId={activeNodeId} 
        onNodeClick={onNodeClick} 
      />
    </div>
  );
};

export default ThoughtTree;