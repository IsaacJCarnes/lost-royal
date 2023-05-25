export const WhiteTopTile = ({tilePos, extraTags}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.280355mm"
      height="19.84375mm"
      viewBox="0 0 87.988744 74.999999"
      version="1.1"
      id="TopTile"
    >
      <defs id="defs2" />
      <g id="layer1" transform="translate(-65,-40)">
        <rect
          id={"tilePos " + tilePos}
          className={extraTags}
          width="80.040504"
          height="59.999996"
          x="65"
          y="40"
          display={"inline"}
          fill="#efe8e8"
          fillOpacity={1}
          strokeWidth={0.37795275}
          paintOrder={"stroke fill markers"}
          strokeDasharray={"none"}
          stroke="#eee7e7"
          strokeOpacity={1}
        />
      </g>
    </svg>
  );
};

export const WhiteBottomTile = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.280355mm"
      height="19.84375mm"
      viewBox="0 0 87.988744 74.999999"
      version="1.1"
      id="BottomTile"
    >
      <defs id="defs2" />
      <g id="layer1" transform="translate(-65,-40)">
        <path
          id="rect4440"
          display={"inline"}
          fill="#c9b6be"
          fillOpacity={1}
          strokeWidth={0}
          paintOrder={"stroke fill markers"}
          d="m 145,40 7.98874,14.999999 V 115 L 145,99.999996 Z"
        />
        <path
          id="rect1108"
          display={"inline"}
          fill="#d8ced2"
          fillOpacity={1}
          strokeWidth={0.37795275}
          paintOrder={"stroke fill markers"}
          strokeDasharray={"none"}
          stroke="#d8cfd3"
          strokeOpacity={1}
          d="m 65,99.999992 h 80 L 152.98874,115 H 72.988743 Z"
        />
      </g>
    </svg>
  );
};

export const BlackTopTile = ({tilePos, extraTags}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.280355mm"
      height="19.84375mm"
      viewBox="0 0 87.988744 74.999999"
      version="1.1"
      id="TopTile"
    >
      <defs id="defs2" />
      <g id="layer1" transform="translate(-65,-40)">
        <rect
          id={"tilePos " + tilePos}
          className={extraTags}
          width="80.040504"
          height="59.999996"
          x="65"
          y="40"
          fill="#8b8b8b"
          fillOpacity={1}
          strokeWidth={0.37795275}
          paintOrder={"stroke fill markers"}
          stroke="#8c8c8c"
          strokeOpacity={1}
          strokeDasharray={"none"}
        />
      </g>
    </svg>
  );
};

export const BlackBottomTile = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.280355mm"
      height="19.84375mm"
      viewBox="0 0 87.988744 74.999999"
      version="1.1"
      id="BottomTile"
    >
      <defs id="defs2" />
      <g id="layer1" transform="translate(-65,-40)">
        <path
          id="rect4440"
          display={"inline"}
          fill="#626262"
          fillOpacity={1}
          strokeWidth={0}
          paintOrder={"stroke fill markers"}
          d="m 145,40 7.98874,14.999999 V 115 L 145,99.999996 Z"
        />
        <path
          id="rect1108"
          display={"inline"}
          fill="#757575"
          fillOpacity={1}
          strokeWidth={0.37795275}
          paintOrder={"stroke fill markers"}
          strokeDasharray={"none"}
          stroke="#757575"
          strokeOpacity={1}
          d="m 65,99.999992 h 80 L 152.98874,115 H 72.988743 Z"
        />
      </g>
    </svg>
  );
};


