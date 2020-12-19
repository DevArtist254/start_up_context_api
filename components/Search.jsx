import React, {useState, useContext} from "react"
import GithubContext from "../context/github/githubContext"
import AlertContext from "../context/alert/alertContext"

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  //value of the state to be attached...
  const [text, setText] = useState("")

  //when the button is clicked
  const onSubmit = (e) => {
    e.preventDefault()
    if (text === "") {
      alertContext.setAlert("Please enter somethig", "light")
    } else {
      githubContext.searchUsers(text)
      setText("")
    }
  }

  //..untill an on change
  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    //attached the users to the input value
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users.."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-danger btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUser}
        >
          clear
        </button>
      )}
    </div>
  )
}

export default Search
