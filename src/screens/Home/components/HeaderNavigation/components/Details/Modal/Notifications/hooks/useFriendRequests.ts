import { useState } from 'react';

const useFriendRequests = () => {
  const [frindesRequests, setFrindesRequests] = useState([{}]);

  return { frindesRequests };
};

export default useFriendRequests;
