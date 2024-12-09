Documentation for the "Quizzes" Web Application
Overview
This is a web-based quiz application that allows users to choose a quiz topic, answer questions, and earn points for correct answers. The application includes interactive elements such as dynamic question display, a timer, and a point system.

Features
1. Topic Selection: Users can choose one of the available quiz topics: "AI or Reality", "Anime", and "Logos". Each topic contains a set of related questions.
2. Dynamic Question Display: Questions, images, and answer choices are dynamically loaded based on the selected topic. The user sees the question with an image and answer options.
3. Feedback on Answer Accuracy: When the user selects an answer, the correct answer is highlighted in green, and the incorrect one is highlighted in red.
4. Scoring System: Users earn points for each correct answer. The score is updated in real-time.
5. Timer: A timer displays the remaining time for answering the questions. If the timer runs out, the quiz ends automatically.
6. Responsive Interface: The application adapts to different screen sizes for a seamless experience across devices.

Application Structure

The application consists of three main parts:
1. HTML (Structure):
   - The webpage includes sections for selecting the quiz topic, displaying questions and answer options, and showing the timer and score.
   
2. CSS (Styling):
   - The styling includes button designs, animations, and layout adjustments for a visually appealing interface.
   
3. **JavaScript (Logic)**:
   - The application logic controls the topic selection, question loading, answer checking, timer, score updating, and question progression.

Main Process
1. Topic Selection:
   - On the main page, users can choose one of the available quiz topics. After selecting a topic, they are taken to the quiz, where questions are displayed.
   
2. Answering Questions:
   - The questions are displayed with several answer options. The user must choose the correct answer by clicking on a button.
   
3. Answer Checking:
   - After selecting an answer, the correct option is highlighted in green, and the incorrect one turns red. The user cannot change their choice once it's selected.
   
4. Points and Time:
   - A correct answer awards the user 10 points, which are displayed in real-time. The timer counts down the remaining time.
   
5. Moving to the Next Question:
   - After answering and highlighting the correct and incorrect answers, a button appears to move to the next question.
   
6. Quiz Completion:
   - The quiz ends when the time runs out or when all questions have been answered. A message appears showing the final score.

Technical Details
- Timer: The timer starts at 100 seconds and decreases every second. When the timer reaches zero, the quiz ends automatically.
- Question Progression Logic: After the user answers a question, the application checks the answer. Then, it either displays the next question or ends the quiz if all questions have been answered.
- Page Reload: Once the quiz is finished, the page reloads, allowing the user to start a new game.


Technologies Used
- HTML: For creating the structure of the webpage.
- CSS: For styling the interface and making it responsive.
- JavaScript: For implementing the dynamic game logic, user interaction, and timer control.

Conclusion
This is a simple and user-friendly quiz application that allows users to test their knowledge across various topics. It is designed to be easy to use, with the ability to easily add new topics and questions.
