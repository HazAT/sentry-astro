import * as React from "react"
const SvgComponent = (props) => (
    // wrap the svg in a div that scales the size with height and width props
    <div style={{height: props.height, width: props.width}}>    
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={175}
        height={131}
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 175 131"
        style={{height: props.height, width: props.width}}
        >
        <path
            fill="#f49090"
            d="M55.977 81.512c0 8.038-6.516 14.555-14.555 14.555S26.866 89.55 26.866 81.512c0-8.04 6.517-14.556 14.556-14.556 8.039 0 14.555 6.517 14.555 14.556Zm24.745-5.822c0-.804.651-1.456 1.455-1.456h11.645c.804 0 1.455.652 1.455 1.455v11.645c0 .804-.651 1.455-1.455 1.455H82.177a1.456 1.456 0 0 1-1.455-1.455V75.689Zm68.411 5.822c0 8.038-6.517 14.555-14.556 14.555-8.039 0-14.556-6.517-14.556-14.555 0-8.04 6.517-14.556 14.556-14.556 8.039 0 14.556 6.517 14.556 14.556Z"
        />
        <rect
            width={168.667}
            height={125}
            x={3.667}
            y={3}
            stroke="#f49090"
            strokeWidth={4}
            rx={20.289}
        />
        </svg>
    </div>
  )
  export default SvgComponent