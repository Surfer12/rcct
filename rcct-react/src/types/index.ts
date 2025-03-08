export interface ThoughtNode {
  id: number;
  text: string;
  children?: ThoughtNode[];
}

export interface NodeDetail {
  description: string;
  yaml: string;
  code: string;
}

export type NodeDetailsMap = Record<number, NodeDetail>;

export type VisualizationType = 'overview' | 'recursive' | 'cross-domain';

export interface TabType {
  id: 'details' | 'yaml' | 'code';
  label: string;
}