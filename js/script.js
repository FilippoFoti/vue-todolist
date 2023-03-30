const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: [
                {
                    text: "Seguire la lezione con Olga",
                    done: true
                },
                {
                    text: "Completare l'esercizio di oggi",
                    done: true
                },
                {
                    text: "Seguire il recap Con Paolo e Roberto",
                    done: false
                },
                {
                    text: "Andare a fare una passeggiata",
                    done: false
                }
            ],
            newTodo: {
                    text: "",
                    done: false
                },
            error: false
        };
    },
    methods: {
        addTodo() {
            if(this.newTodo.text.length > 0) {
                this.error = false;

                this.todos.unshift({...this.newTodo});
                this.newTodo.text = "";
            } else {
                this.error = true;

                setInterval(() => {
                    this.error = false;
                }, 4000)
            }
        },
        removeTodo(indexToRemove) {
            this.todos.splice(indexToRemove, 1);
        }   
    }
}).mount("#app");