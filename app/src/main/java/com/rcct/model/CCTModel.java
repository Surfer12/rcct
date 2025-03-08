package com.rcct.model;

import java.util.HashMap;
import java.util.Map;
import reactor.core.publisher.Mono;

public class CCTModel {
    private final Map<Integer, String> memoizationCache;

    public CCTModel() {
        this.memoizationCache = new HashMap<>();
    }

    public Mono<String> evaluateThoughtNode(ThoughtNode node) {
        // Check memoization cache first
        if (memoizationCache.containsKey(node.getId())) {
            return Mono.just(memoizationCache.get(node.getId()));
        }

        // Process sub-thoughts recursively
        return Mono.just(node)
            .flatMap(n -> {
                String baseInsight = String.format("Node %d: %s", n.getId(), n.getDescription());
                
                // Process sub-thoughts if any
                if (!n.getSubThoughts().isEmpty()) {
                    StringBuilder insights = new StringBuilder(baseInsight);
                    for (ThoughtNode subThought : n.getSubThoughts()) {
                        evaluateThoughtNode(subThought)
                            .subscribe(result -> insights.append("\n  - ").append(result));
                    }
                    return Mono.just(insights.toString());
                }
                
                return Mono.just(baseInsight);
            })
            .doOnNext(result -> memoizationCache.put(node.getId(), result));
    }
} 