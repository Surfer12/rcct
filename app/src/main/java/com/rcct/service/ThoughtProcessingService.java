package com.rcct.service;

import com.rcct.model.CCTModel;
import com.rcct.model.ThoughtNode;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class ThoughtProcessingService {
    private final CCTModel cctModel;

    public ThoughtProcessingService() {
        this.cctModel = new CCTModel();
    }

    public Mono<String> processThought(ThoughtNode node) {
        return cctModel.evaluateThoughtNode(node);
    }
} 