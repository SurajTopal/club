import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';

const WebSocketClient = () => {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [token, setToken] = useState('your-auth-token-here'); // Replace with your actual token or get it from auth state
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  const websocketRef = useRef(null);
  const scrollViewRef = useRef(null);

  // Function to establish WebSocket connection
  const connectWebSocket = () => {
    try {
      // Create WebSocket instance with custom headers
      const ws = new WebSocket('ws://20.40.40.110:8090/ws', [], {
        headers: {
          Authorization: `${token}`,
        },
      });

      // Connection opened
      ws.onopen = () => {
        console.log('WebSocket Connection Established');
        setConnected(true);
        setConnectionStatus('Connected');
        setMessages(prev => [
          ...prev,
          {text: 'Connected to server', type: 'system'},
        ]);
      };

      // Listen for messages
      ws.onmessage = event => {
        console.log('Message received:', event.data);
        setMessages(prev => [...prev, {text: event.data, type: 'received'}]);
      };

      // Listen for errors
      ws.onerror = error => {
        console.log('WebSocket Error:', error);
        setConnectionStatus(`Error: ${error.message || 'Unknown error'}`);
        setMessages(prev => [
          ...prev,
          {text: `Error: ${error.message || 'Unknown error'}`, type: 'error'},
        ]);
      };

      // Connection closed
      ws.onclose = event => {
        console.log('WebSocket Connection Closed:', event.code, event.reason);
        setConnected(false);
        setConnectionStatus(
          `Disconnected: ${event.reason || 'Connection closed'}`,
        );
        setMessages(prev => [
          ...prev,
          {
            text: `Disconnected: ${event.reason || 'Connection closed'}`,
            type: 'system',
          },
        ]);
      };

      websocketRef.current = ws;
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
      setConnectionStatus(`Connection Failed: ${error.message}`);
      setMessages(prev => [
        ...prev,
        {text: `Connection Failed: ${error.message}`, type: 'error'},
      ]);
    }
  };

  // Function to disconnect WebSocket
  const disconnectWebSocket = () => {
    if (websocketRef.current) {
      websocketRef.current.close();
      websocketRef.current = null;
    }
  };

  // Function to send message
  const sendMessage = () => {
    if (websocketRef.current && inputMessage.trim()) {
      websocketRef.current.send(inputMessage);
      setMessages(prev => [...prev, {text: inputMessage, type: 'sent'}]);
      setInputMessage('');
    }
  };

  // Clean up WebSocket on component unmount
  useEffect(() => {
    return () => {
      disconnectWebSocket();
    };
  }, []);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  }, [messages]);

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Status: {connectionStatus}</Text>
        <View style={styles.tokenContainer}>
          <TextInput
            style={styles.tokenInput}
            value={token}
            onChangeText={setToken}
            placeholder="Enter your auth token"
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Connect"
          onPress={connectWebSocket}
          disabled={connected}
          color="#4CAF50"
        />
        <Button
          title="Disconnect"
          onPress={disconnectWebSocket}
          disabled={!connected}
          color="#F44336"
        />
      </View>

      <ScrollView style={styles.messagesContainer} ref={scrollViewRef}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageRow,
              msg.type === 'sent'
                ? styles.sentMessage
                : msg.type === 'received'
                ? styles.receivedMessage
                : styles.systemMessage,
            ]}>
            <Text style={styles.messageText}>{msg.text}</Text>
            <Text style={styles.messageType}>{msg.type}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type a message..."
          placeholderTextColor="#999"
          onSubmitEditing={sendMessage}
          returnKeyType="send"
          editable={connected}
        />
        <Button
          title="Send"
          onPress={sendMessage}
          disabled={!connected || !inputMessage.trim()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  statusContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  statusText: {
    fontSize: 16,
    marginBottom: 10,
  },
  tokenContainer: {
    marginBottom: 5,
  },
  tokenInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  messageRow: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  sentMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  receivedMessage: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  systemMessage: {
    backgroundColor: '#FFF3CD',
    alignSelf: 'center',
    maxWidth: '90%',
  },
  messageText: {
    fontSize: 16,
  },
  messageType: {
    fontSize: 10,
    color: '#888',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#fff',
  },
});

export default WebSocketClient;
