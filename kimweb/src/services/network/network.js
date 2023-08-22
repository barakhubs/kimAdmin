import { Offline, Online } from "react-detect-offline";
const NetworkNotification = () => {
  
    return ( 
        <>
      <Offline>
          <div className="d-flex align-items-center justify-content-center">
              <div className="text-warning text-small"> Your network is unstable </div>
          </div>
      </Offline>
      <Online></Online>
      
        </>
     );
}
 
export default NetworkNotification;