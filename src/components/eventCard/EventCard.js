import { format } from "date-fns";
const EventCard = ({ month, eventName, time, img }) => {
    return (
        <div className={`${img} bg-no-repeat relative bg-contain event-card`}>
            <div className="absolute bottom-0 details">
                <p className="text-secondary font-barlowThin mb-3">{eventName}</p>
                <p className="text-whitish font-barlowThin mb-2">
                    <img src="/assets/icons/date.png" className="inline-block mr-2" alt="date" /> {month}
                </p>
                <p className="text-whitish font-barlowThin">
                    <img src="/assets/icons/time.png" className="inline-block mr-2" alt="time" />
                    {time}
                </p>
            </div>
        </div>
    );
};

export default EventCard;
