import React, { useState } from 'react';
import { Box, Button, Input, SpaceBetween } from '@cloudscape-design/components';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      // Call AWS Gen AI service here
      const response = await callGenAIService(input);
      setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
    }
  };

  const callGenAIService = async (input: string): Promise<string> => {
    // Replace with actual AWS Gen AI service call
    // Example placeholder response
    return `Echo: ${input}`;
  };

  return (
    <Box padding="l">
      <SpaceBetween size="m">
        <Box>
          {messages.map((message, index) => (
            <Box key={index} textAlign={message.sender === 'user' ? 'right' : 'left'}>
              <Box>{message.text}</Box>
            </Box>
          ))}
        </Box>
        <Box>
          <Input
            value={input}
            onChange={(e) => setInput(e.detail.value)}
            placeholder="Type your message..."
          />
          <Button onClick={handleSend}>Send</Button>
        </Box>
      </SpaceBetween>
    </Box>
  );
};

export default Chatbot;