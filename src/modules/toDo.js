export default {
    state() {
        return {
            newTask: "",
            tasks: [],
            checkedStatus: false
        }
    },

    getters: {
        getTasks(state) {
            return state.tasks;
        },
        getNewTask(state) {
            return state.newTask;
        }
    },

    mutations: {        
/*         addTask(state) {

             if (state.newTask === '') {
                alert('Ups, you need to write a task');
            } else {
                state.tasks.push(state.newTask);
            } 
        } */
    }, 
}