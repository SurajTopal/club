import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './fairPlayPolicyScreen-styles';

const FairPlayScreen = () => {
  return (
    <LinearGradient colors={['#1B242E', 'black']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.subHeader}>Last Updated: March 30, 2025</Text>

        <Text style={styles.sectionTitle}>1. Prohibited Activities</Text>
        <Text style={styles.text}>
          The following activities are strictly prohibited:
        </Text>

        <Text style={styles.listItem}>
          • Multiple Accounts - Creating or using more than one account per user
        </Text>
        <Text style={styles.listItem}>
          • Collusion - Coordinating with other users to manipulate contests
        </Text>
        <Text style={styles.listItem}>
          • Automated Play - Using bots, scripts, or automated tools to play
        </Text>
        <Text style={styles.listItem}>
          • Misinformation - Providing false personal or payment details
        </Text>
        <Text style={styles.listItem}>
          • Bonus Abuse - Exploiting referral or bonus programs improperly
        </Text>

        <Text style={styles.sectionTitle}>Zero Tolerance Policy</Text>
        <Text style={styles.text}>Violations may result in:</Text>
        <Text style={styles.listItem}>✔ Immediate account suspension</Text>
        <Text style={styles.listItem}>✔ Forfeiture of all winnings</Text>
        <Text style={styles.listItem}>✔ Permanent ban from the platform</Text>
        <Text style={styles.listItem}>✔ Legal action in severe cases</Text>

        <Text style={styles.sectionTitle}>2. Team Selection Rules</Text>
        <Text style={styles.listItem}>
          • Teams must be selected before match deadlines
        </Text>
        <Text style={styles.listItem}>
          • All player selections must reflect genuine strategy
        </Text>
        <Text style={styles.listItem}>
          • Teams showing unusual patterns may be flagged for review
        </Text>

        <Text style={styles.sectionTitle}>3. Contest Integrity</Text>
        <Text style={styles.listItem}>
          • Contests showing signs of manipulation may be canceled
        </Text>
        <Text style={styles.listItem}>
          • Scoring may be adjusted in case of stat corrections
        </Text>
        <Text style={styles.listItem}>• Violators may be disqualified</Text>
        <Text style={styles.text}>
          All decisions by Lineups regarding contests are final.
        </Text>

        <Text style={styles.sectionTitle}>4. Reporting Violations</Text>
        <Text style={styles.text}>Users can report suspicious activity:</Text>
        <Text style={styles.listItem}>
          📧 Email: contact@lineups.in (Subject: Fair Play Violation)
        </Text>
        <Text style={styles.listItem}>
          • Include contest ID, timestamp, and evidence
        </Text>
        <Text style={styles.text}>
          Reports are investigated within 72 hours.
        </Text>

        <Text style={styles.sectionTitle}>5. Responsible Gaming</Text>
        <Text style={styles.listItem}>
          • Set personal deposit limits in account settings
        </Text>
        <Text style={styles.listItem}>• Take regular breaks from gameplay</Text>
        <Text style={styles.listItem}>
          • Contact us for self-exclusion options
        </Text>

        <Text style={styles.sectionTitle}>6. Policy Updates</Text>
        <Text style={styles.text}>
          We may update this policy to address new forms of unfair play. Users
          will be notified of significant changes via email.
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default FairPlayScreen;
