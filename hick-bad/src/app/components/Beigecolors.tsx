const Beigecolors = () => {
  const beigeSwatches = [
    { name: "Alabaster", hex: "#EDEAE0" },
    { name: "Antique White", hex: "#FAEBD7" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Biscotti", hex: "#E3C9A2" },
    { name: "Bone", hex: "#E3DAC9" },
    { name: "Buttercream", hex: "#EFE0CD" },
    { name: "Camel", hex: "#C19A6B" },
    { name: "Cameo White", hex: "#F0E4D3" },
    { name: "Cream", hex: "#FFFDD0" },
    { name: "Doe", hex: "#D7C9AA" },
    { name: "Ecru", hex: "#C2B280" },
    { name: "Eggshell", hex: "#F0EAD6" },
    { name: "Fawn", hex: "#E5AA70" },
    { name: "French Vanilla", hex: "#F0E0C2" },
    { name: "Ginger Root", hex: "#DDCCBB" },
    { name: "Greige", hex: "#B7A99A" },
    { name: "Hazelwood", hex: "#D3C2A7" },
    { name: "Honeycomb", hex: "#DAAE6F" },
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Khaki", hex: "#F0E68C" },
    { name: "Latté", hex: "#C5A582" },
    { name: "Linen", hex: "#FAF0E6" },
    { name: "Macadamia", hex: "#E4CFB6" },
    { name: "Manila", hex: "#E7C9A9" },
    { name: "Mocha", hex: "#BFA78A" },
    { name: "Mushroom", hex: "#BDACA3" },
    { name: "Natural Linen", hex: "#DFD3C2" },
    { name: "Navajo White", hex: "#FFDEAD" },
    { name: "Oatmeal", hex: "#D8D5C9" },
    { name: "Parchment", hex: "#F1E9D2" },
    { name: "Peach Beige", hex: "#E5C9B1" },
    { name: "Pebble", hex: "#D9D3C7" },
    { name: "Praline", hex: "#C6B4A5" },
    { name: "Sand", hex: "#E2CA76" },
    { name: "Sand Dollar", hex: "#DFCDB4" },
    { name: "Sandcastle", hex: "#DBC9AC" },
    { name: "Sandshell", hex: "#E8D5B7" },
    { name: "Seashell", hex: "#FFF5EE" },
    { name: "Sierra", hex: "#A46F49" },
    { name: "Stone", hex: "#B4A99C" },
    { name: "String", hex: "#F0E5D3" },
    { name: "Taupe", hex: "#B38B6D" },
    { name: "Tawny", hex: "#C68E3F" },
    { name: "Tumbleweed", hex: "#DEAA88" },
    { name: "Wheat", hex: "#F5DEB3" },
    { name: "Whisper White", hex: "#EFEBE0" },
    { name: "Bisque", hex: "#FFE4C4" },
    { name: "Cornsilk", hex: "#FFF8DC" },
    { name: "Desert Sand", hex: "#EDC9AF" },
    { name: "Vanilla", hex: "#F3E5AB" },
  ];

  return (
    <div className="grid grid-cols-5 gap-4 p-8">
      {beigeSwatches.map((swatch) => (
        <div key={swatch.name} className="flex flex-col items-center">
          <div
            className="w-20 h-20 rounded shadow"
            style={{ backgroundColor: swatch.hex }}
          ></div>
          <span>{swatch.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Beigecolors;
