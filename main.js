const notificationBox = document.getElementById("notificationBox");

const notificationTypes = {
    success:{
        icon: "fa-circle-check",
        class: "notification-success",
        text: "Successfully submitted",
        emojiClass: "emoji-success"
    },
    error:{
        icon: "fa-circle-xmark",
        class: "notification-error",
        text: "Please fix the error",
        emojiClass: "emoji-error"
    },
    invalid:{
        icon: "fa-circle-exclamation" ,
        class: "notification-invalid",
        text: "Invalid input, check again",
        emojiClass: "emoji-invalid"
    }
};

myTimeOut = setTimeout(1000)



function showNotification(type){
    let data = notificationTypes[type];

    const div = document.createElement('div');
    div.className = `notification ${data.class}`;
    div.innerHTML = `
                        <i class="fa-solid ${data.icon} emoji ${data.emojiClass}"></i>
                        <span class="notification-text">${data.text}</span>
                    `;

    notificationBox.appendChild(div);
    
    setTimeout(()=>{
        div.remove();
    },3000);
}
