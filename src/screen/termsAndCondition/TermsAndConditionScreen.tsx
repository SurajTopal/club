import React from 'react';
import {Text, ScrollView} from 'react-native';

import {styles} from './termsAndConditionScreen-styles';
import LinearGradient from 'react-native-linear-gradient';

const TermsAndConditionsScreen = () => {
  return (
    <LinearGradient colors={['#1B242E', 'black']} style={styles.container}>
      <ScrollView style={styles.subContainer}>
        <Text style={styles.date}>Last Updated: March 30, 2025</Text>

        <Text style={styles.sectionTitle}>1. Eligibility</Text>
        <Text style={styles.text}>
          - You must be 18 years or older to use Lineups.
        </Text>
        <Text style={styles.text}>
          - Users must be Indian residents and comply with local laws regarding
          fantasy sports.
        </Text>
        <Text style={styles.text}>
          - Employees or associates of Lineups cannot participate in contests.
        </Text>

        <Text style={styles.sectionTitle}>
          2. Account Registration & Verification
        </Text>
        <Text style={styles.text}>
          - Register using your mobile number with accurate details:
        </Text>
        <Text style={styles.text}> - Full name</Text>
        <Text style={styles.text}> - Aadhaar number</Text>
        <Text style={styles.text}> - Date of birth</Text>
        <Text style={styles.text}> - Bank details (for withdrawals)</Text>
        <Text style={styles.text}>
          - Identity verification through third-party KYC providers.
        </Text>
        <Text style={styles.text}>
          - You are responsible for account security.
        </Text>

        <Text style={styles.sectionTitle}>3. Fantasy Sports Contests</Text>
        <Text style={styles.text}>
          - Create teams using predefined player points for real-world matches
          (cricket/football).
        </Text>
        <Text style={styles.text}>
          - Entry fees and prizes vary per contest (displayed before joining).
        </Text>
        <Text style={styles.text}>
          - Different contests may have unique rules and scoring systems.
        </Text>

        <Text style={styles.sectionTitle}>4. Withdrawals & Wallets</Text>
        <Text style={styles.text}>
          - Minimum ₹100 withdrawal to linked bank account.
        </Text>
        <Text style={styles.text}>- Wallet types:</Text>
        <Text style={styles.text}> - Deposit Wallet: Funds added by users</Text>
        <Text style={styles.text}> - Winning Wallet: Contest winnings</Text>
        <Text style={styles.text}>
          - Withdrawals require KYC verification and processing time.
        </Text>

        <Text style={styles.sectionTitle}>
          5. Refunds & Contest Cancellations
        </Text>
        <Text style={styles.text}>
          - Canceled contests: Fees refunded to original wallet
          (Deposit/Winning).
        </Text>
        <Text style={styles.text}>- No refunds for completed contests.</Text>

        <Text style={styles.sectionTitle}>6. Taxes & Compliance</Text>
        <Text style={styles.text}>
          - Users must declare and pay taxes on winnings.
        </Text>
        <Text style={styles.text}>
          - TDS applies on withdrawals exceeding taxable limits as per Indian
          law.
        </Text>

        <Text style={styles.sectionTitle}>7. Dispute Resolution</Text>
        <Text style={styles.text}>
          - Lineups' decisions on contests/results are final.
        </Text>
        <Text style={styles.text}>
          - Raise disputes via customer support within 48 hours of contest
          completion.
        </Text>

        <Text style={styles.sectionTitle}>8. Prohibited Activities</Text>
        <Text style={styles.text}>
          - Fraud, cheating, or multiple accounts.
        </Text>
        <Text style={styles.text}>
          - Violations may cause account suspension or legal action.
        </Text>

        <Text style={styles.sectionTitle}>9. Advertising & Promotions</Text>
        <Text style={styles.text}>
          - Lineups may display ads and run social media promotions.
        </Text>
        <Text style={styles.text}>
          - Registration implies consent to receive promotional messages/emails.
        </Text>

        <Text style={styles.sectionTitle}>10. Liability & Indemnity</Text>
        <Text style={styles.text}>- Lineups is not responsible for:</Text>
        <Text style={styles.text}> - Technical failures</Text>
        <Text style={styles.text}> - Incorrect match data</Text>
        <Text style={styles.text}> - Third-party service issues</Text>
        <Text style={styles.text}>- Users participate at their own risk.</Text>

        <Text style={styles.sectionTitle}>11. Changes to Terms</Text>
        <Text style={styles.text}>
          - Lineups may modify these Terms anytime.
        </Text>
        <Text style={styles.text}>
          - Continued use means acceptance of revised Terms.
        </Text>

        <Text style={styles.sectionTitle}>12. Contact Us</Text>
        <Text style={styles.text}>For queries: contact@lineups.in</Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default TermsAndConditionsScreen;
