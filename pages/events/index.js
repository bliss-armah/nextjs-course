import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const AllEventPage = () => {
  const events = getAllEvents();
  const router = useRouter()

  const findEventHandler = (year,month) =>{
    const fullpath = `/events/${year}/${month}`
router.push(fullpath)
  }
  return (
    <div>
        <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventPage;
