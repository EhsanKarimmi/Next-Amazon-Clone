import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main>
            <Navbar />
            <BottomHeader />
            <div className="bg-zinc-400 w-full h-screen">fot test</div>
            <Footer />
        </main>
    );
}
