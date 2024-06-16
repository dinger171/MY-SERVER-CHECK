// IP: 147.185.221.19:64363
const serverIP = "147.185.221.19";
const serverPort = 64363;

const statusElement = document.getElementById('status');

async function checkServerStatus() {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}:${serverPort}`);
        const data = await response.json();

        if (data.online) {
            statusElement.innerHTML = `Server is <span id="online">online!</span>`;
            document.getElementById("players").innerHTML = `Players count: <b>${data.players.online}</b>`;
            document.getElementById("players-list").innerHTML = `Players: <b>${data.players.list}</b>`;
        } else {
            statusElement.innerHTML= 'Server is <span id="offline">offline</span>.';
        }
    } catch (error) {
        statusElement.textContent = 'Error fetching server status.';
        console.error(error);
    }
}

// Call the function when the page loads
window.addEventListener('load', checkServerStatus);
setInterval(() => {
  checkServerStatus();
}, 5000);