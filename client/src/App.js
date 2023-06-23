import axios from 'axios';
import './App.css';
import Content from './component/content';
import { useState } from 'react';

function App() {

  const [topic,setTopic] = useState('');
  const [message,setMessage] = useState('');
  const [priority,setPriority] = useState('');
  const [time,setTime] = useState('');
  const [dueDate,setDueDate] = useState('');

  async function addNewNote(ev) {
    ev.preventDefault();
    const noteData = {
      topic, message, priority, time, dueDate
    };
    console.log(noteData);
    axios.post('http://localhost:4000/notes', noteData)
      .then(response => {
        console.log(response.data);
        setTopic('');
        setMessage('');
        setPriority('');
        setTime('');
        setDueDate('');
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Content />
      <div>
        <form onSubmit={addNewNote}>
          <label>Topic:</label>
          <input
            type="topic"
            value={topic}
            onChange={ev => setTopic(ev.target.value)}
            placeholder="topic"
          />
          <label>Message:</label>
          <input
            type="message"
            value={message}
            onChange={ev => setMessage(ev.target.value)}
            placeholder="message"
          />
          <label>Priority:</label>
          <input
            type="priority"
            value={priority}
            onChange={ev => setPriority(ev.target.value)}
            placeholder="priority"
          />
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={ev => setTime(ev.target.value)}
            placeholder="time"
          />
          <label>DueDate:</label>
          <input
            type="dueDate"
            value={dueDate}
            onChange={ev => setDueDate(ev.target.value)}
            placeholder="dueDate"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;

