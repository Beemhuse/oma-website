export const isEventDateValid = (eventDate) => {
    return new Date(eventDate) > new Date();
  };