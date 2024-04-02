import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MonacoEditor from 'react-monaco-editor'; // Import MonacoEditor component
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/Compiler.css';

function Compiler() {
    const { id } = useParams();
    const [question, setQuestion] = useState(null);
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [pass, setPass] = useState(false);
    const editorRef = useRef(null); // Create a ref for the editor
  
    const handleChange = (newValue) => {
      setCode(newValue);
    };
  
    const compileCode = async () => {
      try {
        const input = question.testcases[0].input
        console.log(input)
        const response = await axios.post('http://localhost:3001/compile', { code, input });
        setOutput(response.data.output)
        const expected = question.testcases[0].output
        console.log(output)
        console.log(expected)
        if (output === expected) {
            setPass(true)
        }
        console.log(pass)
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
              <div className='text-start my-2 mx-4'>
                <h1 >{question.problem_statement}</h1>
                <p>{question.description}</p>
                <p>Difficulty: {question.difficulty}</p>
                <p>{}</p>
                {/* Additional details */}
              </div>
            ) : (
              <div>Loading question...</div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default Compiler;
  