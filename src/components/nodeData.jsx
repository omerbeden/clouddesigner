export const nodes = [
  {
    id: 1,
    name: "Application Load Balancer",
    type: "imageNode",
    settings: {
      resourceName: {
        elementType  : "textField",
        value :""
      },
      region: "eu-east-1",
      scheme: {
        elementType: "radio",
        options: ["Internal", "Internet-facing"],
      },
      ipAddressType: {
        elementType: "radio",
        options: ["IPv4", "Dualstack", "Dualstack without public IPv4"],
      },
      tags: {
        elementType: "tag",
        options: [{ Environment: "dev" }],
      },
    },
    svg: (
      <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="Arch_Elastic-Load-Balancing_32_svg__a"
          >
            <stop stop-color="#A166FF" offset="100%"></stop>
            <stop stop-color="#4D27A8" offset="0%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path
            d="M0 0h40v40H0z"
            fill="url(#Arch_Elastic-Load-Balancing_32_svg__a)"
          ></path>
          <path
            d="M15 27c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7m14 1c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m0-20c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m1 10.5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2M22.931 21h4.12A2.997 2.997 0 0030 23.5c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.997 2.997 0 00-2.949 2.5H23c0-1.489-.416-2.88-1.128-4.075l4.827-4.023A2.982 2.982 0 0029 13c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .361.074.702.191 1.022l-4.885 4.072A7.985 7.985 0 0015 12c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.985 7.985 0 006.306-3.094l4.885 4.072c-.117.32-.191.661-.191 1.022 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.929 0-1.75.433-2.301 1.098l-4.827-4.023A7.927 7.927 0 0022.931 21"
            fill="#FFF"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    name: "EC2",
    type: "imageNode",
    settings:{
      resourceName: {
        elementType  : "textField",
        value :""
      },
    },
    svg: (
      <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="Arch_Amazon-EC2_32_svg__a"
          >
            <stop stop-color="#C8511B" offset="0%"></stop>
            <stop stop-color="#F90" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-EC2_32_svg__a)"></path>
          <path
            d="M26.052 27L26 13.948 13 14v13.052L26.052 27zM27 14h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v.052a.95.95 0 01-.948.948H26v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-.052a.95.95 0 01-.948-.948V27h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-.052a.95.95 0 01.948-.948H13v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h.052a.95.95 0 01.948.948V14zm-6 19H7V19h2v-1H7.062C6.477 18 6 18.477 6 19.062v13.876C6 33.523 6.477 34 7.062 34h13.877c.585 0 1.061-.477 1.061-1.062V31h-1v2zM34 7.062v13.876c0 .585-.476 1.062-1.061 1.062H30v-1h3V7H19v3h-1V7.062C18 6.477 18.477 6 19.062 6h13.877C33.524 6 34 6.477 34 7.062z"
            fill="#FFF"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Lambda",
    type: "imageNode",
    settings:{
      resourceName: {
        elementType  : "textField",
        value :""
      },
    },
    svg: (
      <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="Arch_AWS-Lambda_32_svg__a"
          >
            <stop stop-color="#C8511B" offset="0%"></stop>
            <stop stop-color="#F90" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h40v40H0z" fill="url(#Arch_AWS-Lambda_32_svg__a)"></path>
          <path
            d="M14.386 33H8.27l6.763-14.426 3.064 6.44L14.387 33zm1.085-15.798a.49.49 0 00-.442-.282h-.002a.493.493 0 00-.441.285l-7.538 16.08a.507.507 0 00.028.482c.09.145.247.233.415.233h7.206c.19 0 .363-.111.445-.286l3.944-8.489a.508.508 0 00-.002-.432l-3.613-7.591zM32.018 33h-5.882l-9.47-20.711a.491.491 0 00-.444-.289H12.37l.005-5h7.549l9.424 20.71c.08.177.256.29.446.29h2.224v5zm.49-6h-2.4L20.684 6.29a.492.492 0 00-.446-.29h-8.353a.496.496 0 00-.491.5l-.006 6c0 .132.052.259.144.354a.488.488 0 00.347.146h4.032l9.468 20.711c.08.176.254.289.445.289h6.686a.495.495 0 00.491-.5v-6c0-.276-.219-.5-.491-.5z"
            fill="#FFF"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    name: "SNS",
    type: "imageNode",
    settings:{
      resourceName: {
        elementType  : "textField",
        value :""
      },
    },
    svg: (
      <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="Arch_AWS-Simple-Notification-Service_32_svg__a"
          >
            <stop stop-color="#B0084D" offset="0%"></stop>
            <stop stop-color="#FF4F8B" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path
            d="M0 0h40v40H0z"
            fill="url(#Arch_AWS-Simple-Notification-Service_32_svg__a)"
          ></path>
          <path
            d="M7.01 20.078a1.1 1.1 0 011.105-1.093 1.1 1.1 0 011.104 1.093 1.1 1.1 0 01-1.104 1.093 1.1 1.1 0 01-1.105-1.093zM20.776 33C14.813 33 9.645 28.375 8.47 22.136a2.1 2.1 0 001.69-1.558h2.949v-1h-2.95a2.104 2.104 0 00-1.653-1.554C9.72 12.252 14.838 8 20.776 8c2.933 0 5.354.643 7.194 1.911l.575-.821C26.534 7.703 23.92 7 20.776 7c-6.51 0-12.104 4.726-13.308 11.096C6.62 18.368 6 19.149 6 20.078c0 .916.602 1.688 1.431 1.971C8.591 28.894 14.24 34 20.776 34c3.285 0 6.788-1.667 8.786-3.094l-.59-.811C26.947 31.541 23.627 33 20.777 33zM14.79 18.242c1.111.274 2.523.321 3.343.321.833 0 2.271-.047 3.402-.32l-2.401 5.014a.507.507 0 00-.048.215v2.324l-1.957.915v-3.239a.514.514 0 00-.044-.206l-2.295-5.024zm3.343-1.757c2.314 0 3.554.311 3.951.52-.417.234-1.745.558-3.95.558-2.184 0-3.483-.327-3.873-.558.37-.206 1.582-.52 3.872-.52zm-1.78 11.438a.511.511 0 00.486.03l2.968-1.388a.5.5 0 00.288-.452v-2.529l2.909-6.074a.806.806 0 00.189-.51c0-1.252-2.751-1.515-5.06-1.515-2.266 0-4.969.263-4.969 1.515 0 .19.067.355.18.502l2.775 6.077V27.5c0 .172.088.331.235.423zM30.877 27a1.1 1.1 0 011.104 1.093 1.1 1.1 0 01-1.104 1.093 1.1 1.1 0 01-1.104-1.093A1.1 1.1 0 0130.876 27zm0-16.03a1.1 1.1 0 011.104 1.093 1.1 1.1 0 01-1.104 1.093 1.1 1.1 0 01-1.104-1.093 1.1 1.1 0 011.104-1.093zm1.01 8.015a1.1 1.1 0 011.104 1.093 1.1 1.1 0 01-1.104 1.093 1.1 1.1 0 01-1.104-1.093 1.1 1.1 0 011.104-1.093zm-4.607 1.593h2.561a2.108 2.108 0 002.046 1.593A2.106 2.106 0 0034 20.078a2.106 2.106 0 00-2.114-2.093c-.992 0-1.818.681-2.046 1.593H27.28v-7.015h1.551a2.108 2.108 0 002.046 1.593 2.106 2.106 0 002.114-2.093 2.106 2.106 0 00-2.114-2.093c-.991 0-1.818.681-2.046 1.593h-2.056a.502.502 0 00-.505.5v7.515h-3.061v1h3.061v7.515c0 .277.226.5.505.5h2.056a2.108 2.108 0 002.046 1.593 2.106 2.106 0 002.114-2.093A2.106 2.106 0 0030.876 26c-.991 0-1.818.681-2.046 1.593H27.28v-7.015z"
            fill="#FFF"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 5,
    name: "SQS",
    type: "imageNode",
    settings:{
      resourceName: {
        elementType  : "textField",
        value :""
      },
    },
    svg: (
      <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="Arch_AWS-Simple-Queue-Service_32_svg__a"
          >
            <stop stop-color="#B0084D" offset="0%"></stop>
            <stop stop-color="#FF4F8B" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path
            d="M0 0h40v40H0z"
            fill="url(#Arch_AWS-Simple-Queue-Service_32_svg__a)"
          ></path>
          <path
            d="M14.342 22.35l1.505-1.444a.501.501 0 00.013-.708l-1.505-1.555-.72.695.676.7h-2.32v.999h2.274l-.617.592.694.72zm12.016.003l1.55-1.453a.5.5 0 00.011-.717l-1.55-1.546-.708.707.694.694H24.01v.999H26.3l-.627.588.686.728zm-8.77 1.008a6.458 6.458 0 012.417-.467c.842 0 1.665.163 2.416.467-.669-1.771-.669-3.971 0-5.742-1.502.607-3.331.607-4.833 0 .669 1.77.669 3.97 0 5.742zm-1.944 1.98a.494.494 0 010-.707c1.94-1.936 1.94-6.352 0-8.289a.494.494 0 010-.706.502.502 0 01.709 0c.921.92 2.252 1.447 3.652 1.447 1.4 0 2.731-.528 3.653-1.447a.502.502 0 01.854.354c0 .128-.05.255-.146.352-1.942 1.937-1.942 6.353 0 8.29a.501.501 0 01-.708.706c-.922-.92-2.253-1.447-3.653-1.447s-2.731.527-3.652 1.447a.502.502 0 01-.709 0zm16.898-5.905a1.562 1.562 0 00-1.106-.456 1.558 1.558 0 00-1.105 2.662c.61.608 1.601.608 2.211 0a1.56 1.56 0 000-2.206zm.708 2.913a2.56 2.56 0 01-1.814.749 2.56 2.56 0 01-1.813-4.369c1-.997 2.628-.997 3.627 0 1 .999 1 2.622 0 3.62zM9.67 19.447a1.562 1.562 0 00-1.106-.456 1.56 1.56 0 00-1.105 2.662 1.56 1.56 0 102.21-2.206zm.708 2.912a2.56 2.56 0 01-1.814.749A2.559 2.559 0 016.75 18.74c1-.997 2.627-.997 3.627 0 1 .999 1 2.622 0 3.62zm17.057 6.551A10.514 10.514 0 0119.957 32a10.51 10.51 0 01-7.475-3.09c-1.316-1.312-2.074-2.44-2.537-3.774l-.947.327c.51 1.466 1.365 2.747 2.776 4.154A11.506 11.506 0 0019.957 33c3.093 0 6-1.201 8.185-3.383 1.14-1.139 2.279-2.43 2.87-4.156l-.948-.323c-.525 1.532-1.575 2.719-2.63 3.772zM9.945 15.86l-.947-.328c.512-1.467 1.368-2.749 2.778-4.156 4.51-4.5 11.85-4.502 16.362 0 1.08 1.077 2.266 2.414 2.874 4.156l-.948.328c-.54-1.55-1.635-2.78-2.634-3.777a10.508 10.508 0 00-7.473-3.087 10.508 10.508 0 00-7.472 3.087c-1.298 1.295-2.081 2.46-2.54 3.777z"
            fill="#FFF"
          ></path>
        </g>
      </svg>
    ),
  },

  {
    id: 6,
    name: "VPC",
    type: "groupNode",
    settings:{
      resourceName: {
        elementType  : "textField",
        value :""
      },
    },
    svg: (
      <svg height="48" width="48" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M42.828 23v2H29.311l2.638 2.638-1.414 1.414-4.345-4.345a1 1 0 010-1.414l4.345-4.345 1.414 1.414L29.311 23h13.517zM21.81 24.707l-4.344 4.345-1.414-1.414L18.69 25H5.173v-2H18.69l-2.637-2.638 1.414-1.414 4.344 4.345a.999.999 0 010 1.414zm5.828 11.621l1.414 1.414-4.345 4.345a.997.997 0 01-1.414 0l-4.345-4.345 1.414-1.414L23 38.966V9.325l-2.585 3.016-1.52-1.301 4.345-5.069c.381-.444 1.14-.444 1.52 0l4.344 5.069-1.519 1.301L25 9.325v29.641l2.638-2.638zM24 44C12.972 44 4 35.028 4 24S12.972 4 24 4s20 8.972 20 20-8.972 20-20 20zm0-42C11.87 2 2 11.869 2 24s9.87 22 22 22c12.131 0 22-9.869 22-22S36.131 2 24 2z"
          fill="#4D27AA"
          fill-rule="evenodd"
        ></path>
      </svg>
    ),
  },
];
