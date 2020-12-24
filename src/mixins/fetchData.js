export default {
  data() {
   return {
     api: null
   };
 },
 methods: {
   fetchData() {
     fetch(`http://localhost:3000/home`)
     .then(r => r.json())
     .then(r => {
       this.api = r;
     });
   }
 }
};