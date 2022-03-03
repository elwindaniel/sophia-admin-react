import { Switch, Route } from "react-router-dom"
import School from "./school"

function Schools() {
    return (
        <div>

            <Switch>
                <Route exact path="/schools" component={School} />
            </Switch>

        </div>
    )
}

export default Schools
