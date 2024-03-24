 
import React, { useState ,useEffect} from 'react';

function Form({ addTodo, todos ,setMessage, setMessageType }) {
  const [text, setText] = useState('');
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  const placeholderTexts = [
    "Please Enter Your task...",
    "Try a new task here...",
    "What's on your mind...?",
    "Type your task here...",
    "Try Another task..."
  ];
  const speed = 30; // Typing speed (milliseconds)
  const delay = 1000; // Delay before cycling to the next placeholder text (milliseconds)

  useEffect(() => {
    let currentIndex = 0;
    let timer;

    const updatePlaceholder = () => {
      const currentText = placeholderTexts[currentIndex];
      let index = 0;
      let newPlaceholder = '';
      timer = setInterval(() => {
        if (index <= currentText.length) {
          newPlaceholder += currentText.charAt(index);
          setPlaceholder(newPlaceholder);
          index++;
        } else {
          clearInterval(timer);
          setTimeout(deletePlaceholder, delay);
        }
      }, speed);
    };

    const deletePlaceholder = () => {
      let currentPlaceholder = placeholderTexts[currentIndex];
      let index = currentPlaceholder.length;
      timer = setInterval(() => {
        if (index >= 0) {
          setPlaceholder(currentPlaceholder.substring(0, index));
          index--;
        } else {
          clearInterval(timer);
          currentIndex = (currentIndex + 1) % placeholderTexts.length;
          setTimeout(updatePlaceholder, delay);
        }
      }, speed);
    };

    updatePlaceholder();

    return () => clearInterval(timer);
  }, []);

  const handleAddTodo = () => {
    if (text.trim() === '') {
      setShowEmptyMessage(true);
      setTimeout(() => {
        setShowEmptyMessage(false);
      }, 2000); // Hide empty input message after 2 seconds
    } else {
      addTodo(text);
      setText('');
      setShowAddedMessage(true);
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 2000); // Hide added message after 2 seconds
    }
  };

  

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value.trim() === '') {
      setShowEmptyMessage(true);
    } else {
      setShowEmptyMessage(false);
    }
  };

  return (
    <div>
      <form action="" id='todo_form' onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id='taskInput'
          value={text}
          onChange={handleChange}
          placeholder={placeholder}
          required
        />
        <button className='Add_btn' type='button' onClick={handleAddTodo}>Add Todo</button>
        <div className='massage'>
          {showEmptyMessage && <span className='alert_message EmptyMessage'>Please Enter a Task</span>}
          {showAddedMessage && <span className='alert_message AddedMessage'>Task Added Successfully</span>}
        </div>
        {/* <span id='alert_message'></span> */}
      </form>
    </div>                                   
  );
}    

export default Form;






