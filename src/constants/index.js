export const navItems = [
  {
    name: 'Overview',
    path: '#overview',
  },
  {
    name: 'Features',
    path: '#features',
  },
  {
    name: 'About',
    path: '#about',
  },
  {
    name: 'Pricing',
    path: '#pricing',
  },
]

export const planStart = [
  {
    id: 1,
    color: 'green',
    name: 'Videos of lessons',
  },
  {
    id: 2,
    color: 'green',
    name: 'Homework check',
  },
  {
    id: 3,
    color: 'pink',
    name: 'Additional pratical task',
  },
  {
    id: 4,
    color: 'pink',
    name: 'Monthly conferences',
  },
  {
    id: 5,
    color: 'pink',
    name: 'Personal advice from teachers',
  },
]

export const planAdvance = [
  {
    id: 1,
    color: 'green',
    name: 'Videos of lessons',
  },
  {
    id: 2,
    color: 'green',
    name: 'Homework check',
  },
  {
    id: 3,
    color: 'green',
    name: 'Additional pratical task',
  },
  {
    id: 4,
    color: 'green',
    name: 'Monthly conferences',
  },
  {
    id: 5,
    color: 'pink',
    name: 'Personal advice from teachers',
  },
]

export const planPremium = [
  {
    id: 1,
    color: 'green',
    name: 'Videos of lessons',
  },
  {
    id: 2,
    color: 'green',
    name: 'Homework check',
  },
  {
    id: 3,
    color: 'green',
    name: 'Additional pratical task',
  },
  {
    id: 4,
    color: 'green',
    name: 'Monthly conferences',
  },
  {
    id: 5,
    color: 'green',
    name: 'Personal advice from teachers',
  },
]

export const footerItems = [
  {
    id: '1',
    name: 'Platform',
    attr: [
      {
        fi: 'Overview',
      },
      {
        fi: 'Features',
      },
      {
        fi: 'About',
      },
      {
        fi: 'Pricing',
      },
    ],
  },
  {
    id: '2',
    name: 'Help',
    attr: [
      {
        fi: 'How does it works?',
      },
      {
        fi: 'Where to ask question?',
      },
      {
        fi: 'How to play?',
      },
      {
        fi: 'What is needed for this?',
      },
    ],
  },
  {
    id: '3',
    name: 'Contacts',
    attr: [
      {
        fi: '(012) 1234-567-890',
      },
      {
        fi: '123 xyz xyz',
      },
      {
        fi: 'What is needed for this?',
      },
    ],
  },
]

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      opacity: 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }
}