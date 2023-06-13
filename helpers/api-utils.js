export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-52920-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  // console.log(data);

  return events;
}

export async function getFeaturedEvents() {
  const allEvent = await getAllEvents();
  return allEvent.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvent = await getAllEvents();
  return allEvent.find((event) => event.id === id);
}
