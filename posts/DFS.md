---
title: 'DFS Interview Guide'
date: '2023-05-11'
---

# **Depth First Search**

## Summary
Depth First Search (DFS) is an algorithm used to traverse trees and graph like data structures.
It aims to examine each branch as far as possible before backtracking and continuing down another node

Put simply, proceed layer by layer, one a singular node and its children.

DFS relies on a stack like data structure to store nodes.
This stack oprates on FILO principle. At most, this stack will have a maximum size equal to the total number of vertices in the graph.
Commonly, a DFS algorithm relies on a "visited" data structure to avoid repeated vists to nodes.


## Simple Algorithm
1. Create a stack with the total number of vertices in the graph as the size.

2. Choose any vertex as the traversal's beginning point. Push a visit to that vertex and add it to the stack.

3. Push any non-visited adjacent vertices of a vertex at the top of the stack to the top of the stack.

4. Repeat steps 3 and 4 until there are no more vertices to visit from the vertex at the top of the stack.

5. If there are no new vertices to visit, go back and pop one from the stack using backtracking.

6. Continue using steps 3, 4, and 5 until the stack is empty.

7. When the stack is entirely unoccupied, create the final spanning tree by deleting the graph's unused edges.

## Constraints
- You can take any node as your source node or root node.
- You should explore all the nodes.
- And don't forget to explore on repeated nodes.
- You must transverse the graph in a breadthwise direction, not depthwise.


## Detailed Coding Steps

1. Preprocessing

2. Create stack to store information
- This needs to include the current node, to breadcrumb our solution

3. Iterative portion
- While the stack is still populated OR max depth isn't reached, pop elements one by one and proceed

4. Verify validity of the logic

5. Make changes as necessary

6. Append to stack and continue

## Complexity Information
|V| is the number of vertices

|E| is the number of edges

- Time Complexity: O(V + E) --> O(n)
- Space Complexity: O(|V|) --> O(n)


## Coding Example

[LeetCode 94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/description/)
~~~~python
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # PreProcess
        result = []

        # Init Stack and ptr
        stack = []
        ptr = root

        # While node exists | stack is populated
        while ptr or stack:
            # Move all the way to the left
            while ptr:
                stack.append(ptr)
                ptr = ptr.left
            
            # Go back using the stack
            ptr = stack.pop()
            result.append(ptr.val)
            ptr = ptr.right
        
        return result
~~~~

Reference: 

[Learn Depth-First Search(DFS) Algorithm From Scratch](https://www.simplilearn.com/tutorials/data-structure-tutorial/dfs-algorithm) [Feb 20, 2023]