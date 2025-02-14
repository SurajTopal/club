// WebSocketManager.js
import {useEffect, useRef, useState} from 'react';

const useWebSocket = url => {
  const ws = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize WebSocket connection
    connectWebSocket();

    // Cleanup on unmount
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [url]);

  const connectWebSocket = () => {
    try {
      ws.current = new WebSocket(url);

      ws.current.onopen = () => {
        console.log('WebSocket Connected');
        setIsConnected(true);
        setError(null);
      };

      ws.current.onclose = () => {
        console.log('WebSocket Disconnected');
        setIsConnected(false);
        // Implement reconnection logic
        setTimeout(connectWebSocket, 3000);
      };

      ws.current.onerror = error => {
        console.error('WebSocket Error:', error);
        setError('WebSocket connection error');
      };

      ws.current.onmessage = event => {
        const message = JSON.parse(event.data);
        setMessages(prevMessages => [...prevMessages, message]);
      };
    } catch (error) {
      console.error('WebSocket connection error:', error);
      setError('Failed to establish WebSocket connection');
    }
  };

  const sendMessage = message => {
    if (ws.current && isConnected) {
      ws.current.send(JSON.stringify(message));
    } else {
      setError('WebSocket is not connected');
    }
  };

  return {
    isConnected,
    messages,
    error,
    sendMessage,
  };
};

export default useWebSocket;
