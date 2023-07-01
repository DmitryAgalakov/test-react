import { InfoRibbon } from "./InfoRibbon/InfoRibbon";
import { MainControl } from "./MainControl/MainControl";
import { TopTools } from "./TopTools/TopTools";



export function BaseAppContainer(){
    return(
        <div className="BaseAppContainer">
            <TopTools/>
            <MainControl/>
            <InfoRibbon/>
        </div>
    )
}