// src/app/components/Footer.tsx
//ページ全体のフッター

export default function Footer() {
  return (
    <footer className="bg-blueprint text-paper/60 px-6 md:px-12 py-6 text-center">
      <p className="label-sm text-[10px]">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
    </footer>
  );
}