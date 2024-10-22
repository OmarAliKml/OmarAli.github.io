class PortfolioModel {
    constructor() {
        this.data = {
            summary: "",
            references: [], 
            skills: []
        };
    }
 
   async setup() {
       try {
           const response = await fetch('https://raw.githubusercontent.com/OmAlKml/OmAlKml.github.io/refs/heads/main/data.json');
           if (!response.ok) {
               throw new Error('Network response was not ok');
           }
           const jsonData = await response.json();
           this.data = jsonData;
           console.log(this.data); // Access the parsed JSON data
       } catch (error) {
           console.error('There was a problem with the fetch operation:', error);
       }
   }
   
    getData() {
        return this.data
    }
}

export default PortfolioModel