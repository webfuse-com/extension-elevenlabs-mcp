async function init() {
    const dynamicVariables = {
        "space__rest_key": `Bearer ${browser.webfuseSession.env.SPACE_REST_KEY}`,
        "session__id": (await browser.webfuseSession.getSessionInfo()).sessionId
    };

    const el = document.createElement("elevenlabs-convai");
    el.setAttribute("agent-id", browser.webfuseSession.env.AGENT_KEY);
    el.setAttribute("dynamic-variables", JSON.stringify(dynamicVariables))
    document.body.appendChild(el);
}


document.addEventListener("DOMContentLoaded", init);