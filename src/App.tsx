import { AuthProvider } from "./Pages/auth/login/AuthContext";
import Routing from "./routes/routing/routing";

export const App=()=>{
  return(
    <AuthProvider>
        <div className="w-full h-[100vh]">
          <Routing/>
        </div>
    </AuthProvider>
   
  );
}