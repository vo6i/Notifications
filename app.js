const button = document.querySelector("button")

button.addEventListener("click", () => {
  Notifications.requestPermission().then(perm => {
    if (perm === "granted") {
      const notification = new Notification("Dclxviclan forever", {
        body: "dclxviclan fck all",
        data: { hello: "world" },
        icon: "js.png",
      })
      notification.addEventListener("error", e => {
        alert("error")
      })
    }
  })
})

let notification
let interval
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const leaveDate = new Date()
    interval = setInterval(() => {
      notification = new Notification("Come Back Please", {
        body: `Pleeease ${Math.round(new Date() - leaveDate) / 1000}`,
        tag: "Come Back",
      })
    }, 100)
    
  } else {
    if (interval) clearInterval(interval)
    if (notification) notification.close()
  }
})
