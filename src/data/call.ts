import { Call } from "../type";

function generateRandomData(count:number) {
    const types = ['in', 'out'];
    const names = ['Robert Fox', 'John Doe', 'Jane Smith', 'Michael Johnson', 'Elizabeth Brown'];
    const durations = [60,  65,  70,  75,  80];
     
    const data = [];
    for (let i =  0; i < count; i++) {
      const id = (i +  1).toString();
      const today = new Date();
      today.setHours(0,  0,  0,  0);
      
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() -  1);
      yesterday.setHours(0,  0,  0,  0);
      
      const generatedDate = new Date();
      generatedDate.setHours(Math.floor(Math.random() *  24), Math.floor(Math.random() *  60));
      
      let datetime = '';
      if (generatedDate.getTime() >= today.getTime()) {
        datetime = 'today, ';
      } else if (generatedDate.getTime() >= yesterday.getTime()) {
        datetime = 'yesterday, ';
      } else {
        datetime = generatedDate.toLocaleDateString('fr-FR', { month: 'short', day: 'numeric' }) + ' ';
      }
      
      datetime += generatedDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', hour12: false });
      
      const name = names[Math.floor(Math.random() * names.length)];
      const type = types[Math.floor(Math.random() * types.length)];
      const duration = durations[Math.floor(Math.random() * durations.length)];
      
      data.push({ id, datetime, name, type, duration });
    }
    return data;
  }

export const CALL_LIST: Call[] = generateRandomData(15)

