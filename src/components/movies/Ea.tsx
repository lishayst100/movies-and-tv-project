import React from "react";
import { genres } from "./genres";

const MyComponent: React.FC = () => {
  const selected:string[] = []
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    const isFind = selected.find((v:string)=> v === selectedOption)
    if(!isFind){
        selected.push(selectedOption);
    } 
    const genreArr = selected.join(",");
    
    console.log(genreArr)
  };

  return (
    <div>
      <select onChange={handleChange}>
        {genres.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MyComponent;
