import type { FunctionComponent } from "react";
import { Header } from "./header";
import Shop from "./shop";


 
const Main: FunctionComponent = () => {
    return ( 
        <div className="container mx-auto py-6 px-12">
            <Header />
            <Shop />
        </div>
     );
}
 
export default Main;