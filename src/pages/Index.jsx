import React, { useState } from "react";
import { Box, Flex, Heading, Image, Button, VStack, HStack, Tag, useColorModeValue } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

// Mock data for autogen agents
const agentsData = [
  { id: 1, name: "Agent One", onStage: false, avatar: 'https://images.unsplash.com/photo-1622962733255-935a059e5578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdmF0YXIlMjBhZ2VudCUyMG9uZXxlbnwwfHx8fDE3MDg5NzQ3NDh8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 2, name: "Agent Two", onStage: false, avatar: 'https://images.unsplash.com/photo-1528292531647-de2434b8e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdmF0YXIlMjBhZ2VudCUyMHR3b3xlbnwwfHx8fDE3MDg5NzQ3NDh8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 3, name: "Agent Three", onStage: false, avatar: 'https://images.unsplash.com/photo-1523365280197-f1783db9fe62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdmF0YXIlMjBhZ2VudCUyMHRocmVlfGVufDB8fHx8MTcwODk3NDc0OXww&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 4, name: "Agent Four", onStage: true, avatar: 'https://images.unsplash.com/photo-1580892934698-cd589f9538a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdmF0YXIlMjBhZ2VudCUyMGZvdXJ8ZW58MHx8fHwxNzA4OTc0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 5, name: "Agent Five", onStage: true, avatar: 'https://images.unsplash.com/photo-1533563505784-67329816bc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdmF0YXIlMjBhZ2VudCUyMGZpdmV8ZW58MHx8fHwxNzA4OTc0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080' },
];

const Index = () => {
  const [agents, setAgents] = useState(agentsData);

  // Update the onStage status for the agent
  const toggleOnStage = (agentId) => {
    setAgents(agents.map((agent) => (agent.id === agentId ? { ...agent, onStage: !agent.onStage } : agent)));
  };

  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")} minH="100vh" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Autogen Agents
        </Heading>
        <HStack spacing={5}>
          {agents.map((agent) => (
            <VStack key={agent.id} p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Image borderRadius="full" boxSize="100px" src={agent.avatar} alt={`Avatar of ${agent.name}`} />
              <Heading as="h3" size="md">
                {agent.name}
              </Heading>
              <Tag size="lg" variant="solid" colorScheme={agent.onStage ? "green" : "red"}>
                {agent.onStage ? "On Stage" : "Off Stage"}
              </Tag>
              <Button leftIcon={<FaRobot />} colorScheme="teal" onClick={() => toggleOnStage(agent.id)}>
                Toggle Stage
              </Button>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
