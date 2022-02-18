const React = require("react")
const Def = require("../views/layouts/default")

function error404 () {
    return (
        <Def>
            <h1>Error 404</h1>
            <h2>non-existent Bread</h2>
                <p>
                    and it does not have gluten.
                </p>
                <img src="/images/travolta.gif" alt="john travolta looks around an empty room" />
        </Def>
    )
}

module.exports = error404