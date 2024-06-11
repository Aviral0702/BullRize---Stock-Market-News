import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../../server/Auth/firebase.js";
export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
            console.log(userCredentials);
            const user = userCredentials.user;
            // navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
