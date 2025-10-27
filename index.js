

const knightPossibleMoves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [2, -1],
    [1, -2],
    [-2, 1],
    [-1, -2],
    [-2, 2]
];

function getValidMoves([x, y]) {

    return knightPossibleMoves
        .map(([dx, dy]) => [x + dx, y + dy])
        .filter(([nx, ny]) => nx >= 0 && nx < 8 && ny >= 0 && ny < 8)

}

function knightMoves(start, end) {
    const queue = [[start]];
    const visited = new Set()

    while (queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length - 1];
        const key = `${x},${y}`

        if (key === `${end[0]},${end[1]}`) {
            console.log(`You made it in ${path.length - 1} moves`)
            path.forEach(p => console.log(p));
            return path
        }

        if (!visited.has(key)) {
            visited.add(key);
            const moves = getValidMoves([x, y]);
            for (const move of moves) {
                queue.push([...path, move])
            }
        }
    }


}

console.log(knightMoves([3, 3], [4, 3]));