import React from "react";
import { useState } from "react";
import './css/institute.css';
// class Reservation extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isGoing: true,
//         numberOfGuests: 2
//       };
  
//       this.handleInputChange = this.handleInputChange.bind(this);
//     }
//     handleInputChange(event) {
//       const target = event.target;
//       const value = target.type === 'checkbox' ? target.checked : target.value;
//       const name = target.name;
  
//       this.setState({
//         [name]: value
//       });
//     }
// }

function handleChange(event) {
  console.log(event.target.value);
}
const check=(e)=>
{
  console.log("Hello");
}

    const Institute = () => {
      const [Questionnumber, setQuestionnumber] = useState(0);
const [Question, setQuestion] = useState(0);
const [option1, setoption1] = useState('');
const [option2, setoption2] = useState('');
const [option3, setoption3] = useState('');
const [option4, setoption4] = useState('');
      return (
        
        <form onSubmit={check} className="container4">
          <label>
            Question Number:
            <input
            className="Questionno"
              name="qno"
              type="number"
            //   value={this.state.numberOfGuests}
            onChange={e => setQuestionnumber(e.target.value)}
            />
          </label>
          <label>
            Question
            <input
            className="Question"
              name="question"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setQuestion(e.target.value)}
            />
          </label>
          <label>
            Option 1:
            <input
            className="opt1"
              name="op1"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setoption1(e.target.value)}
            />
          </label>
          <label>
            Option 2:
            <input
            className="opt2"
              name="op2"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setoption2(e.target.value)} 
            />
          </label>
          <label>
            Option 3:
            <input
            className="opt3"
              name="op3"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setoption3(e.target.value)}
            />
          </label>
          <label>
            Option 4:
            <input
            className="opt4"
              name="op4"
              type="text"
            //   value={this.state.numberOfGuests}
            onChange={e => setoption4(e.target.value)}
            />
          </label>
          <button className='bubbly-button2' type="submit">Submit</button>
        </form>
      );
      }
      export default Institute;