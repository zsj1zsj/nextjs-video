import { useDispatch, useSelector } from "react-redux";
import { sortTodo } from "../actions/todoActions";

const SortLink = ()=>{
    const dispatch = useDispatch();
    const sort = useSelector(state=>state.todos.sortby);
    const handleSort = ()=>{
        dispatch(sortTodo());
    };

    return (
        <p><a href="#" onClick={handleSort}>{sort==='a'?'升序':'降序'}</a></p>
    );
}


export default SortLink;