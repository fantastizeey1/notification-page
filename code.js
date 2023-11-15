document.addEventListener('DOMContentLoaded', function() {
    const markButton = document.querySelector('.mark-button');
    const unreadNotifications = document.querySelectorAll('.unread .red-dot');
    const unreadNotificationSections = document.querySelectorAll('.unread .noti1, .unread .noti2, .unread .noti3');
  
    markButton.addEventListener('click', function() {
      unreadNotifications.forEach(notification => {
        notification.style.display = 'none'; // Hide red dot
      });
  
      const unreadSection = document.querySelector('.unread');
      unreadSection.style.backgroundColor = 'white'; // Change background color
  
      unreadNotificationSections.forEach(section => {
        section.style.backgroundColor = 'white'; // Change background color of noti1, noti2, noti3
      });
    });
  });
  