const React = require("react")
const Def = require("../views/layouts/default")

function show ({bread, index}) {
    return (
        <Def>
            <h1>{bread.name} Bread</h1>
            <p>
                and it 
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does not </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />

            <a href={`/bread/${bread.id}/edit`}><button>Edit Bread</button></a>

            <form action={`/bread/${bread.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE BREAD"/>     
            </form>

            <a href="/bread"><button>Bread List</button></a>
        </Def>
    )
}

module.exports = show