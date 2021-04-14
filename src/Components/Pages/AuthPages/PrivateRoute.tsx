import React from "react";
import { Redirect, Route } from "react-router-dom";

// Component to check if user is logged in for private routes.
export const PrivateRoute: React.ComponentType<any> = ({
  component: Component,
  ...rest
}) => {
  // Check user state in localstorage
  const isAuthed = () => {
    const user = localStorage.getItem("user");
    return user;
  };
  // const isAuthed = useTypedSelector((props) => {
  //   return props.userReducer.user;
  // });

  // Function to check if user is set or not.
  const isUserAuthed = (): boolean => {
    if (isAuthed !== null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isUserAuthed() ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    ></Route>
  );
};
