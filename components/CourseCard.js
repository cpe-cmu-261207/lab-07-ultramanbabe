import { useContext , useState } from "react";
import {TodosContext } from "../pages/gpa";

export const CourseCard = (props) => {
  const { dispatch } = useContext(TodosContext)
  return ( props.todos.map (item => {
    return (
      <div id = "table2">
        <td className="body-gpa">
          <div>
            <h3>Subject : {item.sub}</h3>
            <h3>SubjectID : {item.subID}</h3>
            <h3>Credit : {item.cred}</h3>
            <h3>Grade : {item.grd}</h3>
          </div>
        </td>
      <td>
        <button onClick = {() => {
          dispatch({
            type: "DELETE",
            payload: item.time,
          });
        }}>{'X'}</button>
      </td>
    </div>
    )}));
}

export default CourseCard;