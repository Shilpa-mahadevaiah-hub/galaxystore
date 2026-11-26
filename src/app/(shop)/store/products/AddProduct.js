"use client";

import { useEffect, useState } from "react";

export default function AddProduct() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    
    // POST new product to API
    async function addProduct() {
        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                price: Number(price),
            }),
        });
        if (response.ok) {
            setName("");
            setPrice("");
            alert("Product added successfully!");
        }
    }


    return (
        <div>
     
            <hr />
            <br /><br />

            <h2>Add Product</h2>
            <input type="text" placeholder="Product Name" value={name} onChange={(event) =>
                setName(event.target.value)
            }
            />
            <br /><br />
            <input type="number" placeholder="Price" value={price} onChange={(event) =>
                setPrice(event.target.value)
            }
            />
            <br /><br />
            <button onClick={addProduct}>Add Product </button>
        </div>
    );
}