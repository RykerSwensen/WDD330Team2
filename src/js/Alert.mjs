export default class Alert {

    constructor() {
        
        }
    
    async init() {
        const response = await fetch("/json/alert.json")
        const json = await response.json();

        if (json != null) {
            const alertSection = document.createElement("section");
            alertSection.classList.add("alert-list");

            for (const i_alert in json)
            {
                const alert = json[i_alert];
                const alertp = document.createElement("p");
                alertp.textContent = alert.textContent
                alertSection.appendChild(alertp);
                for (const property in alert)
                {
                    alertp.style[property] = alert[property]
                }
                
            }
            const mains = document.getElementsByTagName("main");
            const main = mains[0];
            main.prepend(alertSection);
        }
    }
}



