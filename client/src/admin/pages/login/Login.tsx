import { useState } from "react"
import Header from "../../components/Header/Header"

const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const handleLogin = async () => {
        try {
            
        } catch (error) {
            
        }
    }
  return (
    <div>
       <Header title="Login" />
       <form onSubmit={handleLogin}>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                value={email}
                
                />
            <label htmlFor="password">Hasło</label>
        </div>

       </form>
    </div>
  )
}

export default Login