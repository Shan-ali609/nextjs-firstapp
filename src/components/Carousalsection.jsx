import React from "react";
import "../style/carousal.css";
export default function Carousalsection() {
  return (
    <div className="carousal-bgimage">
      <h1 className="carousal-heading"> What Our Customers Say</h1>
      <p className="description">
    nec congue arcu lorem in nisl. Duis neque
        lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius
        viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet
        turpis eu ullamcorper.
      </p>

      <img className="carousal-profilr" src="/images/jhon.jpg" alt="profile" />

      <h3>Jhon Doe</h3>
    </div>
  );
}
