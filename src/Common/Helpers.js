import * as React from "react";
import { CommonActions } from "@react-navigation/native";

export const navigationRef = React.createRef();

class CommonHelper {
  /**
   * navigate to given page
   * reset whole stack and set given route on the top
   */
  navigateToPage = (route, params) => {
    navigationRef.current?.navigate(route, params);
  };

  /**
   * navigate to given page
   * add new navigation on the stack
   */
  resetNavigation = (route, params = {}) => {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: route },
          {
            name: route,
            params: params,
          },
        ],
      }),
    );
  };

  /**
   * handle the back button click 
   * navigate to the previous page on the stact
   */
  goBack = () => {
    navigationRef.current?.goBack();
  };
}
export default CommonHelper;
