import { createBrowserRouter, RouterProvider } from "react-router-dom"


function ApiRouter() {
    const router=createBrowserRouter([
        {
            path:"/",element:<h1>hi this just testing okey</h1>
        }
    ])    
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default ApiRouter