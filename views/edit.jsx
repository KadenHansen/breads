const React = require("react")
const Def = require("../views/layouts/default")

function edit ({bread, index}) {
    return (
        <Def>
            <h2>Edit Bread</h2>
            <form action={`/bread/${bread.id}?_method=PUT`} method="POST">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name" 
                    id="name"
                    defaultValue={bread.name}
                    required
                />
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    name="image" 
                    id="image"
                    size="50"
                    defaultValue={bread.image}
                />
                <label htmlFor="hasGluten">Has GLuten?</label>
                <input
                    type="checkbox"
                    name="hasGluten" 
                    id="hasGluten"
                    defaultChecked={bread.hasGluten}
                />
                <br />
                <input type="submit" />
            </form>
        </Def>
    )
}

module.exports = edit