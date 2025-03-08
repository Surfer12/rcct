import React, { useEffect, useRef } from 'react';
import { VisualizationType } from '../types';
import * as d3 from 'd3';

interface VisualizationPanelProps {
  visualizationType: VisualizationType;
  onVisualizationChange: (type: VisualizationType) => void;
  onNodeClick: (nodeId: number) => void;
}

const VisualizationPanel: React.FC<VisualizationPanelProps> = ({ 
  visualizationType, 
  onVisualizationChange,
  onNodeClick
}) => {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Function to create the overview visualization using D3
  const createOverviewVisualization = () => {
    if (!svgContainerRef.current) return;
    
    const width = 800;
    const height = 500;
    const centerX = width / 2;
    const centerY = height / 2;
    const mainRadius = 80;
    const subRadius = 60;
    const distance = 200;
    
    // Clear any existing SVG
    d3.select(svgContainerRef.current).select('svg').remove();
    
    // Create SVG
    const svg = d3.select(svgContainerRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`);
    
    // Central node
    const centralNode = svg.append('g')
      .attr('data-node-id', 1)
      .style('cursor', 'pointer')
      .on('click', () => onNodeClick(1));
    
    centralNode.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', mainRadius)
      .attr('fill', '#1f6feb');
    
    centralNode.append('text')
      .attr('x', centerX)
      .attr('y', centerY)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .text('Recursive CCT Integration');
    
    // Component nodes
    const components = [
      { id: 2, x: centerX - distance, y: centerY - distance/2, color: '#238636', label: 'Core Model Components' },
      { id: 3, x: centerX + distance, y: centerY - distance/2, color: '#a371f7', label: 'Cross-Domain Integration' },
      { id: 4, x: centerX - distance, y: centerY + distance/2, color: '#f85149', label: 'Recursive Processing' },
      { id: 5, x: centerX + distance, y: centerY + distance/2, color: '#f0883e', label: 'Visualization Techniques' }
    ];
    
    components.forEach(component => {
      const compNode = svg.append('g')
        .attr('data-node-id', component.id)
        .style('cursor', 'pointer')
        .on('click', () => onNodeClick(component.id));
      
      compNode.append('circle')
        .attr('cx', component.x)
        .attr('cy', component.y)
        .attr('r', subRadius)
        .attr('fill', component.color);
      
      compNode.append('text')
        .attr('x', component.x)
        .attr('y', component.y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', 'white')
        .text(component.label);
      
      // Connection lines
      svg.append('line')
        .attr('x1', component.x < centerX ? component.x + subRadius : component.x - subRadius)
        .attr('y1', component.y < centerY ? component.y + subRadius : component.y - subRadius)
        .attr('x2', centerX + (component.x < centerX ? -mainRadius : mainRadius))
        .attr('y2', centerY + (component.y < centerY ? -mainRadius : mainRadius))
        .attr('stroke', '#8b949e')
        .attr('stroke-width', 2);
    });
  };

  // Function to load an SVG file
  const loadSvgVisualization = (type: 'recursive' | 'cross-domain') => {
    if (!svgContainerRef.current) return;
    
    // In a real implementation, this would fetch SVG files from the server
    // For now, we'll just display a placeholder message
    d3.select(svgContainerRef.current).select('svg').remove();
    
    const placeholderDiv = document.createElement('div');
    placeholderDiv.style.textAlign = 'center';
    placeholderDiv.style.padding = '50px';
    placeholderDiv.innerHTML = `
      <h3>${type === 'recursive' ? 'Recursive Structure' : 'Cross-Domain Integration'} Visualization</h3>
      <p>SVG visualization would be loaded here from server.</p>
    `;
    
    svgContainerRef.current.innerHTML = '';
    svgContainerRef.current.appendChild(placeholderDiv);
  };

  useEffect(() => {
    // Update visualization based on selected type
    switch(visualizationType) {
      case 'overview':
        createOverviewVisualization();
        break;
      case 'recursive':
        loadSvgVisualization('recursive');
        break;
      case 'cross-domain':
        loadSvgVisualization('cross-domain');
        break;
    }
  }, [visualizationType]);

  return (
    <div className="visualization-panel">
      <div className="controls">
        <button 
          className={visualizationType === 'overview' ? 'active' : ''}
          onClick={() => onVisualizationChange('overview')}
        >
          Overview
        </button>
        <button 
          className={visualizationType === 'recursive' ? 'active' : ''}
          onClick={() => onVisualizationChange('recursive')}
        >
          Recursive Structure
        </button>
        <button 
          className={visualizationType === 'cross-domain' ? 'active' : ''}
          onClick={() => onVisualizationChange('cross-domain')}
        >
          Cross-Domain Integration
        </button>
      </div>
      
      <div className="svg-container" ref={svgContainerRef}>
        {/* SVG visualization will be rendered here */}
      </div>
    </div>
  );
};

export default VisualizationPanel;