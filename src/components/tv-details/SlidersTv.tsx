import React, { useState } from "react";

import { BASE_URL, API_KEY } from "../../services/API";
import { TvShow } from "../../types/types";

import TvComp from "./TvComp";

type SliderListProps = {
  filter: string;
  title: string;
  id:number
};


const SlidersTv = ({filter,title,id}:SliderListProps) => {
  const [tv, setTv] = useState<TvShow[] | undefined>();  
  const url = `${BASE_URL}/tv/${id.toString()}/${filter}?${API_KEY}`;

  return (
    <div className="padding-bottom">
      {tv?.length === 0 ? (
        <h2 className="d-flex justify-content-between mx-auto align-items-center title-trending pb-4 pt-4">
          No {title} Found
        </h2>
      ) : (
        <div>
          <h2 className="d-flex justify-content-between mx-auto align-items-center title-trending pb-4 pt-4">
            {title}
          </h2>
          <TvComp setTv={setTv} tv={tv} url={url} />
        </div>
      )}
    </div>
  );
};

export default SlidersTv;
