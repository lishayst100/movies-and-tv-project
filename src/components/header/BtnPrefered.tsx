import React from 'react'
import {btnPrefer} from './btnPrefer'

interface BtnPreferProps {
    selected: number|null
    toggle: (id:number)=> void
    setKind: React.Dispatch<React.SetStateAction<string>>
}


const BtnPrefered = ({selected,setKind,toggle}:BtnPreferProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-4 pt-3">
      {btnPrefer.map((b, i) => (
        <button
          key={i}
          className={selected === i ? "btn-prefer colored" : "btn-prefer "}
          onClick={() => {
            setKind(b.value);
            toggle(i);
          }}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}

export default BtnPrefered;