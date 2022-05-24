const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Welcome to the Escape Room, subject 1. Your time has now started... Good luck!',
    options: [
      {
        text: 'Left Wall',
        nextText: 2
      },
      {
        text: 'Door',
        nextText: 3
      },
      {
        text: 'Back Wall',
        nextText: 4
      },
      {
        text: 'Right Wall',
        nextText: 5
      }
    ]
  },
  {
    id: 2,
    text: 'An ordinary, dusty bookshelf. Not the time to read, you gotta get out of here!',
    options: [
      {
        text: 'Go back',
        nextText: 8
      }
    ]
  },
  {
    id: 3,
    text: 'A code locked door. This has to be the way out. But whats the code?',
    options: [
      {
        text: 'Go back',
        nextText: 8
      }
    ]
  },    
  {
    id: 4,
    text: 'A bed touches the wall. Not the time to sleep, you gotta escape!',
    options: [
      {
        text: 'Go back',
        nextText: 8
      }
    ]
  },
  {
    id: 5,
    text: 'A tattered, framed painting of the room, firmly nailed to the wood. Like a mirror, it reflects the walls, the bed, the door and the bookshelf.',
    options: [
      {
        text: 'Go back',
        nextText: 8
      },
      {
        text: 'Look closer',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'You see a faint glow painted under the bed...',
    options: [
      {
        text: 'Go back',
        nextText: 19
      }
    ]
  },
  {
    id: 7,
    text: 'A bed touches the wall.',
    options: [
      {
        text: 'Lift bed',
        nextText: 9
      },
      {
        text: 'Go back',
        nextText: 19
      }
    ]
  },
  {
    id: 8,
    text: 'Times running out...',
    options: [
      {
        text: 'Left Wall',
        nextText: 2
      },
      {
        text: 'Door',
        nextText: 3
      },
      {
        text: 'Back Wall',
        nextText: 4
      },
      {
        text: 'Right Wall',
        nextText: 5
      }
    ]
  },
  {
    id: 9,
    text: 'You lift the bed and find a small hammer. Now what?',
    options: [
      {
        text: 'Go back',
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: 'Better hurry...',
    options: [
      {
        text: 'Right Wall',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: 'The framed painting still hangs tightly.',
    options: [
      {
        text: 'Use hammer',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text: 'With the hammer, you break the picture frame. You take out the painting and look behind it. A code!',
    options: [
      {
        text: 'Go back',
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    text: "Now we can escape!",
    options: [
      {
        text: 'Door',
        nextText: 14
      }
    ]
  },
  {
    id: 14,
    text: 'A code locked door. This has to be the way out.',
    options: [
      {
        text: 'Try code',
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    text: 'You punch in the code. The door doesnt open. Instead, a compartment is released, with a small paper inside. It reads ... the door of true knowledge will open to the light ...',
    options: [
      {
        text: 'Go back',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: "What could that mean?",
    options: [
      {
        text: 'Left Wall',
        nextText: 17
      }
    ]
  },
  {
    id: 17,
    text: "An ordinary, dusty bookshelf.",
    options: [
      {
        text: 'shift book',
        nextText: 18
      }
    ]
  },
  {
    id: 18,
    text: "Shifting the book, the shelf begins to shift, plowing dust around the room. Daylight hits your eyes, and you step out. Reborn in pride and relief, YOU ESCAPED! :D",
    options: [
      {
        text: 'nice',
        nextText: 1
      }
    ]
  },
  {
    id: 19,
    text: 'Times ticking...',
    options: [
      {
        text: 'Back Wall',
        nextText: 7
      }
    ]
  }
]

startGame()
