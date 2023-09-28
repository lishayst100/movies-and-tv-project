import React, { useEffect, useState } from "react";
import { Cast} from "../../types/types";
import { API_KEY, BASE_URL } from "../../services/API";
import { ColorRing } from "react-loader-spinner";
import "../trending/Trending.scss";
import CastSlider from "../header/CastSlider";

type Props = {
  id: string | undefined;
};

const CastComp = ({ id }: Props) => {
  const [cast, SetCast] = useState<Cast[]>();
  const [isLoading, setisLoading] = useState(true);
  const url = `${BASE_URL}/movie/${id}/credits?${API_KEY}`;
  const filteredCast = cast?.filter((c)=> c.known_for_department === 'Acting')
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        SetCast(result.cast);
        setisLoading(false);
      });
  }, [id, url]);

  if (!filteredCast) {
    return <ColorRing />;
  }

  if(filteredCast.length === 0){
    return <h2>No Cast Found</h2>
  }

  return (
    <div>
      <div className="padding-bottom">
        {isLoading ? (
          <ColorRing />
        ) : (
          <>
              <h2 className="d-flex justify-content-between mx-auto align-items-center title-trending py-4">
                Cast
              </h2>
            <div className="trending-list">
              <CastSlider cast={filteredCast} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CastComp;
