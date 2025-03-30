import React from 'react';
import {Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './privacyPolicyScreen-styles';

const PrivacyPolicyScreen = () => {
  return (
    <LinearGradient colors={['#1B242E', 'black']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.subHeading}>Last Updated: March 30, 2025</Text>

        <Text style={styles.sectionTitle}>1. Information We Collect</Text>
        <Text style={styles.text}>
          We collect the following data during registration and usage:
        </Text>
        <Text style={styles.listItem}>
          • Personal Information: Name, mobile number, Aadhaar card details,
          date of birth, bank account details
        </Text>
        <Text style={styles.listItem}>
          • Device & Usage Data: IP address, device type, browser details, and
          login activity
        </Text>
        <Text style={styles.listItem}>
          • Financial Data: Deposit history, winnings, withdrawal transactions
        </Text>

        <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
        <Text style={styles.text}>
          • User verification (KYC) via third-party services
        </Text>
        <Text style={styles.text}>
          • Processing contest participation and withdrawals
        </Text>
        <Text style={styles.text}>
          • Ensuring platform security and fraud prevention
        </Text>
        <Text style={styles.text}>
          • Sending promotional and transactional messages
        </Text>

        <Text style={styles.sectionTitle}>
          3. Data Sharing & Third-Party Services
        </Text>
        <Text style={styles.text}>
          We do not sell user data. However, we share it with:
        </Text>
        <Text style={styles.listItem}>• KYC Verification Providers</Text>
        <Text style={styles.listItem}>• Payment Gateways</Text>
        <Text style={styles.listItem}>• Analytics Tools</Text>

        <Text style={styles.sectionTitle}>4. Security Measures</Text>
        <Text style={styles.text}>• Data encryption for secure storage</Text>
        <Text style={styles.text}>
          • Access controls to prevent unauthorized access
        </Text>
        <Text style={styles.text}>• Regular audits to enhance security</Text>

        <Text style={styles.sectionTitle}>5. User Rights</Text>
        <Text style={styles.text}>
          Users can access, update, or delete their data by contacting support.
        </Text>

        <Text style={styles.sectionTitle}>
          6. Cookies & Tracking Technologies
        </Text>
        <Text style={styles.text}>
          We use cookies and tracking tools for analytics and improving user
          experience.
        </Text>

        <Text style={styles.sectionTitle}>7. Retention & Deletion</Text>
        <Text style={styles.text}>
          We retain user data as required by Indian laws. Non-essential data is
          removed upon account deletion.
        </Text>

        <Text style={styles.sectionTitle}>8. Changes to Policy</Text>
        <Text style={styles.text}>
          This policy may be updated periodically. Users will be notified of
          significant changes.
        </Text>

        <Text style={styles.sectionTitle}>9. Contact Us</Text>
        <Text style={styles.text}>
          For privacy concerns, contact: contact@lineups.in
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default PrivacyPolicyScreen;
