import React, { useState } from 'react';
import VideoCall from '../components/VideoCall';
import { Sidebar } from '../components';
function Meet() {
  const [identity, setIdentity] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState('');
  const handleJoinCall = async () => {
    if (identity && roomName) {
      try {
        const response = await fetch('http://localhost:8000/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ identity, roomName }),
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setToken(data.token);
        } else {
          console.log('Failed to fetch Twilio access token');
        }
      } catch (error) {
        console.log(
          'Error occurred while fetching Twilio access token:',
          error,
        );
      }
    }
  };

  return (
    <div className="flex gap-10">
      <Sidebar />
      <div>
        <input
          type="text"
          placeholder="Enter your identity"
          value={identity}
          onChange={(e) => setIdentity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button onClick={handleJoinCall}>Join Call</button>
        {token && (
          <div>
            <h1>Reclaim Video App</h1>
            <VideoCall token={token} identity={identity} roomName={roomName} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Meet;
