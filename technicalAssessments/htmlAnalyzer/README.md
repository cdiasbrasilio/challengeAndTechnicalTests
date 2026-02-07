# 🚀 HTML Analyzer - Technical Challenge 

This repository contains my solution for a Software Engineering technical assessment focused on DOM structure analysis, string manipulation, and data structure logic.

## 🔄 Development Strategy: Java Required, Python Prototyped

Although the challenge mandatory requirement was to use Java, I adopted a strategic two-step development workflow:
- ***Python Prototyping:*** I first implemented the core logic and the parsing algorithm in Python. Given my high affinity with the language, this allowed me to quickly validate the Stack-based algorithm and handle edge cases without environment configuration overhead.
- ***Java Implementation:*** Once the algorithm was proven, I ported the entire solution to Java 17. This ensured compliance with the test requirements while applying static typing and optimizing I/O performance using native buffers.

## 📝 The Challenge

The goal is to process the HTML content from a given URL via command line and return the text contained within the deepest nesting level of the DOM.

Business Rules & Outputs:
- Success: Returns the text of the innermost node.
- Connection Error: Displays URL connection error.
- Invalid HTML: If tags are not properly balanced, displays malformed HTML.
  
## 🧠 Logic & Algorithm

The solution employs a single-pass algorithm with linear complexity.

Complexity Analysis:
|Metric   |Complexity  |Justification  |
|---------|------------|---------------|
|Time     |O(n)        |The file is read line by line, processing each element exactly once.
|Space    |O(n)        |The Stack stores open tags. In a document with $n$ nested tags, space grows linearly.

Why use a Stack?To validate HTML, we must ensure that the last tag opened is the first one closed (LIFO - Last In, First Out).
- Every time an opening tag is found, it is pushed onto the stack, and the current depth increases.
- If text content is found at the current depth, it becomes the candidate for "deepest text".
- When a closing tag is found, we pop from the stack and validate the pair.

## 🛠️ TechnologiesPrimary Language: 
- Java 17
- Prototyping Language: Python 3
- Core Libraries: java.net (HTTP requests), java.util.Stack (Data structure)

## 🚀 How to Run (Java Version)

Ensure you have JDK 17 configured in your environment.

- 1. Compile the code
javac HtmlAnalyzer.java

- 2. Run with a target URL
java HtmlAnalyzer http://...
