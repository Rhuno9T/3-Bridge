🎮 3-Bridge Question Game

A fun, interactive quiz game built using HTML, CSS, JavaScript, and Bootstrap 5.  
Players can test their knowledge on various topics — General Knowledge, Football (Soccer), Music, and Fashion — with live feedback and floating emoji effects!

🚀 Features

🧠 Dynamic Question Loading: Each topic loads from its own JSON file.  
💬 Interactive Feedback: Floating emojis (🎉 for correct, 💀 for incorrect).  
📊 Score Tracking: Tracks and displays your score at the end.  
📱 Responsive Design: Works smoothly on desktop and mobile devices.  
⚡ No Page Reloads: All actions handled dynamically via JavaScript.  
🎨 Bootstrap Styling: Clean, modern, and spaced layout.

🕹️ How to Play

1. Open the Game:  
   Run index.html from a local server (important for loading JSON files).  
   You can use the Live Server extension in VS Code or run:  
   npx http-server .  
   Then visit http://localhost:8080 (or your local server’s port).

2. Choose a Topic:  
   Pick one of the available categories:  
   - General Knowledge  
   - Football (Soccer)  
   - Music  
   - Fashion  

3. Answer the Questions:  
   Each question has four options.  
   Select your answer — you’ll immediately see if you were correct or wrong.  
   Correct answers trigger 🎉; wrong ones show 💀.

4. Move to the Next Question:  
   Click the Next button after each question to continue.

5. View Your Results:  
   After the last question, your total score appears.  
   Click Play Again to return to topic selection and try another quiz!


🛠️ Adding New Topics

To add a new quiz topic:  
1. Create a new JSON file following this format:  
   [  
     {  
       "question": "Sample question?",  
       "options": ["A", "B", "C", "D"],  
       "answer": "A"  
     }  
   ]  
2. Name it as questions_<topic>.json.  
3. Add a new button in index.html under the topic section:  
   <button class="btn btn-outline-dark m-2 topic-btn" data-topic="newtopic">New Topic</button>  
4. The game will automatically load the questions from that file when selected.

⚠️ Troubleshooting

Error: “Failed to load questions.”  
Fix: Run the game using a local server (Live Server or npx http-server) because browsers block fetch() calls to local files for security reasons.

No emojis showing?  
Check that you’re not running in a minimal browser view (some older browsers might not fully support animations).

👨‍💻 Author

3-Bridge Question Game — designed for learning and entertainment.  
Built with love using HTML, Bootstrap, and JavaScript.

🏁 Enjoy playing and test your knowledge across different fields!
