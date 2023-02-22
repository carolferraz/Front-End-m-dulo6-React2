import { BsXLg } from "react-icons/bs";

export const Icon = (props) => {
  const icons = {
    home: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        role="img"
        viewBox="0 0 24 24"
      >
        <path
          d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    ),
    discovery: (
      <svg
        color={props.color}
        fill={props.color}
        height={props.size}
        aria-label={props.label}
        viewBox="0 0 24 24"
      >
        <polygon
          fill="none"
          points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polygon>
        <polygon
          fillRule="evenodd"
          points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
        ></polygon>
        <circle
          cx="12.001"
          cy="12.005"
          fill="none"
          r="10.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></circle>
      </svg>
    ),
    arrowDown: (
      <svg
        color={props.color}
        fill={props.color}
        height={props.size}
        aria-label={props.label}
        viewBox="0 0 24 24"
      >
        <path d="M2.99998 6.49799C3.13132 6.49786 3.26138 6.52367 3.38271 6.57395C3.50404 6.62424 3.61424 6.69799 3.70698 6.79099L12 15.087L20.293 6.79099C20.3852 6.69548 20.4956 6.6193 20.6176 6.56689C20.7396 6.51448 20.8708 6.4869 21.0036 6.48574C21.1364 6.48459 21.268 6.50989 21.3909 6.56017C21.5138 6.61045 21.6255 6.68471 21.7194 6.7786C21.8133 6.87249 21.8875 6.98414 21.9378 7.10704C21.9881 7.22994 22.0134 7.36162 22.0122 7.4944C22.0111 7.62718 21.9835 7.75839 21.9311 7.8804C21.8787 8.0024 21.8025 8.11275 21.707 8.20499L12.707 17.209C12.5158 17.3894 12.2629 17.49 12 17.49C11.7371 17.49 11.4842 17.3894 11.293 17.209L2.29298 8.20499C2.15317 8.06514 2.05796 7.88698 2.0194 7.69302C1.98083 7.49907 2.00063 7.29804 2.0763 7.11534C2.15197 6.93264 2.28011 6.77648 2.44452 6.66659C2.60893 6.55671 2.80223 6.49803 2.99998 6.49799Z" />
      </svg>
    ),
    options: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <circle
          cx="12"
          cy="12"
          fill="none"
          r="8.635"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></circle>
        <path
          d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    ),

    search: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <path
          d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="16.511"
          x2="22"
          y1="16.511"
          y2="22"
        ></line>
      </svg>
    ),

    reels: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <line
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="2.049"
          x2="21.95"
          y1="7.002"
          y2="7.002"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="13.504"
          x2="16.362"
          y1="2.001"
          y2="7.002"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="7.207"
          x2="10.002"
          y1="2.11"
          y2="7.002"
        ></line>
        <path
          d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <path
          d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
          fillRule="evenodd"
        ></path>
      </svg>
    ),
    direct: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <line
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="22"
          x2="9.218"
          y1="3"
          y2="10.083"
        ></line>
        <polygon
          fill="none"
          points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polygon>
      </svg>
    ),
    notifications: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
      </svg>
    ),
    create: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <path
          d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="6.545"
          x2="17.455"
          y1="12.001"
          y2="12.001"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="12.003"
          x2="12.003"
          y1="6.545"
          y2="17.455"
        ></line>
      </svg>
    ),
    more: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="3"
          x2="21"
          y1="4"
          y2="4"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="3"
          x2="21"
          y1="12"
          y2="12"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="3"
          x2="21"
          y1="20"
          y2="20"
        ></line>
      </svg>
    ),
    grid: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <rect
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          width="18"
          x="3"
          y="3"
        ></rect>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="9.015"
          x2="9.015"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="14.985"
          x2="14.985"
          y1="3"
          y2="21"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="21"
          x2="3"
          y1="9.015"
          y2="9.015"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="21"
          x2="3"
          y1="14.985"
          y2="14.985"
        ></line>
      </svg>
    ),
    save: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <polygon
          fill="none"
          points="20 21 12 13.44 4 21 4 3 20 3 20 21"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></polygon>
      </svg>
    ),
    marked: (
      <svg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <path
          d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <path
          d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <circle
          cx="12.072"
          cy="11.075"
          fill="none"
          r="3.556"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></circle>
      </svg>
    ),
    close: (
      <BsXLg
        aria-label={props.label}
        color={props.color}
        fill={props.color}
        height={props.size}
      />
    ),
  };

  return icons[props.name];
};
