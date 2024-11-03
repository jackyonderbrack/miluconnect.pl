import React from 'react';
import "./Layout.css"

interface LayoutProps {
    variants: "sidenavLeft" | "sidenavRight" | "topNav" | "fullWidth";
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ variants, children }) => {
    let layoutClass = "layout_component";
    switch (variants) {
        case "sidenavLeft": layoutClass += " layout_sidenav_left";
            break;
        case "sidenavRight": layoutClass += " layout_sidenav_right";
            break;
        case "topNav": layoutClass += " layout_top_nav";
            break;
        case "fullWidth": layoutClass += " layout_full_width";
            break;
        default:
            break;
    }

  return (
    <div className={layoutClass}>
        {children}
    </div>
  );
};

export default Layout;
