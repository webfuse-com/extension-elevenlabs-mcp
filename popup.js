async function init() {
    const dynamicVariables = {
        "session__id": (await browser.webfuseSession.getSessionInfo()).sessionId
    };

    const el = document.createElement("elevenlabs-convai");
    el.setAttribute("agent-id", browser.webfuseSession.env.AGENT_KEY);
    el.setAttribute("dynamic-variables", JSON.stringify(dynamicVariables))
    document.body.appendChild(el);
}


document.addEventListener("DOMContentLoaded", init);