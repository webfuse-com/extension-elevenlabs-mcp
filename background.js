browser.browserAction
.setPopupStyles({
    backgroundColor: "#FFFFFF40",
    borderRadius: "20px",
});
browser.browserAction.resizePopup(420, 620);
browser.browserAction.setPopupPosition({ bottom: "30px", right: "30px" });
browser.browserAction.detachPopup();
browser.browserAction.openPopup();