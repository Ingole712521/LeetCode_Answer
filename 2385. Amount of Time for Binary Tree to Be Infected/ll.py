from collections import defaultdict, deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        # Depth-First Search to build the graph from the binary tree.
        def dfs(node):
            if node is None:
                return
            # Connect current node with left child if it exists.
            if node.left:
                graph[node.val].append(node.left.val)
                graph[node.left.val].append(node.val)
            # Connect current node with right child if it exists.
            if node.right:
                graph[node.val].append(node.right.val)
                graph[node.right.val].append(node.val)
            # Recursive call for left and right children.
            dfs(node.left)
            dfs(node.right)

        # Initialize a default dictionary for the graph representation.
        graph = defaultdict(list)
        # Start DFS traversal to build graph.
        dfs(root)
        # Initialize a set to keep track of visited nodes.
        visited = set()
        # Initialize a queue with the starting node.
        queue = deque([start])
        # Initialize time counter.
        time = -1
        # Execute until the queue is empty.
        while queue:
            # Increase time each level we go deeper in the graph.
            time += 1
            # Traverse nodes at the current level.
            for _ in range(len(queue)):
                current_node = queue.popleft()
                visited.add(current_node)
                # Explore all the neighbors of the current node.
                for neighbor in graph[current_node]:
                    if neighbor not in visited:
                        queue.append(neighbor)
        # Return the total amount of time.
        return time