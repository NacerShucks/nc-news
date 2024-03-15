import { useState } from "react"
import { getUser} from "../api"

export default function Login (props){
    const { setUser } = props
    const [nameInput, setNameInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [loadingMsg, setLoadingMsg] = useState("")

    const handleChange = (e) => {
        setIsLoading(false)
        setNameInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNameInput("")
        setLoadingMsg("logging in...")
        setIsLoading(true)
        getUser(nameInput).then((user) => {
            setUser(user)
        }).catch((err) => {
            setLoadingMsg("invalid username")
        })
    }

    const loginLoader = () => {
        if(!isLoading){
           return <button type={"submit"}>submit</button>
        }else if(isLoading){
           return <p>{loadingMsg}</p>
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="fUsername">username:</label>
            <input type="text" id="fUsername" name="fUsername" onChange={handleChange} value={nameInput}></input>
            {loginLoader()}
        </form>
    )
}