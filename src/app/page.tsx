import Banner from "@/components/Banner";
import Products from "@/components/Products";

const getProductsData = async () => {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

export default async function Home() {
    const productsData = await getProductsData();

    return (
        <main className="bg-zinc-300 pb-10">
            <Banner />
            <div className="">
                <Products productsData={productsData} />
            </div>
        </main>
    );
}
