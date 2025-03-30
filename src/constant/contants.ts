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
  {
    title: 'What is Lineups?',
    description: [
      "Lineups is a simple and exciting new sports game where you select any 4 players and answer 1 question each about the players' performance.",
      'Based on past performances and stats, you can use your knowledge and skill to select the players and answer the questions on the players’ performance in the upcoming match.',

      'After selecting your answers and creating your team, you can join multiple contests that you want with your team.',
      'For each answer, you will get points based on the player’s performance in the match. If your answers are correct and match the player’s performance, the points will be added to your team score.',
      'You can check the leaderboard for real-time updates on your rank and also check if you are winning. If you top the leaderboard, you will win.',
    ],
  },
  {
    title: 'How do I edit my teams?',
    description: [
      'Go to My Teams and tap the team card at the top.',
      'Click on the pencil icon to edit your team.',
      'You can unselect, reselect, or select a new player and answer based on the lineups and your research and skill.',
    ],
  },
  {
    title: 'Can I edit a team after the match starts?',
    description: ['No, you cannot edit your team once the match starts.'],
  },
  {
    title: 'Can I join a contest with multiple teams?',
    description: ['Yes! You can join a contest with up to 20 different teams.'],
  },
  {
    title:
      'What happens if an incorrect starting lineup is officially announced?',
    description: [
      'You are required to conduct your own independent research.',
      'Please note, we receive information from third-party service providers. In the event of any inconsistency identified or brought to our notice, we will try to rectify the same.',
      'However, we are not responsible for failure of such third-party service provider information.',
    ],
  },
  {
    title: 'Can I delete a team?',
    description: [
      'No, you cannot delete a team. Once your team is created, it will remain in the My Teams section.',
    ],
  },
  {
    title: 'How do you switch teams in a contest?',
    description: [
      'Switch team functionality is currently not available on Picks.',
      'Currently, you can only edit your team selection before joining a contest.',
    ],
  },
  {
    title:
      'What happens when one or more of my selected players do not play in the match?',
    description: [
      'Let’s look at some scenarios:',
      'In case of announced players:',
      'If your player is announced and doesn’t play, then you will only get points:',
      'If your answer is “NO” for “22 runs or more” or “NO” for “2 wickets or more”',
      'In case of substitute/impact player:',
      'You will only get points if your substitute player comes to play.',
      'If he’s a bowler who doesn’t bowl but fields, then you will get points only if you selected “NO” for “2 wickets or more”',
      'If he’s a batter who doesn’t bat but fields, then you will get points only if you selected “NO” for “22 runs or more”.',
      'In case of unannounced players:',
      'If the player you selected an answer for is unannounced, then you won’t get any points.',
      'In case of a Super Over:',
      'In the case of a Super Over, points for runs and wickets will NOT be added to your team score regardless of the answers you’ve picked.',
    ],
  },
  {
    title: 'Why am I able to see matches only for some tours and not all?',
    description: [
      'Currently, we are only hosting matches for selected tournaments.',

      'But don’t worry, we’ll be sure to add more exciting matches and tours!',
    ],
  },
  {
    title: 'How do I understand a contest on Lineups?',
    description: [
      'You will be able to identify and understand a contest from its name.',

      'For example:',

      'Mega Contest: The contest with the biggest mega prize.',
      'Practice Contest: A contest where you can join with your team, but there are no monetary winnings.',
    ],
  },
  {
    title: 'What are the different types of contests?',
    description: [
      'All contests are Public, which are open for all to join.',

      'Within Public contests, we have:',
      'Special contests: Offer bigger guaranteed rewards.',
      'Flexible contests: Paid contests that do not get cancelled even if only two teams join.',
    ],
  },
  {
    title: 'How do I join a Public Contest?',
    description: [
      'After selecting answers and creating your team, you can view all the contests available for a match.',

      'Once you’ve decided which contest you want to join, simply tap on the green entry button and join the contest using your Dream11 account.',
    ],
  },
  {
    title: 'Do unfilled public contests get canceled?',
    description: ['Yes, unfilled contests get canceled.'],
  },
  {
    title: 'How do I view my match performance on Lineups?',
    description: [
      'You can visit the Leaderboard and view your team performance for each match and contest.',
    ],
  },
  {
    title: 'What happens when a match is tied?',
    description: [
      'We declare winners based on the players’ performance in the match.',

      'The final tally of points is calculated at the end of the match, and winners are declared based on ranks.',
    ],
  },
  {
    title: 'How many teams can I create per match?',
    description: [
      'You can create up to a maximum of 20 teams for a single match and join contests.',
    ],
  },
];

export const HIT_SLOP_FIVE = {left: 5, right: 5, bottom: 5, top: 5};
