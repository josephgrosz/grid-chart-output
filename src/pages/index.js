import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import io from 'socket.io-client';
const socket = io('https://socket-server-1-zaek.onrender.com/');

const Home = () => {
  const [data, setData] = useState(
    [
      {
        label: 'A',
        value: ''
      },
      {
        label: 'E',
        value: ''
      },
      {
        label: 'I',
        value: ''
      },
      {
        label: 'M',
        value: ''
      },
      {
        label: 'B',
        value: ''
      },
      {
        label: 'F',
        value: ''
      },
      {
        label: 'J',
        value: ''
      },
      {
        label: 'N',
        value: ''
      },
      {
        label: 'C',
        value: ''
      },
      {
        label: 'G',
        value: ''
      },
      {
        label: 'K',
        value: ''
      },
      {
        label: 'O',
        value: ''
      },
      {
        label: 'D',
        value: ''
      },
      {
        label: 'H',
        value: ''
      },
      {
        label: 'L',
        value: ''
      },
      {
        label: 'P',
        value: ''
      }
    ]
  );
  useEffect(() => {
    socket.on('message', (msg) => {
      const _data = JSON.parse(msg);
      setData(_data);
    });
    return() => {
      socket.off('message');
    }
  }, [socket]);

  return (
    <div className="app-container">
      <div className="grid-container">
      <div className="container">
      <div className="row ">
        {data.map((item, index) => (
          <Input  value = {item.value} label={item.label} index = {index} className={(index %4==0)?" input-border-right ":" input-border"}/>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};
export default Home;