export const RoyalChar = () => {
  return(
  <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="123.719"
      height="198.345"
      version="1.1"
      viewBox="0 0 123.719 198.345"
      id="RoyalChar"
    >
      <defs>
        <pattern width="256" height="256" patternUnits="userSpaceOnUse">
          <image
            width="260"
            height="260"
            x="0"
            y="0"
          ></image>
        </pattern>
        <linearGradient id="linearGradient9906">
          <stop offset="0" stopColor="#939393" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#faa" stopOpacity="0"></stop>
        </linearGradient>
        <pattern
          id="Checkerboard"
          width="2"
          height="2"
          patternTransform="scale(10)"
          patternUnits="userSpaceOnUse"
        >
          <path fill="#000" stroke="none" d="M0 0H1V1H0z"></path>
          <path fill="#000" stroke="none" d="M1 1H2V2H1z"></path>
        </pattern>
        <linearGradient>
          <stop offset="0" stopColor="#7f0000" stopOpacity="1"></stop>
        </linearGradient>
        <pattern width="256" height="256" patternUnits="userSpaceOnUse">
          <image
            width="260"
            height="260"
            x="0"
            y="0"
          ></image>
        </pattern>
        <linearGradient id="Gloss">
          <stop offset="0" stopColor="#bba5a5" stopOpacity="0.686"></stop>
          <stop offset="0.585" stopColor="#939393" stopOpacity="0.547"></stop>
          <stop offset="1" stopColor="#c7c7c7" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient2794"
          x1="30"
          x2="170"
          y1="195"
          y2="-10"
          gradientTransform="translate(-.085 84.464)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#Gloss"
        ></linearGradient>
        <linearGradient
          id="linearGradient9900"
          x1="24.073"
          x2="100.163"
          y1="60.871"
          y2="23.709"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient9906"
        ></linearGradient>
      </defs>
      <g
        fillOpacity="1"
        stroke="#000"
        strokeLinejoin="round"
        paintOrder="stroke fill markers"
        transform="translate(-33.055 -74.653)"
      >
        <path
          fill="#e9c6af"
          strokeOpacity="1"
          strokeWidth="0.756"
          d="M156.396 272.62c-1.32-13.18-5.61-18.669-11.951-18.844-7.967 0-26.646-13.017-27.886-23.555-5.001-19.78-9.763-75.89-6.763-80.221 7.063-2.537 8.872-3.93 8.815-6.485-.069-3.073-1.187-5.57-9.052-6.185-3.14-.245-1.914-2.061-2.559-5.285 9.126-5.266 13.499-16.092 10.694-26.305-2.804-10.212-12.093-17.287-22.78-17.276-10.686-.01-19.974 7.064-22.779 17.276-2.804 10.213 1.568 21.039 10.694 26.305-.645 3.224.58 5.04-2.559 5.285-7.865.616-8.983 3.112-9.052 6.185-.057 2.554 1.752 3.948 8.815 6.485 3 4.33-1.762 60.44-6.763 80.221-1.24 10.538-19.918 23.555-27.886 23.555-6.34.175-10.63 5.664-11.95 18.844h61.48z"
          display="inline"
        ></path>
        <path
          fill="url(#linearGradient2794)"
          strokeDasharray="none"
          strokeWidth="0"
          d="M156.396 272.62c-1.32-13.18-5.61-18.669-11.951-18.844-7.967 0-26.646-13.017-27.886-23.555-5.001-19.78-9.763-75.89-6.763-80.221 7.063-2.537 8.872-3.93 8.815-6.485-.069-3.073-1.187-5.57-9.052-6.185-3.14-.245-1.914-2.061-2.559-5.285 9.126-5.266 13.499-16.092 10.694-26.305-2.804-10.212-12.093-17.287-22.78-17.276-10.686-.01-19.974 7.064-22.779 17.276-2.804 10.213 1.568 21.039 10.694 26.305-.645 3.224.58 5.04-2.559 5.285-7.865.616-8.983 3.112-9.052 6.185-.057 2.554 1.752 3.948 8.815 6.485 3 4.33-1.762 60.44-6.763 80.221-1.24 10.538-19.918 23.555-27.886 23.555-6.34.175-10.63 5.664-11.95 18.844h61.48z"
          display="inline"
        ></path>
      </g>
      <g
        fillOpacity="1"
        strokeDasharray="none"
        strokeOpacity="1"
        display="inline"
        transform="translate(-.27 -23.898)"
      >
        <path
          fill="#000"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0"
          d="M90.93 51.858c-.416 3.39 1.814 6.946 5.218 7.726 3.344.996 7.283-1.287 7.76-4.814.555-3.173-1.184-6.47-4.178-7.433-3.896-.108-7.374 1.563-8.8 4.521z"
          display="inline"
        ></path>
        <path
          fill="#000"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0"
          d="M33.307 51.858c.415 3.39-1.815 6.946-5.22 7.726-3.343.996-7.281-1.287-7.759-4.814-.554-3.173 1.185-6.47 4.178-7.433 4.424.107 7.209 2.263 8.8 4.521z"
          display="inline"
        ></path>
        <path
          fill="#2ca02c"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.378"
          d="M61.352 39.33c-11.894.172-20.67 8.809-23.19 21.467-.1-3.242.435-6.47.236-9.717.019-2.738.447-5.045-1.699-3.598-1.349 1.268-2.235 2.943-3.392 4.376-2.162-2.793-4.756-4.866-8.801-4.52-.193-2.355.17-4.626.396-6.963.63-3.583 1.214-7.57 4.004-10.191 4.425-3.861 10.274-5.979 16.133-6.09.712-.01 1.421-.01 2.133-.002 4.98.05 9.955.46 14.946.678 4.991-.219 9.967-.628 14.946-.678a93.029 93.029 0 012.133.002c5.859.111 11.708 2.229 16.133 6.09 2.79 2.62 3.374 6.608 4.004 10.191.227 2.337.589 4.608.396 6.962-4.045-.345-6.638 1.728-8.8 4.521-1.157-1.433-2.044-3.108-3.393-4.376-2.146-1.447-1.717.86-1.7 3.598-.198 3.247.337 6.475.237 9.717-2.52-12.658-11.296-21.295-23.19-21.467z"
          display="inline"
        ></path>
        <path
          fill="url(#linearGradient9900)"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0"
          d="M61.352 39.33c-11.894.172-20.67 8.809-23.19 21.467-.1-3.242.435-6.47.236-9.717.019-2.738.447-5.045-1.699-3.598-1.349 1.268-2.235 2.943-3.392 4.376-2.162-2.793-4.756-4.866-8.801-4.52-.193-2.355.17-4.626.396-6.963.63-3.583 1.214-7.57 4.004-10.191 4.425-3.861 10.274-5.979 16.133-6.09.712-.01 1.421-.01 2.133-.002 4.98.05 9.955.46 14.946.678 4.991-.219 9.967-.628 14.946-.678a93.029 93.029 0 012.133.002c5.859.111 11.708 2.229 16.133 6.09 2.79 2.62 3.374 6.608 4.004 10.191.227 2.337.589 4.608.396 6.962-4.045-.345-6.638 1.728-8.8 4.521-1.157-1.433-2.044-3.108-3.393-4.376-2.146-1.447-1.717.86-1.7 3.598-.198 3.247.337 6.475.237 9.717-2.52-12.658-11.296-21.295-23.19-21.467z"
          display="inline"
        ></path>
        <path
          fill="url(#Checkerboard)"
          stroke="none"
          strokeWidth="0"
          d="M61.352 39.33c-11.894.172-20.67 8.809-23.19 21.467-.1-3.242.435-6.47.236-9.717.019-2.738.447-5.045-1.699-3.598-1.349 1.268-2.235 2.943-3.392 4.376-2.162-2.793-4.756-4.866-8.801-4.52-.193-2.355.17-4.626.396-6.963.63-3.583 1.214-7.57 4.004-10.191 4.425-3.861 10.274-5.979 16.133-6.09.712-.01 1.421-.01 2.133-.002 4.98.05 9.955.46 14.946.678 4.991-.219 9.967-.628 14.946-.678a93.029 93.029 0 012.133.002c5.859.111 11.708 2.229 16.133 6.09 2.79 2.62 3.374 6.608 4.004 10.191.227 2.337.589 4.608.396 6.962-4.045-.345-6.638 1.728-8.8 4.521-1.157-1.433-2.044-3.108-3.393-4.376-2.146-1.447-1.717.86-1.7 3.598-.198 3.247.337 6.475.237 9.717-2.52-12.658-11.296-21.295-23.19-21.467z"
          display="inline"
        ></path>
      </g>
    </svg>
)};