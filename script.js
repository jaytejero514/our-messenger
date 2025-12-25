// 1. Tell the computer which elements on the screen we want to control
const sendBtn = document.getElementById('send-btn');
const input = document.getElementById('message-input');
const chatWindow = document.getElementById('chat-window');

// 2. Tell the button to "listen" for a click
sendBtn.addEventListener('click', function() {
    
    // 3. Check if the input is empty (we don't want to send blank messages)
    if (input.value.trim() !== "") {
        
        // 4. Create a new "p" (paragraph) element for the message
        const messageBubble = document.createElement('p');
        
        // 5. Put your typed text into that new paragraph
        messageBubble.innerText = input.value;
        
        // 6. Add a special "class" so we can style it later with CSS
        messageBubble.classList.add('my-message');
        
        // 7. Actually put the bubble inside the chat window
        chatWindow.appendChild(messageBubble);
        
        // 8. Clear the input box so you can type the next message
        input.value = "";
        
        // 9. Auto-scroll to the bottom so you see the newest message
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});
// Listen for the "Enter" key being pressed inside the input box
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendBtn.click(); // This just "clicks" the button for you
    }
});