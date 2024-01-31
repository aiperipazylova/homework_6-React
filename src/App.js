import { useState, useEffect } from 'react';
import { createConnection } from './chat';

import SoundtrackRoom from './components/SoundtrackRoom';
import GeneralRoom from './components/GeneralRoom';
import FilmRoom from './components/FilmRoom';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:123');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server Url:{''}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1> Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);

  return (
    <>
      <style>{`
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-start;
                  min-height: 100vh;
                  background-image: url('https://images.justwatch.com/poster/152819658/s718/titanik.jpg');
                  background-size: cover;
                  background-position: center;
                  position: relative; 
                  color: #fff;
              }

              .content-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3); 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                color: #fff; 
              }

              label {
                  margin-bottom: 10px;
                  display: block;
                  color: #fff; 
              }

              select, input {
                  margin-left: 10px;
                  margin-right: 10px;
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-radius: 3px;
              }

              button {
                  padding: 8px 15px;
                  font-size: 14px;
                  background-color: #007bff;
                  color: #fff;
                  border: none;
                  border-radius: 3px;
                  cursor: pointer;
              }

              hr {
                  border: 1px solid #ccc;
                  width: 100%;
                  margin: 20px 0;
              }

              h1 {
                  color: white; 
              }

              img {
                max-width: 100%;
                height: auto;
                margin-bottom: 100px 100px;
              }
          `}</style>
      <div className="content-overlay">
        <label>
          Выберите комнату: {''}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="general">general</option>
            <option value="film">film</option>
            <option value="soundtrack">soundtrack</option>
          </select>
        </label>
        <button onClick={() => setShow(!show)}>
          {show ? 'Закрыть чат' : 'Открыть чат'}
        </button>
        {show && <hr />}
        {show && renderRoomContent(roomId)}
      </div>
    </>
  );
}


function renderRoomContent(roomId) {
    switch (roomId) {
      case 'soundtrack':
        return <SoundtrackRoom />;
      case 'film':
        return <FilmRoom />;
      case 'general':
        return <GeneralRoom />;
      default:
        return null;
    }
  }