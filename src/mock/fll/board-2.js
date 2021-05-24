export default {
  number: 2,
  options: [
    {
      number: 1,
      button: {
        text: 'Andar 3 casas',
        solution: {
          visible: false,
          board: 4,
        }
      },
    },
    {
      number: 2,
      button: {
        text: 'Girar a direita e andar 3 casas',
        solution: {
          visible: false,
          board: 3,
        }
      },
    },
    {
      number: 3,
      button: {
        text: 'Virar a direita',
        solution: {
          visible: false,
          board: 5,
        },
      },
    },
  ]
}