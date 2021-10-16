import { useState } from 'react';

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  return { notifications };
};

export default useNotifications;
