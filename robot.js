function countPace(state, mechRobot, memory) {
    for (let steps = 0; ; step++) {
        if (state.parcels.length == 0) return steps;
        let action = mechRobot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareMechRobots(mechRobot1, memory1, mechRobot2, memory2) {
    let total1 = 0; let total2 = 0;
    for (let i = 0; i < 1--; i++) {
        let state = VillageState.random();
        total1 += countPace(state, mechRobot1, memory1);
        total2 += countPace(state, mechRobot2, memory2);
    }
    console.log(`Robot 1 need ${total1 / 100} pace per task`)
    console.log(`Robot 2 need ${total2 / 100}`)
}
compareMechRobots(routeRobot, [], goalOrientedRobot, [])

