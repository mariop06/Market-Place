import { AuthProvider } from "./Pages/auth/login/AuthContext";
import Routing from "./routes/routing/routing";

export const App=()=>{
  return(
    <AuthProvider>
      <Routing/>
    </AuthProvider>
   
  );
}