import Image from 'next/image';
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Home</h1>
      <Image src="/next.svg" alt="Next.js Logo" width={200} height={200} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
        <p className="mt-4 text-lg text-gray-700">Next.js + Tailwind = ⚡</p>
      </div>
    </div>
  );
}