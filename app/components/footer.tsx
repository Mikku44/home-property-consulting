
export default function Footer({
  companyName = "Your Company",
  year = new Date().getFullYear(),
  links = [],
  socialLinks = [],
  backgroundColor = "bg-gray-900",
  textColor = "text-white",
  customContent = null
}) {
  return (
    <footer className={`${backgroundColor} ${textColor} py-8 px-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Custom content section */}
        {customContent && (
          <div className="mb-8">
            {customContent}
          </div>
        )}

        {/* Links section */}
        {links.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {links.map((column, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="hover:opacity-75 transition-opacity"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Social links */}
        {socialLinks.length > 0 && (
          <div className="flex gap-6 mb-8 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:opacity-75 transition-opacity"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 text-center md:text-left">
          <p>&copy; {year} {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}