import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
          alt="Luxury beauty products"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-pink-100 mb-6">
              Discover Your Perfect Beauty Routine
            </h1>
            <p className="text-lg md:text-xl text-pink-200 mb-8">
              Premium body care and nail beauty products for the sophisticated you
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild className="bg-pink-500 hover:bg-pink-600">
                <Link href="/body-care">Shop Body Care</Link>
              </Button>
              <Button asChild variant="outline" className="text-pink-200 border-pink-500">
                <Link href="/nail-beauty">Explore Nail Beauty</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-pink-100 text-center mb-12">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] group">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070"
              alt="Body Care Collection"
              fill
              className="object-cover rounded-lg brightness-75 group-hover:brightness-90 transition-all"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-pink-100 mb-4">Body Care</h3>
                <Button asChild variant="secondary">
                  <Link href="/body-care">View Collection</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] group">
            <Image
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070"
              alt="Nail Beauty Collection"
              fill
              className="object-cover rounded-lg brightness-75 group-hover:brightness-90 transition-all"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-pink-100 mb-4">Nail Beauty</h3>
                <Button asChild variant="secondary">
                  <Link href="/nail-beauty">View Collection</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}