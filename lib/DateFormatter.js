export const getFormattedDate = (utcTimestamp) => {
    const dateInUTC = new Date(utcTimestamp);
  
    // Convert to Kuala Lumpur (MYT) time zone
    const kualaLumpurOffset = 8 * 60; // UTC+8 in minutes
    dateInUTC.setMinutes(dateInUTC.getMinutes() + kualaLumpurOffset);
  
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      fractionalSecondDigits: 3,
      hour12: true, // Use a 12-hour format
      timeZoneName: 'short', // Include time zone abbreviation (MYT)
    };
  
    const formattedDate = dateInUTC.toLocaleString('en-US', options);
  
    return formattedDate;
  };
  