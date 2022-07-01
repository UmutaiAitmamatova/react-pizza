import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <div>
            <ContentLoader
                className="pizza-block"
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="104" y="187" rx="0" ry="0" width="0" height="2" />
                <rect x="70" y="71" rx="0" ry="0" width="2" height="1" />
                <rect x="88" y="81" rx="0" ry="0" width="1" height="2" />
                <circle cx="135" cy="127" r="122" />
                <rect x="-1" y="261" rx="3" ry="3" width="280" height="26" />
                <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
                <rect x="3" y="416" rx="0" ry="0" width="80" height="36" />
                <rect x="127" y="410" rx="18" ry="18" width="148" height="45" />
            </ContentLoader>
        </div>
    );
}

export default LoadingBlock;
