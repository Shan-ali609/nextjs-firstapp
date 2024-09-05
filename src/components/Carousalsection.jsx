import React from "react";
import "../style/carousal.css";
import Image from "next/image";

export default function Carousalsection() {
  return (
    <div className="carousal-bgimage">
      <h1 className="carousal-heading"> What Our Customers Say</h1>
      <p className="description">
        nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac,
        pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna
        ornare sit amet. Integer varius sit amet turpis eu ullamcorper.
      </p>

      <Image
        width={400}
        height={400}
        className="carousal-profilr"
        src="/images/jhon.jpg"
        alt="profile"
      />

      <h3>Jhon Doe</h3>
    </div>
  );
}
