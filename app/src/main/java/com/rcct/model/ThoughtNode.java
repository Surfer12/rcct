package com.rcct.model;

import java.util.ArrayList;
import java.util.List;

public class ThoughtNode {
    private final int id;
    private final String description;
    private final List<ThoughtNode> subThoughts;
    private ThoughtNode aliasNode;

    public ThoughtNode(int id, String description) {
        this.id = id;
        this.description = description;
        this.subThoughts = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public List<ThoughtNode> getSubThoughts() {
        return subThoughts;
    }

    public ThoughtNode getAliasNode() {
        return aliasNode;
    }

    public void setAliasNode(ThoughtNode aliasNode) {
        this.aliasNode = aliasNode;
    }

    public void addSubThought(ThoughtNode thought) {
        subThoughts.add(thought);
    }
} 