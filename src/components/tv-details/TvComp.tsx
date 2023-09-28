import React, { useEffect } from 'react'
import { TvShow } from '../../types/types';

import SkeletonSlider from '../skeleton/SkeletonSlider';
import TvSlider from './TvSlider';

type SliderListProps = {
  tv: TvShow[] | undefined;
  setTv: React.Dispatch<React.SetStateAction<TvShow[] | undefined>>;
  url: string;
};



const TvComp = ({setTv,tv,url}:SliderListProps) => {

useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((result) => setTv(result.results))
    .catch((e) => console.log(e));
}, [url]);

  return (
    <div className="trending-list">
      {!tv ? <SkeletonSlider /> : <TvSlider images={tv} />}
    </div>
  );
}

export default TvComp