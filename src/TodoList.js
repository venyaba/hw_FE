
const listStyle={
    listStyle: 'none'
}

function TodoList(props) {
  const { todos } = props;
  return (
    <ul style={listStyle}>
      {todos.length ? (
        todos.map((todo, index) => <li key={index}>{`${index + 1 }. ${todo}`}</li>)
      ) : (
        <div>
          <p>No task found.</p>
        </div>
      )}
    </ul>
  );
}

export default TodoList;
