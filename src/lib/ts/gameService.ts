import { createMachine, interpret } from "xstate";

const gameMachine = createMachine({
    id: "Game Machine",
    initial: "characterSelect",
    states: {
      characterSelect: {
        on: {
          SELECT_CHARACTER: {
            target: "battle",
          },
        },
      },
      battle: {
        on: {
          PLAYER_DEAD: {
            target: "deadScreen",
          },
          PLAYER_WIN: {
            target: "winScreen",
          },
        },
      },
      deadScreen: {},
      winScreen: {
        on: {
          NEXT_BATTLE: {
            target: "battle",
          },
        },
      },
    },
    schema: {
      events: {} as
        | { type: "SELECT_CHARACTER" }
        | { type: "PLAYER_DEAD" }
        | { type: "PLAYER_WIN" }
        | { type: "NEXT_BATTLE" },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  });

  export const gameService = interpret(gameMachine).start()