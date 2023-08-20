function Window(){
   function toGoogle(){
        window.open("http://localhost:3001/google")
    }
    return <div>
        <button onClick={toGoogle}>Google</button>
    </div>
}

export default Window;