<template>
  <div>}
    <Board :name="`fll-${board || defaultBoard.number}`" :options="getOptions" @board="setBoard" />
  </div>
</template>

<script>
import { Board } from '../components/'
export default {
    name: 'FLL',

    components: {
      Board,
    },

    computed: {
      defaultBoard() {
        return this.boards[0]
      },

      getOptions() {
        return this.boards.find(board => board.number === this.board).options
      },
    },

    data() {
      return {
        board: 1,
        boards: [
          {
            number: 1,
            options: [
            {
              number: 1,
              button: {
                text: 'Andar 3 casas',
                event: () => { this.toggle(1, 1) },
                solution: {
                  visible: false,
                  board: 2,
                }
              },
            },
            {
              number: 2,
              button: {
                text: 'Andar -3 casas',
                event: () => { this.toggle(1, 2) },
                solution: {
                  visible: false,
                  board: 3,
                }
              },
            },
            {
              number: 3,
              button: {
                text: 'Girar 90º',
                event: () => { this.toggle(1, 3) },
                solution: {
                  visible: false,
                  board: 4,
                },  
              },
            },
          ] 
        },

        {
            number: 2,
            options: [
            {
              number: 1,
              button: {
                text: 'Girar 90º',
                event: () => { this.toggle(2, 1) },
                solution: {
                  visible: false,
                  board: 2,
                }
              },
            },
            {
              number: 2,
              button: {
                text: 'Andar 3 casas',
                event: () => { this.toggle(2, 2) },
                solution: {
                  visible: false,
                  board: 3,
                }
              },
            },
            {
              number: 3,
              button: {
                text: 'Girar 120º',
                event: () => { this.toggle(2, 3) },
                solution: {
                  visible: false,
                  board: 4,
                },  
              },
            },
          ] 
        }
      ],
    }
  },

    methods: {
      toggle(boardNumber, optionNumber) {
        let solution = this.boards.find(board => board.number === boardNumber)
          .options.find(option => option.number === optionNumber).button.solution
        solution.visible = !solution.visible;
      },

      setBoard(board) {
        this.board = board
      },
    }
}
</script>

<style>

</style>