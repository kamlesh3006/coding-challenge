import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MonacoEditor from 'react-monaco-editor'; // Import MonacoEditor component
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/Compiler.css';
import Footer from './Footer';

function Compiler() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [pass, setPass] = useState(false);
  const [testCasesResult, setTestCasesResult] = useState([]); // Store test case results
  const editorRef = useRef(null); // Create a ref for the editor

  const handleChange = (newValue) => {
    setCode(newValue);
  };

  const compileCode = async () => {
    try {
      if (!question || !question.testcases) {
        console.error('No question or test cases available.');
        return;
      }
  
      // Create a new array to hold the results
      const results = [];
  
      // Iterate over each test case
      for (let i = 0; i < question.testcases.length; i++) {
        const input = String(question.testcases[i].input); // Convert input to string
        console.log(input);
        setOutput('');
  
        // Convert code to string
        const codeStr = String(code);
  
        // Compile code for the current test case
        const response = await axios.post('http://localhost:3001/compile', { code: codeStr, input });
  
        // Store the output for the current test case
        const output = response.data.output;
        console.log(`Output for Test Case ${i + 1}: ${output}`);
  
        const trimmedOutput = output.slice(0, -2);
        let pass = false
        pass = trimmedOutput === question.testcases[i].output
  
        // Store test case result
        results.push({ output: output, expected: question.testcases[i].output, pass });
      }
  
      // Update the state with all the results at once
      setTestCasesResult(results);
    } catch (error) {
      if (error.response && error.response.data) {
        // Axios error with response data
        console.error('Error compiling code:', error.response.data.error);
        setOutput(error.response.data.error);
      } else if (error.message) {
        // Axios error without response data
        console.error('Error compiling code:', error.message);
        setOutput('An error occurred while compiling the code.');
      } else {
        // Non-Axios error
        console.error('Error compiling code:', error);
        setOutput('An unexpected error occurred.');
      }
    }
  };
  
  
  useEffect(() => {
    axios.get(`http://localhost:3001/api/questions/get_specific_question/${id}`)
      .then(response => {
        setQuestion(response.data);
      })
      .catch(error => {
        console.error('Error fetching question data:', error);
      });
  }, [id]);

  useEffect(() => {
    // After the component mounts, focus on the editor and set the cursor position to the center
    if (editorRef.current) {
      editorRef.current.layout(); // This line should resolve the ResizeObserver error
      editorRef.current.focus(); // Focus on the editor
      editorRef.current.setPosition({ lineNumber: 1, column: Math.floor(code.length / 2) }); // Set cursor position to the center
    }
  }, [code]); // Now the effect will run whenever the 'code' state changes

  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the signin page or any other desired page
    navigate('/signin');
  };

  return (
    <div style={{ backgroundColor: "#1E1E1E", minHeight: "100vh", maxWidth: "100%" }}>
      <Navbar textCol="gray-700" bgCol="gray-100" to="/signin" btn="Sign in" onLogout={handleLogout} />
      <div className='flex'>
        <div className='border rounded-lg m-2 p-2' style={{ width: "60%" }}>
          <MonacoEditor
            className={'custom-monaco-editor'}
            ref={editorRef} // Assign the ref to the Monaco Editor component
            language="python" // Set language to Python
            theme="vs-dark" // Set theme (optional)
            value={code}
            options={{ automaticLayout: true }}
            onChange={handleChange}
            height="90vh"
          />
        </div>
        <div className='mx-1 rounded-lg flex flex-col ml-0 mr-2 my-2 border text-gray-100' style={{ backgroundColor: "#1E1E1E", width: "40%" }}>
          <div className='flex justify-between px-4 py-2 border-b'>
            <button onClick={compileCode} className='bg-blue-700 text-gray-100 rounded-lg px-4 py-1'>Compile</button>
            <h2 className='mx-2 text-xl font-semibold text-gray-300'>Question</h2>
          </div>
          {question ? (
            <div className='text-start text-lg my-6 mx-6'>
              <h1 className='text-2xl font-bold'>{question.problem_statement}</h1>
              <p className='text-right font-semibold underline'>Difficulty: {question.difficulty}</p><br></br>
              <p className='word-wrap'>{question.description}</p>
              <br></br>
              <p className='font-semibold'>Example : </p>
              <p>Input : {question.example.input}</p>
              <p>Output : {question.example.output}</p>
              {/* Additional details */}
              <br></br><br></br><hr className=' -mx-4'></hr><br></br>
            </div>
          ) : (
            <div>Loading question...</div>
          )}
          {/* Display test case results */}
          {testCasesResult.map((result, index) => (
            <div className='text-left text-lg mx-4' key={index}>
              <p>Test Case {index + 1} : {result.pass ? 'Passed ✔️' : 'Failed ❌'}</p>
              {!result.pass && (
                <>
                  <p className='mx-4'>Output: {result.output}</p>
                  <p className='mx-4'>Expected: {result.expected}</p>
                </>
              )}
              <br></br>
            </div>
          ))}

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Compiler;
