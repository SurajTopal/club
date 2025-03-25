export const GET_BASE_URL = 'http://13.234.66.80';

export const HOW_TO_PLAY = {
  selectMatch: {
    title: 'Select a match & join a contest',
    points: [
      "After selecting a match, you'll see a variety of contests to choose from.",
      'With multiple contests available, pick the one that you want to join.',
      'Remember to add cash to your account and join contests.',
    ],
  },
  checkYourProgress: {
    title: 'Check your progress',
    points: [
      'Check your ranking on the leaderboard for real-time updates.',
      'See how you are performing compared to other players.',
      'Track your progress throughout the contest easily.',
    ],
  },
  getYourWinnings: {
    title: 'Get your Winnings',
    points: [
      "Once the match ends, check the results to see if you've won.",
      'If you win, your winnings will be added to your account.',
    ],
  },
  createYourTeam: {
    title: 'Create Your Team',
    rules: [
      {
        title: 'Create your team',
        points: [
          'Select any 4 players and answer questions to create your team.',
          'Each player’s performance will have 2 questions; you can answer only 1.',
          'Based on past performances and stats, use your skills to answer the questions.',
        ],
      },
      {
        title: 'Player Categories',
        points: [
          'Bowlers: Questions based on bowling performance.',
          'Batters: Questions based on batting performance.',
          'All-rounders: Available in both categories (batting and bowling).',
        ],
      },
      {
        title: 'Points System',
        points: [
          'Correct answers = Points added to your total score.',
          'Wrong answers = No points.',
        ],
      },
      {
        title: 'Player Details',
        points: [
          'Recent performance visible near player name/image.',
          'Tap the player’s image for full performance details.',
        ],
      },
      {
        title: 'Captain and Vice-Captain Selection',
        points: ['Captain earns 2x points.', 'Vice-Captain earns 1.5x points.'],
      },
      {
        title: 'Team Limitations',
        points: [
          'Max 20 teams can be created.',
          'Join multiple contests with different teams.',
        ],
      },
      {
        title: 'Pro Tips',
        points: [
          'Check lineups before the match starts.',
          'Review team’s batting order for adjustments pre-match.',
          'No edits allowed once the match begins.',
        ],
      },
    ],
  },
  scoringPoints: {
    title: 'Scoring Points',
    rules: [
      {
        title: 'Scoring Points',
        points: ['You will only get points for correct answers.'],
      },
      {
        title: 'In case of Specific Scenarios',
        points: [
          'You will only get points if the player performances match your selected answer.',
        ],
      },
      {
        title: 'In case of Announced Players',
        points: [
          "If your player is announced and doesn't play, you will only get points if your answer is 'NO' for either of the two questions.",
        ],
      },
      {
        title: 'In case of Substitute/Impact Player',
        points: [
          'You will only get points if your substitute player comes to play.',
          "If they are a bowler who only fields and doesn’t bowl, you will get points only if you selected 'NO' for either of the two questions.",
          "If they are a batter who doesn’t bat, you will get points only if you selected 'NO' for either of the two questions.",
        ],
      },
      {
        title: 'In case of Unannounced Player',
        points: [
          'If the player you selected an answer for is unannounced, then you won’t get any points.',
        ],
      },
      {
        title: 'In case of Super Over',
        points: [
          'In case of a Super over, points for runs and wickets will NOT be added to your team score regardless of the answers you’ve picked.',
        ],
      },
      {
        title: 'In case of C/VC (Captain/Vice Captain)',
        points: [
          'Captain = 2x points, Vice captain = 1.5x points. These points along with the points of your other players add to the total team score.',
          'More points = higher rank on leaderboard.',
        ],
      },
    ],
  },
};

export const FAQ = [
  {title: 'What is HighRolllerClub?'},
  {title: 'How do I edit my teams?'},
  {title: 'Can I edit a team after the match starts?'},
  {title: 'Can I join a contest with multiple teams?'},
  {
    title:
      'What happens if an incorrect starting lineup is officially announced?',
  },
  {title: 'Can I delete a team?'},
  {title: 'How do you switch teams in a contest?'},
  {
    title:
      'What happens when one or more of my selected players do not play in the match?',
  },
  {title: 'Why am I able to see matches only for some tours and not all?'},
  {title: 'How do I understand a contest on HighRolllerClub?'},
  {title: 'What are the different types of contests?'},
  {title: 'How do I join a Public Contest?'},
  {title: 'Do unfilled public contests get canceled?'},
  {title: 'How do I view my match performance on HighRolllerClub?'},
  {title: 'What happens when a match is tied?'},
  {title: 'How many teams can I create per match?'},
];

export const HIT_SLOP_FIVE = {left: 5, right: 5, bottom: 5, top: 5};
