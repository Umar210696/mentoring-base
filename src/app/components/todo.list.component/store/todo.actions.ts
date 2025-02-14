import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../todos.list.component";

export const TodosActions = createActionGroup ({
    source: 'todos',

    events: {
        'set': props <{todos: Todo [] }>(),

        'create': props <{todo: Todo }>(),
        'delete': props <{id: number}>(),
    }
});

