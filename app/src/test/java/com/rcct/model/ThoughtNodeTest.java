package com.rcct.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.Test;

class ThoughtNodeTest {
    @Test
    void testThoughtNodeCreation() {
        ThoughtNode node = new ThoughtNode(1, "Test Thought");
        assertEquals(1, node.getId());
        assertEquals("Test Thought", node.getDescription());
        assertTrue(node.getSubThoughts().isEmpty());
        assertNull(node.getAliasNode());
    }

    @Test
    void testAddSubThought() {
        ThoughtNode parent = new ThoughtNode(1, "Parent");
        ThoughtNode child = new ThoughtNode(2, "Child");
        
        parent.addSubThought(child);
        
        assertEquals(1, parent.getSubThoughts().size());
        assertEquals(child, parent.getSubThoughts().get(0));
    }
} 