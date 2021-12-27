const host = window.location.host;

// front와 backend가 연결 되었음
const socket = new WebSocket(`ws://${host}`);
