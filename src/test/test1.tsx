import { useSelector } from "react-redux"

function Test1() {
  const userState = useSelector(store => store.user)
  
    return (
    <div>{JSON.stringify(userState)}</div>
  )
}
export default Test1