import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';



const locales = {
  "en-Us": require("date-fns/locale/en-US")
}
const localizer =dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events =[
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021,8,2),
    end: new Date(2021,8,5)
  },
  {
    title: "Vacation",
    start: new Date(2021,8,7),
    end: new Date(2021,8,10)
  },
  {
    title: "Conference",
    start: new Date(2021,8,20),
    end: new Date(2021,8,23)
  }
]

function App() {

  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)


  function handleAddEvent(){
    setAllEvents([...allEvents, newEvent])
  }


  return (
    <div className="App">

      <h1 style={{color: "red"}}>CALENDAR</h1>
      <h2 style={{color: "blue"}}>Add New Event</h2>

      <div style={{width: "100%", height: "20%"}}>
        <input type="text" placeholder="Add Title"  style={{width: "20%", marginRight: "10px"}}
          value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
        />
        <DatePicker placeholderText="Start Date"
          selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
        />
        <DatePicker placeholderText="End Date" 
          selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}
        />
        <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
      </div>

      <Calendar 
        localizer={localizer} 
        events={allEvents} 
        startAccessor="start" endAccessor="end" 
        style={{height: "300px", margin: "50px"}} 
      />
    </div>
  );
}

export default App;
