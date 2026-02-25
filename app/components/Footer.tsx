export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 py-8 text-center">
      <p>📍 Ahmedabad, Gujarat</p>
      <p>📞 +91 9714810710</p>
      <p>📧 hassildevmurari@gmail.com</p>
      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} VSK Construction
      </p>
    </footer>
  );
}