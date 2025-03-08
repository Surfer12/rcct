import { ThoughtNode, NodeDetailsMap } from '../types';

export const cctThoughtTree: ThoughtNode = {
  id: 1,
  text: "Recursive CCT Integration",
  children: [
    {
      id: 2,
      text: "Core Model Components",
      children: [
        { id: 7, text: "ThoughtNode Structure" },
        { id: 8, text: "Insight Generation" },
        { id: 9, text: "Memoization" }
      ]
    },
    {
      id: 3,
      text: "Cross-Domain Integration",
      children: [
        { id: 10, text: "YAML Representation" },
        { id: 11, text: "Spring Boot Integration" },
        { id: 12, text: "Visualization Engine" }
      ]
    },
    {
      id: 4,
      text: "Recursive Processing",
      children: [
        { id: 13, text: "Thought Aliasing" },
        { id: 14, text: "Recursive Evaluation" },
        { id: 15, text: "Meta-Reflection Layer" }
      ]
    },
    {
      id: 5,
      text: "Visualization Techniques",
      children: [
        { id: 16, text: "Interactive Explorer" },
        { id: 17, text: "SVG Rendering" },
        { id: 18, text: "Real-time Updates" }
      ]
    },
    {
      id: 6,
      text: "Documentation & Examples",
      children: [
        { id: 19, text: "Example Use Cases" },
        { id: 20, text: "API Documentation" },
        { id: 21, text: "Integration Tutorials" }
      ]
    }
  ]
};

export const nodeDetails: NodeDetailsMap = {
  1: {
    description: "A comprehensive framework for recursive thought processing, featuring cross-domain integration and visualization capabilities.",
    yaml: `cct_integration:
  name: "Recursive CCT Integration"
  version: 1.0.0
  components:
    - core_model
    - cross_domain_integration
    - recursive_processing
    - visualization_techniques
    - documentation`,
    code: `public class RCCTIntegration {
    private final CoreModel coreModel;
    private final CrossDomainIntegration crossDomainIntegration;
    private final RecursiveProcessor recursiveProcessor;
    private final VisualizationEngine visualizationEngine;
    
    public RCCTIntegration() {
        this.coreModel = new CoreModel();
        this.crossDomainIntegration = new CrossDomainIntegration();
        this.recursiveProcessor = new RecursiveProcessor(coreModel);
        this.visualizationEngine = new VisualizationEngine();
    }
    
    // Methods that integrate these components
}`
  },
  7: {
    description: "The fundamental data structure for representing thoughts in the CCT model. Supports hierarchy, aliasing, and metadata.",
    yaml: `thought_node:
  properties:
    - id: Integer
    - description: String
    - subThoughts: List<ThoughtNode>
    - aliasNode: ThoughtNode (optional)
    - metadata: Map<String, Object> (optional)`,
    code: `public class ThoughtNode {
    private final int id;
    private final String description;
    private final List<ThoughtNode> subThoughts;
    private ThoughtNode aliasNode;
    private Map<String, Object> metadata;
    
    public ThoughtNode(int id, String description) {
        this.id = id;
        this.description = description;
        this.subThoughts = new ArrayList<>();
        this.metadata = new HashMap<>();
    }
    
    // Getters, setters and methods for working with sub-thoughts
}`
  },
  11: {
    description: "Integration with Spring Boot to provide web-based access to the CCT model with RESTful endpoints and real-time visualization.",
    yaml: `spring_integration:
  components:
    - controller: VisualizationController
    - service: ThoughtProcessingService
    - model: CCTModel
  endpoints:
    - GET /api/thoughts: List all root thoughts
    - GET /api/thoughts/{id}: Get specific thought
    - POST /api/thoughts: Create new thought
    - PUT /api/thoughts/{id}: Update thought
    - DELETE /api/thoughts/{id}: Delete thought`,
    code: `@RestController
@RequestMapping("/api/thoughts")
public class ThoughtController {
    private final ThoughtProcessingService service;
    
    @Autowired
    public ThoughtController(ThoughtProcessingService service) {
        this.service = service;
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ThoughtNode> getThought(@PathVariable int id) {
        return ResponseEntity.ok(service.findThoughtById(id));
    }
    
    // Other endpoints
}`
  },
  14: {
    description: "Engine for recursively evaluating thoughts and their sub-thoughts, with support for custom evaluation strategies and memoization.",
    yaml: `recursive_evaluation:
  strategies:
    - depth_first: Evaluates deepest thoughts first
    - breadth_first: Evaluates all thoughts at same level first
    - priority_based: Evaluates thoughts based on priority
  features:
    - memoization: Caches results to avoid re-computation
    - lazy_evaluation: Only computes when necessary
    - parallel_processing: Evaluates independent branches in parallel`,
    code: `public class RecursiveEvaluator {
    private final Map<Integer, String> memoizationCache;
    
    public RecursiveEvaluator() {
        this.memoizationCache = new HashMap<>();
    }
    
    public String evaluateThought(ThoughtNode node) {
        // Check cache first
        if (memoizationCache.containsKey(node.getId())) {
            return memoizationCache.get(node.getId());
        }
        
        // Process this thought and all sub-thoughts recursively
        StringBuilder result = new StringBuilder();
        result.append(processThought(node));
        
        for (ThoughtNode subThought : node.getSubThoughts()) {
            result.append("\\n  - ").append(evaluateThought(subThought));
        }
        
        String evaluation = result.toString();
        memoizationCache.put(node.getId(), evaluation);
        return evaluation;
    }
    
    private String processThought(ThoughtNode node) {
        // Custom thought processing logic
        return "Thought " + node.getId() + ": " + node.getDescription();
    }
}`
  }
};