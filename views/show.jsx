const React = require("react")
const Def = require("../views/layouts/default")

function show ({bread}) {
    return (
        <Def>
            <main>
                <h1>{bread.name} Bread</h1>
                <p>
                    and it 
                    {
                        bread.hasGluten
                        ? <span> does </span>
                        : <span> does not </span>
                    }
                    have gluten
                </p>
                <img src={bread.image} alt={bread.name} />
            </main>
        </Def>
    )
}

module.exports = show