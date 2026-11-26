import {products} from "../../_lib/products";

export async function GET(request) {
 const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    // GET one product
    // Example: /api/products?id=1
    if (id) {
        const product = products.find(
            (product) => product.id === Number(id)
        );
        if (!product) {
            return Response.json(
                { message: "Product not found" },
                { status: 404 }
            );
        }
        return Response.json(product);
    }
    // GET all products
    // Example: /api/products
    return Response.json(products);
}
// POST
export async function POST(request) {

    const data = await request.json();

    const newProduct = {
        id: products.length + 1,
        name: data.name,
        price: data.price,
    };

    products.push(newProduct);

    return Response.json(
        newProduct,
        { status: 201 }
    );
}