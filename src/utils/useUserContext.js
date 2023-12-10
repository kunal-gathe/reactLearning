import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "dummy name",
    email: "dummy email",
  },
});

userContext.displayName= "userContext"

export default userContext;
