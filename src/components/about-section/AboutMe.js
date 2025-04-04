import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./AboutMe.css";

// CONSOLE JSX

const TronConsole = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const consoleContainerRef = useRef(null);
  const hasInitialized = useRef(false); 

  const typeMessage = async (text, type) => {
    setMessages(prev => [...prev, { text: '', type }]);
    
    for (let char of text) {
      await new Promise(resolve => setTimeout(resolve, 30));
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { text: newMessages[newMessages.length - 1].text + char, type };
        return newMessages;
      });
    }
  };

  const initializeConsole = useCallback(async () => {
    setIsTyping(true);
    await typeMessage("INITIALIZING SECURITY CONSOLE...", 'system');
    await typeMessage("SYSTEM STATUS: <span class='online-status'>ONLINE</span>", 'system');
    await typeMessage("TYPE '<span class='help-command'>HELP</span>' FOR ACCESS COMMANDS", 'system');
    setIsTyping(false);
  }, []);

  const showHelp = async () => {
    const helpContent = [
      "<span class='command-list'>COMMAND LIST:</span>",
      "──────────────",
      "<span class='command-list-c'>HELP</span>     - Show this command list",
      "<span class='command-list-c'>USER</span>      - Display user information",
      "<span class='command-list-c'>EDC</span>    - Display educational records",
      "<span class='command-list-c'>SKLL</span>  - Display technical expertise",
      "<span class='command-list-c'>EXP</span>  - Display completed work",
      "<span class='command-list-c'>PRJ</span>  - Display ongoing developments",
      "──────────────",
      "<span class='warning-text'>WARNING: UNAUTHORIZED ACCESS WILL BE LOGGED</span>"
    ];

    for (const line of helpContent) {
      await typeMessage(line, line.startsWith('─') ? 'system' : 'help');
    }
  };

  const showCommandResponse = async (command) => {
    await typeMessage("ACCESS APPROVED", 'success');
    
    const commandResponses = {
      user: ["Identity: Ernest *******. Web Developer | CS Student | Architect of The Grid."],
      edc: ["Bachelor in Computer Science (In Progress) | Specializing in Web Development & Ai"],
      skll: ["Frontend: HTML, CSS, JavaScript, React, | Backend: Node.js | Security: Ethical Research"],
      exp: ["Completed Web Design & JavaScript Certifications | Built interactive projects & web applications"],
      prj: ["Completed: Tron-Themed Portofolio | Incomplete: Ai Resume Builder | Crypto Trading Bot"],
      admin: ["<span class='admin-cmd'>ADMIN PRIVILEGES GRANTED. Welcome back, Operator.</span>"]
    };
  
    if (commandResponses[command]) {
      for (const line of commandResponses[command]) {
        await typeMessage(line, 'info');
      }
    }
  };

  const handleInput = async (e) => {
    if (e.key === 'Enter' && !isTyping) {
      const command = inputValue.trim().toLowerCase();
      setInputValue('');
      setIsTyping(true);
      
      setMessages(prev => [...prev, { text: `> ${command}`, type: 'input' }]);
      
      if (command === 'help') {
        await showHelp();
      } else if (['user', 'edc', 'skll', 'exp','prj','admin'].includes(command)) {
        await showCommandResponse(command);
      } else {
        await typeMessage("ERROR 404: COMMAND NOT RECOGNIZED", 'error');
      }
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop = consoleContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const onScroll = () => {
      if (!consoleContainerRef.current) return;
      const rect = consoleContainerRef.current.getBoundingClientRect();
      
      if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasInitialized.current) {
        hasInitialized.current = true;
        window.removeEventListener('scroll', onScroll);
        initializeConsole();
      }
    };

    window.addEventListener('scroll', onScroll);
    
    onScroll();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [initializeConsole]);

  return (
    <div className="console-window">
      <div className="console-header">
        <span>ID_SECURITY v5.0.3</span>
      </div>
      <div className="input-container">
        <div className="grid-pattern" />
        <div className="input-glow" />
        <input
          type="text"
          className="cyber-input"
          placeholder="ENTER COMMAND"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleInput}
          disabled={isTyping}
        />
      </div>
      <div 
        className="response-display" 
        ref={consoleContainerRef}
        style={{ overflowY: 'auto' }}
      >
        {messages.map((message, index) => (
          <div 
            key={index}
            className={`system-response ${
              message.type === 'success' ? 'access-approved' :
              message.type === 'error' ? 'error-404' :
              message.type === 'info' ? 'personal-info' :
              message.type === 'input' ? 'user-input' : ''
            }`}
            dangerouslySetInnerHTML={{ __html: message.text }}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default TronConsole;
