import React from 'react';

export default function NumberPad(props) {
    return (
        <button id={'key-' + props.data} className='numberKey' onClick={props.func} style={{justifyContent: 'center'}}>
            {props.data}
        </button>
    );
}

