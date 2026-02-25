import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="h-screen bg-[url('/construction.jpg')] bg-cover bg-center flex items-center justify-center text-white">
        <div className="bg-black/60 p-10 rounded-lg text-center">
          <h1 className="text-5xl font-bold mb-6">
            Building Strong Foundations
          </h1>
          <Link
            href="/contact"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}