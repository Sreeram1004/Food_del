import { useRouteError } from "react-router-dom"
const Error = () => {
    const arr = useRouteError();
    console.log(arr)
  return (
    <div className="error">
        <h1>oops error</h1>
        <h3>{arr.status}:{arr.statusText}</h3>
    </div>
  )
}

export default Error