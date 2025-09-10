interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    { name: "Home", href: "#", icon: "🏠" },
    { name: "Shop", href: "#", icon: "🛒" },
    { name: "Blog", href: "#", icon: "📝" },
    { name: "About", href: "#", icon: "ℹ️" },
    { name: "Contact", href: "#", icon: "📞" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 h-16">
      <div className="flex justify-around items-center h-full max-w-4xl mx-auto">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-col items-center py-2 px-4 text-xs text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
