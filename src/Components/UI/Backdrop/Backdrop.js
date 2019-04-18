import React from 'react';

import './Backdrop.css';

const backdrop = (props) => (
   <div className='Backdrop' onClick={props.clicked}></div>
);

export default backdrop;