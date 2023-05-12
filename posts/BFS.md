---
title: 'BFS Interview Guide'
date: '2023-05-11'
---

# **Breadth First Search**

## Summary
Breadth First Search (BFS) is an algorithm used to traverse trees and graph like data structures.
It prioritizes reaching all nodes of the same level before diving deeper -- breadthwise traversal. 

Put simply, proceed layer by layer, traversing left to right.

BFS relies on a queue /  deque like data structure to store nodes.
This queue / deque oprates on FIFO principle.
Commonly, a BFS algorithm relies on a "visited" data structure to avoid repeated vists to nodes.


## Simple Algorithm
1. Start with the source node.
2. Add that node at the front of the queue to the visited list.
3. Make a list of the nodes as visited that are close to that vertex.
4. And dequeue the nodes once they are visited. 
5. Repeat the actions until the queue is empty.

## Constraints
- You can take any node as your source node or root node.
- You should explore all the nodes.
- And don't forget to explore on repeated nodes.
- You must transverse the graph in a breadthwise direction, not depthwise.


## Detailed Coding Steps

1. Preprocessing

2. Create queue / deque to store information
- This needs to include the next layer of nodes as well as any information that needs to be relayed.

3. Initialize set of "seen" / "visited" nodes
- This may or may not include node + additional information

4. Iterative portion
- While the queue / deque is still populated, pop elements one by one and proceed

5. Disassemble queue / deque information

6. Check to see if condition was met on this specific node
- This is where the iterative portion is able to exit and return an output

7. Verify validity of the logic

8. Make changes as necessary

9. Append to queue / deque and add to "seen" / "visited" node and continue

10. If by the time the iterative portion finishes and no output is found, then there doesn't exist an answer.

## Complexity Information
|V| is the number of vertices

|E| is the number of edges

- Time Complexity: O(|V|+|E|) --> O(n)
- Space Complexity: O(|V|) --> O(n)


## Coding Example

[LeetCode 100. Same Tree](https://leetcode.com/problems/same-tree/)
~~~~python
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # Initialize Queue
        deq = collections.deque([(p,q)])

        # Iterative Portion
        while (deq):
            # Disassemble
            new_p, new_q = deq.popleft()
            
            # Is condition met? Is this valid?
            if not new_p and not new_q: continue
            elif not new_p or not new_q: return False
            else:
                # Append new nodes as necessary
                if new_p.val != new_q.val: return False
                deq.append((new_p.left, new_q.left))
                deq.append((new_p.right, new_q.right))
            
        return True
~~~~

Reference: 

[All You Need to Know About Breadth-First Search Algorithm](https://www.simplilearn.com/tutorials/data-structure-tutorial/bfs-algorithm) [Feb 20, 2023]