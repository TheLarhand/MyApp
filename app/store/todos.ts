export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

export let todosStore: Todo[] = [
    {id: 1, text: 'text', done: true},
    {id: 2, text: 'text', done: false},
    {id: 3, text: 'text', done: false}
]

export function addTodo(text:string) {
    todosStore = [...todosStore, {id: Date.now(), text, done: false}]
}

export function deleteTodo(id:number) {
    todosStore = todosStore.filter((t) => t.id !== id)
}

export function toggleTodo(id:number) {
    todosStore = todosStore.map((t) => t.id === id ? {...t, done: !t.done} : t)
}