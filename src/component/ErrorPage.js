import { useRouteError } from "react-router-dom"
function ErrorPage(){
    let error = useRouteError();
    return(
        <>
        <h1>OOPS!!</h1>
        <h2>Something Went Wrong</h2>
        <p>{error.data}</p>
        </>
    )
}
export default ErrorPage