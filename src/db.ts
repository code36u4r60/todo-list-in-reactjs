import { v4 as uuid } from 'uuid'

export const tasks = [
  {
    id: uuid(),
    content: 'Estudar ReactJs - Fazer entrega do projeto para avaliação.',
    isComplete: false
  },
  {
    id: uuid(),
    content:
      'Estudar Node - Iniciar um projeto a solo com o conteúdo apreendido.',
    isComplete: false
  },
  {
    id: uuid(),
    content: 'Trabalho em Casa - Mudar areia da gata.',
    isComplete: false
  },
  {
    id: uuid(),
    content: 'Trabalho em Casa - Limpar a cozinha e a sala.',
    isComplete: true
  },
  {
    id: uuid(),
    content: 'Compras - Comprar carne e frutas.',
    isComplete: true
  }
]
