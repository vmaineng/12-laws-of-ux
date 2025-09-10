import { useState } from "react";

interface SwatchType {
  name: string;
  hex: string;
}

interface CategoriesType {
  [key: string]: SwatchType[];
}

const Beigecategory = () => {
  const [category, setCategory] = useState<string | null>(null);

  const categories: CategoriesType = {
    "Warm Beiges": [
      { name: "Antique White", hex: "#FAEBD7" },
      { name: "Biscotti", hex: "#E3C9A2" },
      { name: "Buttercream", hex: "#EFE0CD" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Cameo White", hex: "#F0E4D3" },
      { name: "Fawn", hex: "#E5AA70" },
      { name: "French Vanilla", hex: "#F0E0C2" },
      { name: "Honeycomb", hex: "#DAAE6F" },
      { name: "Latté", hex: "#C5A582" },
      { name: "Manila", hex: "#E7C9A9" },
      { name: "Navajo White", hex: "#FFDEAD" },
      { name: "Peach Beige", hex: "#E5C9B1" },
      { name: "Praline", hex: "#C6B4A5" },
      { name: "Tawny", hex: "#C68E3F" },
      { name: "Tumbleweed", hex: "#DEAA88" },
      { name: "Wheat", hex: "#F5DEB3" },
      { name: "Bisque", hex: "#FFE4C4" },
      { name: "Desert Sand", hex: "#EDC9AF" },
      { name: "Vanilla", hex: "#F3E5AB" },
    ],
    "Cool Beiges": [
      { name: "Alabaster", hex: "#EDEAE0" },
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Bone", hex: "#E3DAC9" },
      { name: "Doe", hex: "#D7C9AA" },
      { name: "Eggshell", hex: "#F0EAD6" },
      { name: "Ginger Root", hex: "#DDCCBB" },
      { name: "Greige", hex: "#B7A99A" },
      { name: "Hazelwood", hex: "#D3C2A7" },
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Linen", hex: "#FAF0E6" },
      { name: "Macadamia", hex: "#E4CFB6" },
      { name: "Mocha", hex: "#BFA78A" },
      { name: "Mushroom", hex: "#BDACA3" },
      { name: "Natural Linen", hex: "#DFD3C2" },
      { name: "Oatmeal", hex: "#D8D5C9" },
      { name: "Parchment", hex: "#F1E9D2" },
      { name: "Pebble", hex: "#D9D3C7" },
      { name: "Sand Dollar", hex: "#DFCDB4" },
      { name: "Sandcastle", hex: "#DBC9AC" },
      { name: "Sandshell", hex: "#E8D5B7" },
      { name: "Seashell", hex: "#FFF5EE" },
      { name: "Stone", hex: "#B4A99C" },
      { name: "String", hex: "#F0E5D3" },
      { name: "Whisper White", hex: "#EFEBE0" },
      { name: "Cornsilk", hex: "#FFF8DC" },
    ],
    "Dark Beiges": [
      { name: "Ecru", hex: "#C2B280" },
      { name: "Khaki", hex: "#F0E68C" },
      { name: "Sierra", hex: "#A46F49" },
      { name: "Taupe", hex: "#B38B6D" },
      { name: "Sand", hex: "#E2CA76" },
    ],
  };

  const Swatch = ({ name, hex }: SwatchType) => (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 rounded shadow cursor-pointer hover:scale-105 transition-transform"
        style={{ backgroundColor: hex }}
        title={`${name} - ${hex}`}
      ></div>
      <span className="text-xs mt-1 text-center">{name}</span>
    </div>
  );

  return (
    <div className="p-8">
      {!category ? (
        <div>
          <h3 className="text-lg font-semibold mb-4">
            First, choose a category
          </h3>
          <div className="flex gap-4 justify-center">
            {Object.keys(categories).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="p-6 bg-gray-100  text-gray-800 rounded-lg hover:bg-gray-200 transition-colors text-center min-w-[120px]"
              >
                {cat}
                <div className="text-xs text-gray-800 mt-1">
                  ({categories[cat].length} options)
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setCategory(null)}
            className="mb-4 px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300 transition-colors"
          >
            Back to categories
          </button>
          <h3 className="text-lg font-semibold mb-4">
            Now, choose a shade from {category}:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories[category].map((swatch) => (
              <Swatch key={swatch.name} {...swatch} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Beigecategory;
