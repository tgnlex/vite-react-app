

function ConnectionManager({connection}) {
  function connect() {
    socket.connect();
  }
  function disconnect() {
    socket.disconnect();
  }
  return (
    <div className="connection-control">
      {!connection 
          ? <button id="connect-btn" onClick={ connect }>
              Connect
            </button>
          : <button id="disconnect-btn" onClick={disconnect}>
              Disconnect
            </button>
        }
    </div>
  )
}

export default ConnectionManager;
