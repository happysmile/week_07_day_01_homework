import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      listItems: [
        { description: "Go to the post office", priority: "high", isDone: false },
        { description: "Call the dentist", priority: "low", isDone: false },
        { description: "Buy cereal", priority: "high", isDone: false }
      ],
      newItem: {}
    },
    methods: {
      addNewItem: function(){
        this.listItems.push({
          description: this.newItem.description,
          priority: this.newItem.priority,
          isDone: false
        });
        this.newItem = {};
      },
      changePriority: function(index){
        if(this.listItems[index].priority == "low"){
          this.listItems[index].priority = "high"
        }else{
          this.listItems[index].priority = "low"
        }
      },
      showAsDone: function(index){
        this.listItems[index].isDone = true
      },
      deleteItem: function(index){
        const currentIndex = this.listItems.indexOf(this.listItems[index]);
        this.listItems.splice(currentIndex, 1);
      },
      restoreItem: function(index){
        this.listItems[index].isDone = false
      }
    }
  });

})
