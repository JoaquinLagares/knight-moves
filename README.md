# Knight Moves

Simple utility to find the shortest sequence of knight moves on a standard 8×8 chessboard.

Files
- [index.js](index.js) — main implementation containing:
  - [`knightPossibleMoves`](index.js) — the set of relative knight moves
  - [`getValidMoves`](index.js) — filters knight moves to the board bounds
  - [`knightMoves`](index.js) — BFS routine that finds and prints the shortest path

Overview
- Board coordinates use zero-based indices: valid x and y are in the range $0$..$7$.
- Start and end positions are arrays of two integers: `[x, y]`.

Usage
1. Run the example included in the workspace:
   ```sh
   node index.js