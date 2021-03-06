import React from 'react';
import './ImageLinkForm.css';



const ImageLinkForm = ( {onInputChange, onButtonSubmit}) => {
  return (
    <div >
      <p className= "f3">
        {'This Magic Brain will detect faces in your pictures. Give it a try!' }
      </p>
      <div>
        <div className='pa4 br-2 shadow-5 form center' >
          <input type="text" className="f4 pa2 w-70 center" onChange = {onInputChange}/>
          <button
            className= 'w-30 grow link f4 ph3 pv2 dib white bg-light-purple'
            onClick = {onButtonSubmit}
            >Detect</button>
        </div>
      </div>
    </div>
  );
}
export default ImageLinkForm;

