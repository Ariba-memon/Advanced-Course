import React from 'react';

export default function Bot() {
  return (
    <div>
    
    {/* <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script> */}
<df-messenger
  intent="WELCOME"
  chat-title="helloworldagent"
  agent-id="174be611-1024-4784-a41a-61089fa2e1e1"
  language-code="en"
></df-messenger>
    </div>
  );
}


