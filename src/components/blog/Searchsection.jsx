import React from "react";
import "@/style/blogcss/searchsection.css";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { headers } from "next/headers";

export default function Blogcardsection() {
  const data = [
    {
      header: "Template: More Tag",
      imges:
        "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1444858345149-8ff40887589b-1.jpg  ",
    },
    {
      header: "Template: sticky",
      imges:
        "https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1453282716202-de94e528067c-1.jpg?resize=40%2C40&ssl=1 1x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1453282716202-de94e528067c-1.jpg?resize=60%2C60&ssl=1 1.5x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1453282716202-de94e528067c-1.jpg?resize=80%2C80&ssl=1 2x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1453282716202-de94e528067c-1.jpg?resize=120%2C120&ssl=1 3x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1453282716202-de94e528067c-1.jpg ",
    },
    {
      header: "Hello World",
      imges:
        "https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1444858345149-8ff40887589b-1.jpg  ",
    },
    {
      header: "Markup: HTML Tags and Formatting",
      imges:
        "https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-2.jpg?resize=40%2C40&ssl=1 1x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-2.jpg?resize=60%2C60&ssl=1 1.5x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-2.jpg?resize=80%2C80&ssl=1 2x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-2.jpg?resize=120%2C120&ssl=1 3x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-2.jpg ",
    },
    {
      header: "Markup: Image Alignment",
      imges:
        "https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1433878455169-4698e60005b1-1.jpg?resize=40%2C40&ssl=1 1x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1433878455169-4698e60005b1-1.jpg?resize=60%2C60&ssl=1 1.5x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1433878455169-4698e60005b1-1.jpg?resize=80%2C80&ssl=1 2x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1433878455169-4698e60005b1-1.jpg?resize=120%2C120&ssl=1 3x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1433878455169-4698e60005b1-1.jpg?resize=160%2C160&ssl=1 4x",
    },
    {
      header: "Template: Featured Image (Horizontal)",
      imges:
        "https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1440557653082-e8e186733eeb-1.jpg?resize=40%2C40&ssl=1 1x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1440557653082-e8e186733eeb-1.jpg?resize=60%2C60&ssl=1 1.5x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1440557653082-e8e186733eeb-1.jpg?resize=80%2C80&ssl=1 2x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1440557653082-e8e186733eeb-1.jpg?resize=120%2C120&ssl=1 3x, https://i0.wp.com/colorlibhub.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1440557653082-e8e186733eeb-1.jpg?resize=160%2C160&ssl=1 4x  ",
    },
  ];
  return (
    <div>
      <div>
        <div className="search-here">
          <IoSearch className="search-bttn" />
          <input type="text" placeholder="search..." />
        </div>
      </div>

      <div>
        <div className="post-head">Top Posts</div>
        <div className="post-top">
          {data.map((items, index) => (
            <div className="list-port" key={index}>
              <Image
                className="post-imgs"
                src={items.imges}
                alt="SFS"
                width={592}
                height={350}
              />
              <h2 className="head-detail">{items.header}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
