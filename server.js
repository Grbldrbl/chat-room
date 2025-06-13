// Join Ably presence
channel.presence.enter({ nickname });

// Listen for presence updates
channel.presence.subscribe('enter', function(member) {
  updateOnlineUsers();
});
channel.presence.subscribe('leave', function(member) {
  updateOnlineUsers();
});

// Function to update the user list
function updateOnlineUsers() {
  channel.presence.get(function(err, members) {
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '';
    members.forEach(member => {
      const div = document.createElement('div');
      div.textContent = member.data.nickname;
      usersDiv.appendChild(div);
    });
  });
}
