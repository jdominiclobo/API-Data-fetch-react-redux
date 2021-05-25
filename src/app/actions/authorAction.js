import axios from "axios";

export const fetchAuthors = () => {
  return (dispatch) => {
    axios
      .get("https://jsonmock.hackerrank.com/api/articles")
      .then((response) => {
        const authors = response.data.data;
        dispatch(getAuthors(authors));
        console.log("authors", authors);
      });
  };
};

export const getAuthors = (authors) => {
  return {
    type: "GET_AUTHORS",
    payload: authors,
  };
};
