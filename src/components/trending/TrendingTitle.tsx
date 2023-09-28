import React from 'react'
import './Trending.scss'
import { btnsTrending } from './BtnsTrending';


type TrendingProps = {
  setTime: React.Dispatch<React.SetStateAction<string>>;
  selected: number | null;
  toggle: (id: number) => void;
};

const TrendingTitle = ({setTime, selected,toggle}:TrendingProps) => {
  return (
    <div className="d-flex justify-content-between mx-auto align-items-center title-trending pb-4">
      <h2>Trending</h2>
      <div className="btns-trending">
        {btnsTrending.map((b, i) => (
          <button
            key={b.value}
            className={
              selected === i ? "btn-trending orange-trending" : "btn-trending"
            }
            onClick={(e) => {
              setTime(b.value);
              toggle(i);
            }}
          >
            {b.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TrendingTitle