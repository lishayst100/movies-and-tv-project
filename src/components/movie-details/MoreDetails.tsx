
import { MovieDetails } from '../../types/types';

type MoreDetailsProps = {
  hours:number;
  minutes:number;
  formattedDate:string;
  status:string
};


const MoreDetails = ({formattedDate,hours,minutes,status}:MoreDetailsProps) => {
  return (
    <div className="d-flex gap-4">
      <div className="subtitle-details">
        Status: <span className="tagline">{status}</span>
      </div>
      <div className="subtitle-details">
        Runtime:
        <span className='d-flex'>
          {hours > 0 && <span className="tagline"> {hours}h</span>}
          {minutes > 0 && <span className="tagline"> {minutes}m</span>}
        </span>
      </div>
      <div className="subtitle-details">
        Release Date: <span className="tagline"> {formattedDate}</span>
      </div>
    </div>
  );
}

export default MoreDetails