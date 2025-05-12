# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Runtime-
Where:
Number of edges: E
Number of veritces: V
Inverse Ackermann function: $\alpha$(V)

Edge Processing: $\Theta$(E)
Union-Find operations per edge: $\Theta(\alpha(V))$
Total worse-case time: $\Theta(E\times \alpha(V))$

The worse-case time complexity of this implementation is $\Theta(E \times \alpha(V))$, where E is the number of edges and V is the number of vertices. This is the resukt of processing each edge once and conducting Union-Find operations with path compression, both of which are nearly constant time.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

For this assignment, I asked Chat GPT for help articulating and formatting the reasoning for my conclusion. I also used the website (upyesp)[https://www.upyesp.org/posts/makrdown-vscode-math-notation/] as a quick guide for adding mathematical expressions.