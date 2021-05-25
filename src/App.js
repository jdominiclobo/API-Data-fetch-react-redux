import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { actionCreators } from "./app/actions/index";

function App(props) {
  console.log("app props", props.authors);
  const authors = useSelector((state) => state.authors);
  const dispatch = useDispatch();

  const { fetchAuthors, getAuthors } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>Article Authors</h1>
      {!props.authors ? (
        <h2>Loading . . . </h2>
      ) : (
        <div>
          <ul>
            {props.authors.map((author) => {
              return <li key={author.created_at}>{author.author}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
  };
};

export default connect(mapStateToProps)(App);
