package com.rcct.web;

import com.rcct.service.ThoughtProcessingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class VisualizationController {
    private final ThoughtProcessingService thoughtProcessingService;

    @Autowired
    public VisualizationController(ThoughtProcessingService thoughtProcessingService) {
        this.thoughtProcessingService = thoughtProcessingService;
    }

    @GetMapping("/")
    public String showVisualization() {
        return "interactive-integration-explorer";
    }
} 