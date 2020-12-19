//here we are going to init our state and connect it to our reducer
import React, {useReducer} from "react"
import NameContext from "./nameContext"
import NameReducer from "./nameReducer"
import {SEARCH_USERS, SET_LOADING} from "../types"

const NameState = (props) => {
  const initState = {
    //subject to change
    loading: false,
    users: [],
    user: {},
  }

  //Connect to our reducer
  const [state, dispatch] = useReducer(NameReducer, initState)

  //Set our action and dispatch them with type

  const searchUsers = async (text) => {
    setLoading()

    const res = await axios.get(`${url}`)

    //if their is any data it should sent with as payload
    dispatch({
      type: SEARCH_USERS,
      payload: res.data,
    })
  }

  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    })

  return (
    <NameContext.provider
      value={{
        user: state.user,
        loading: state.loading,
        searchUsers,
      }}
    >
      {props.children}
    </NameContext.provider>
  )
}

export default NameState
