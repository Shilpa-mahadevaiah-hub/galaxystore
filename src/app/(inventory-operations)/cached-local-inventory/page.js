import { getInventory } from "../../_lib/inventoryStore";


export default async function CachedLocalInventory() {

    const products =
        await getInventory();


    return (
        <main
            style={{
                padding: "40px",
                fontFamily: "Arial"
            }}
        >

            <p
                style={{
                    color: "#6d28d9",
                    fontWeight: "bold"
                }}
            >
                GALALXY STORE INVENTORY
            </p>


            <h1>
                Cached Local Inventory
            </h1>


            {products.map((product) => (

                <div
                    key={product.id}
                    style={{
                        maxWidth: "500px",
                        padding: "18px",
                        marginBottom: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "8px"
                    }}
                >

                    <h2>
                        {product.name}
                    </h2>

                    <p>
                        Available Stock:
                        {" "}
                        <strong>
                            {product.stock}
                        </strong>
                    </p>

                </div>

            ))}

        </main>
    );
}