const questions = [
  {
    question: 'Who are the road-users?',
    image: [
      {
        id: '01',
        source: require('../assets/check.png')
      }
    ],
    answers: [
      { id: '1', text: 'Drivers and passengers' },
      { id: '2', text: 'Pedestrians and cyclists', correct: true },
      { id: '3', text: 'Wheel-chair walkers' },
      { id: '4', text: 'All of the above' }
    ]
  },
  {
    question: 'What is a traffic signal?',
    image: [
      {
        id: '02',
        source: require('../assets/download.jpg')
      }
    ],
    answers: [
      {
        id: '1',
        text:
          'Visual signals (stop-sign, traffic-lights) to control road-user’s movement'
      },
      {
        id: '2',
        text:
          'Audible signals (car horn, voice at pedestrian crossing) to control road-user’s movement'
      },
      { id: '3', text: 'Both a and b' },
      { id: '4', text: 'None of the above', correct: true }
    ]
  },
  {
    question: 'Where do you see these signals?',
    image: [
      {
        id: '03',
        source: ''
      }
    ],
    answers: [
      { id: '1', text: 'On the sidewalk next to a crosswalk' },
      { id: '2', text: 'At the middle of the road' },
      { id: '3', text: 'On the sidewalk that is not next to a crosswalk' },
      {
        id: '4',
        text: '. Roads where pedestrians are not allowed to cross',
        correct: true
      }
    ]
  },
  {
    question: 'What is the purpose of these signals?',
    image: [
      {
        id: '04',
        source: ''
      }
    ],
    answers: [
      { id: '1', text: 'Helps pedestrians to cross the road safely' },
      { id: '2', text: 'Helps cyclists to cross the road safely' },
      { id: '3', text: 'Helps drivers to drive their cars safely' },
      { id: '4', text: 'Both a and b', correct: true }
    ]
  }
];

export default questions;
