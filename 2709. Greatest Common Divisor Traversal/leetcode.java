import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class UnionFind {
    private int[] parent;
    private int[] size;

    // Constructor initializes the Union-Find data structure
    public UnionFind(int n) {
        parent = new int[n];
        size = new int[n];
        for (int i = 0; i < n; ++i) {
            parent[i] = i; // Each node is initially its own parent
            size[i] = 1; // Initial size of each set is 1
        }
    }

    // Find the root of the set that element x belongs to
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression for efficiency
        }
        return parent[x];
    }

    // Union of two sets represented by elements a and b
    public boolean union(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);
  
        if (rootA == rootB) {
            // Elements are already in the same set
            return false;
        }
  
        // Merge two sets by comparing their sizes to maintain a balanced tree
        if (size[rootA] > size[rootB]) {
            parent[rootB] = rootA; // Attach the smaller tree's root to the larger tree's root
            size[rootA] += size[rootB]; // Update the size of the resulting tree
        } else {
            parent[rootA] = rootB;
            size[rootB] += size[rootA];
        }
        return true;
    }
}

class Solution {
    private static final int MAX_NUM = 100010;
    private static final List<Integer>[] primeFactors = new List[MAX_NUM];

    // Static block for initialization of prime factor lists for numbers up to MAX_NUM
    static {
        Arrays.setAll(primeFactors, x -> new ArrayList<>());
        for (int num = 1; num < MAX_NUM; ++num) {
            int temp = num;
            for (int i = 2; i <= temp / i; ++i) {
                if (temp % i == 0) {
                    primeFactors[num].add(i);
                    while (temp % i == 0) {
                        temp /= i;
                    }
                }
            }
            if (temp > 1) {
                primeFactors[num].add(temp); // Add remaining prime factor
            }
        }
    }

    // Method to check if it's possible to traverse all pairs of indices in the array nums
    public boolean canTraverseAllPairs(int[] nums) {
        //_maxValue holds the maximum value in nums
        int maxValue = Arrays.stream(nums).max().getAsInt();
        int n = nums.length;
      
        // Create a UnionFind object to represent graph connectivity
        UnionFind unionFind = new UnionFind(n + maxValue + 1);
      
        // Union each number with its prime factors offset by n (to avoid index collision)
        for (int i = 0; i < n; ++i) {
            for (int prime : primeFactors[nums[i]]) {
                unionFind.union(i, prime + n);
            }
        }
      
        // Add the root representative of each number to a set to check connectivity
        Set<Integer> roots = new HashSet<>();
        for (int i = 0; i < n; ++i) {
            roots.add(unionFind.find(i));
        }
      
        // If there is only one root, all nodes are connected
        return roots.size() == 1;
    }
}
