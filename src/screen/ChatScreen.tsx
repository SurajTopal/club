// Example usage in a component
import React from 'react';
import {View, Text, Button} from 'react-native';
import useWebSocket from '../webSocket/webSockerManager';

const ChatScreen = () => {
  const {isConnected, messages, error, sendMessage} =
    useWebSocket('http://localhost:3000');

  const handleSendMessage = () => {
    sendMessage({type: 'chat', content: 'Hello!'});
  };

  return (
    <View>
      <Text>
        Connection Status: {isConnected ? 'Connected' : 'Disconnected'}
      </Text>
      {error && <Text style={{color: 'red'}}>{error}</Text>}

      <Button
        title="Send Message"
        onPress={handleSendMessage}
        disabled={!isConnected}
      />

      {messages.map((msg, index) => (
        <Text key={index}>{JSON.stringify(msg)}</Text>
      ))}
    </View>
  );
};

export default ChatScreen;
