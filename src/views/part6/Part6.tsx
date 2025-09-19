import React from 'react';
import './Part6.css';
import Part2Tag from '../../components/contact/Contact';


const Part6: React.FC = () => { 


  return (
    <div style={{height: '100%', paddingTop: '64px'}}>
      <div className='part6'>
        <div> 
          <div>
            <h1>Contact Me</h1>
            <Part2Tag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;