// src/app/components/Footer.tsx
//ページ全体のフッター

export default function Footer() {
  return (
    <footer className="bg-blueprint text-paper/60 px-6 py-6 text-center md:px-12">
      <p className="label-sm text-[10px]">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
