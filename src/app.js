import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      listItems: [
        { description: "Go to the post office", priority: "high" },
        { description: "Call the dentist", priority: "low" },
        { description: "Buy cereal", priority: "high" }
      ],
      newItem: {}
    },
    methods: {
      addNewItem: function(){
        this.listItems.push({
          description: this.newItem.description,
          priority: this.newItem.priority
        });
        this.newItem = {};
      },
      changePriority: function(index){
        if(this.listItems[index].priority == "low"){
          this.listItems[index].priority = "high"
        }else{
          this.listItems[index].priority = "low"
        }
      }
    }
  });

})
